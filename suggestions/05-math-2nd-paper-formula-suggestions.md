# উচ্চতর গণিত ২য় পত্র: বিশ্ববিদ্যালয় ও ইঞ্জিনিয়ারিং ভর্তি স্পেশাল সূত্র ও সাজেশন
**বিষয়:** Higher Mathematics 2nd Paper | **লক্ষ্য:** BUET, DU, RU, CU, GST

---

## ১. জটিল সংখ্যা (Complex Numbers)
- **মডুলাস ও আর্গুমেন্ট:** $z = x + iy$ হলে $|z| = r = \sqrt{x^2 + y^2}$
  - মুখ্য আর্গুমেন্ট $\theta \in (-\pi, \pi]$:
    - ১ম চতুর্ভাগ: $\theta = \tan^{-1}|\frac{y}{x}|$
    - ২য় চতুর্ভাগ: $\theta = \pi - \tan^{-1}|\frac{y}{x}|$
    - ৩য় চতুর্ভাগ: $\theta = -\pi + \tan^{-1}|\frac{y}{x}|$
    - ৪র্থ চতুর্ভাগ: $\theta = -\tan^{-1}|\frac{y}{x}|$
- **এককের ঘনমূল:** $1 + \omega + \omega^2 = 0$, $\omega^3 = 1$
  - $\omega = \frac{-1 + \sqrt{3}i}{2}$, $\omega^2 = \frac{-1 - \sqrt{3}i}{2}$

---

## ২. বহুপদী ও বহুপদী সমীকরণ (Polynomials)
- **দ্বিঘাত সমীকরণ:** $ax^2 + bx + c = 0$ এর মূলদ্বয় $\alpha, \beta$ হলে:
  $$\alpha + \beta = -\frac{b}{a}, \quad \alpha\beta = \frac{c}{a}$$
- **পৃথায়ক (Discriminant):** $D = b^2 - 4ac$
  - $D > 0$: মূলদ্বয় বাস্তব ও অসমান
  - $D = 0$: মূলদ্বয় বাস্তব ও সমান
  - $D < 0$: মূলদ্বয় জটিল ও অনুবন্ধী
- **ত্রিঘাত সমীকরণ:** $ax^3 + bx^2 + cx + d = 0$ এর মূলত্রয় $\alpha, \beta, \gamma$ হলে:
  $$\sum \alpha = -\frac{b}{a}, \quad \sum \alpha\beta = \frac{c}{a}, \quad \alpha\beta\gamma = -\frac{d}{a}$$

---

## ৩. কণিক (Conics)
- **পরাবৃত্ত (Parabola):** $y^2 = 4ax$
  - শীর্ষ: $(0, 0)$, উপকেন্দ্র: $(a, 0)$, উপকেন্দ্রিক লম্বের দৈর্ঘ্য $= 4a$, নিয়ামক: $x + a = 0$
- **উপবৃত্ত (Ellipse):** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \ (a > b)$
  - উৎকেন্দ্রিকতা: $e = \sqrt{1 - \frac{b^2}{a^2}} < 1$
  - উপকেন্দ্রদ্বয়: $(\pm ae, 0)$, ক্ষেত্রফল $= \pi ab$
- **অধিবৃত্ত (Hyperbola):** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$
  - উৎকেন্দ্রিকতা: $e = \sqrt{1 + \frac{b^2}{a^2}} > 1$
  - অসীমতটের সমীকরণ: $y = \pm \frac{b}{a}x$

---

## ৪. বিপরীত ত্রিকোণমিতি (Inverse Trigonometry)
- **মুখ্য সূত্রাবলি:**
  $$\tan^{-1} x + \tan^{-1} y = \tan^{-1}\left(\frac{x+y}{1-xy}\right) \quad (xy < 1)$$
  $$2\tan^{-1} x = \sin^{-1}\left(\frac{2x}{1+x^2}\right) = \cos^{-1}\left(\frac{1-x^2}{1+x^2}\right) = \tan^{-1}\left(\frac{2x}{1-x^2}\right)$$
- **ত্রিকোণমিতিক সাধারণ সমাধান:**
  - $\sin \theta = 0 \implies \theta = n\pi$
  - $\cos \theta = 0 \implies \theta = (2n+1)\frac{\pi}{2}$
  - $\tan \theta = 0 \implies \theta = n\pi$

---

## ৫. স্থিতিবিদ্যা (Statics)
- **লামির উপপাদ্য (Lami's Theorem):**
  $$\frac{P}{\sin \alpha} = \frac{Q}{\sin \beta} = \frac{R}{\sin \gamma}$$
- **দুটি বলের লব্ধি:** $R = \sqrt{P^2 + Q^2 + 2PQ\cos\alpha}$
  - সর্বোচ্চ লব্ধি $R_{\max} = P + Q$ ($\alpha = 0^\circ$)
  - সর্বনিম্ন লব্ধি $R_{\min} = |P - Q|$ ($\alpha = 180^\circ$)
