/* ============================================================
   ImpactHub · app.js
   Minimal progressive enhancement — site works without JS
   ============================================================ */

(() => {
  'use strict';

  /* ------------------------------------------------------------
     1. ANIMATED STAT COUNTERS (index.html)
  ------------------------------------------------------------ */
  const animateCounters = () => {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const animateOne = (el) => {
      const target = Number(el.dataset.count) || 0;
      const duration = 1600;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateOne(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach((c) => obs.observe(c));
    } else {
      // Fallback
      counters.forEach(animateOne);
    }
  };

  /* ------------------------------------------------------------
     2. ISSUE FILTERING (issues.html)
  ------------------------------------------------------------ */
  const initFilters = () => {
    const grid = document.getElementById('issues-grid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.card'));
    const categoryChips = document.querySelectorAll('[data-filter-category]');
    const statusChips = document.querySelectorAll('[data-filter-status]');
    const resultsCount = document.getElementById('results-count');
    const emptyState = document.getElementById('empty-state');

    const state = { category: 'all', status: 'all' };

    const applyFilters = () => {
      let visible = 0;

      cards.forEach((card) => {
        const matchCategory =
          state.category === 'all' || card.dataset.category === state.category;
        const matchStatus =
          state.status === 'all' || card.dataset.status === state.status;

        if (matchCategory && matchStatus) {
          card.hidden = false;
          visible++;
        } else {
          card.hidden = true;
        }
      });

      // Update results count
      if (resultsCount) {
        resultsCount.textContent =
          visible === cards.length
            ? `Showing all ${cards.length} issues`
            : `Showing ${visible} of ${cards.length} issues`;
      }

      // Empty state
      if (emptyState) emptyState.hidden = visible !== 0;
    };

    const wireChipGroup = (chips, key) => {
      chips.forEach((chip) => {
        chip.addEventListener('click', () => {
          chips.forEach((c) => c.classList.remove('is-active'));
          chip.classList.add('is-active');
          state[key] =
            key === 'category'
              ? chip.dataset.filterCategory
              : chip.dataset.filterStatus;
          applyFilters();
        });
      });
    };

    wireChipGroup(categoryChips, 'category');
    wireChipGroup(statusChips, 'status');
  };

  /* ------------------------------------------------------------
     3. REPORT FORM (report.html)
  ------------------------------------------------------------ */
  const initReportForm = () => {
    const form = document.getElementById('report-form');
    if (!form) return;

    const successBox = document.getElementById('success-box');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Native HTML5 validation
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Fake submission feedback
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting…';
      }

      setTimeout(() => {
        form.hidden = true;
        if (successBox) {
          successBox.hidden = false;
          successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 700);
    });

    // Live character counter for description
    const desc = form.querySelector('#description');
    const hint = document.getElementById('desc-hint');
    if (desc && hint) {
      const update = () => {
        const left = 500 - desc.value.length;
        hint.textContent = `${left} characters remaining`;
      };
      desc.addEventListener('input', update);
      update();
    }

    // File upload preview text
    const fileInput = form.querySelector('#photo');
    const fileText = form.querySelector('.file-upload-text');
    if (fileInput && fileText) {
      fileInput.addEventListener('change', () => {
        const file = fileInput.files?.[0];
        fileText.textContent = file
          ? `✓ ${file.name}`
          : 'Tap to take or upload a photo';
      });
    }
  };

  /* ------------------------------------------------------------
     4. UPVOTE BUTTON MICRO-INTERACTION
  ------------------------------------------------------------ */
  const initUpvoteButtons = () => {
    document.querySelectorAll('.btn-card').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.dataset.clicked) return;
        btn.dataset.clicked = 'true';
        const original = btn.textContent;
        btn.textContent = '✓ Upvoted';
        btn.style.background = 'var(--c-resolved)';
        btn.style.color = 'white';
        setTimeout(() => {
          btn.textContent = original;
          btn.style.background = '';
          btn.style.color = '';
          delete btn.dataset.clicked;
        }, 1500);
      });
    });
  };

  /* ------------------------------------------------------------
     5. BOOT
  ------------------------------------------------------------ */
  const boot = () => {
    animateCounters();
    initFilters();
    initReportForm();
    initUpvoteButtons();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();