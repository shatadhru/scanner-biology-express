// Auto-generated Math Concept Review Database
// Contains comprehensive concept notes, formulas, question patterns & representative questions for all 20 HSC Higher Math chapters.

const MATH_CONCEPT_DATA = {
  version: "2.0.0",
  lastUpdated: "2026-11-07T08:15:49.695Z",
  totalChapters: 20,
  chapters: [
  {
    "id": "ch-matrix",
    "paper": "First-Paper",
    "paperBn": "১ম পত্র",
    "chapterNum": 1,
    "nameBn": "ম্যাট্রিক্স ও নির্ণায়ক",
    "nameEn": "Matrix & Determinants",
    "rawName": "ম্যাট্রিক্স ও নির্ণায়ক",
    "summary": "এইচএসসি ১ম পত্রের প্রথম অধ্যায়। বিশ্ববিদ্যালয় (বুয়েট, ঢাবি, কুয়েট, রুয়েট, চুয়েট, গুচ্ছ) ও এইচএসসি বোর্ড পরীক্ষায় প্রতিবছর ২-৪টি এমসিকিউ এবং লিখিত প্রশ্ন আসে। ম্যাট্রিক্স গুণনযোগ্যতা, ইনভার্স নির্ণয়, নির্ণায়কের মান ও বৈশিষ্ট্য শীর্ষ গুরুত্বপূর্ণ।",
    "topics": [
      "ম্যাট্রিক্সের প্রকারভেদ ও সমতা",
      "ম্যাট্রিক্সের গুণন ও মাত্রা বিশ্লেষণ",
      "ব্যতিক্রমী ম্যাট্রিক্স ও বিপরীত ম্যাট্রিক্স",
      "নির্ণায়কের ধর্মাবলি ও অনুরাশি-সহগুণক",
      "ক্র্যামারের নিয়ম ও সমীকরণ সমাধান"
    ],
    "concepts": [
      {
        "id": "c-matrix-01",
        "title": "ম্যাট্রিক্সের সমতা ও ট্রেস (Equality & Trace of Matrices)",
        "topic": "ম্যাট্রিক্সের প্রকারভেদ ও সমতা",
        "summary": "ম্যাট্রিক্সের সমতার শর্ত, ভুক্তি তুলনা এবং বর্গ ম্যাট্রিক্সের ট্রেস নির্ণয়ের কৌশল।",
        "intro": {
          "what": "ম্যাট্রিক্সের সমতা হলো দুটি ম্যাট্রিক্সের প্রতিটি অনুরূপ ভুক্তির হুবহু সমান হওয়ার গাণিতিক শর্ত। ট্রেস হলো যেকোনো বর্গ ম্যাট্রিক্সের প্রধান কর্ণের উপাদানগুলোর সমষ্টি।",
          "whyImportant": "ভর্তি পরীক্ষায় চলক ($x, y, k$) এর মান বের করার প্রশ্নে সমতা থেকে সমীকরণ তৈরি হয় এবং ট্রেস সংক্রান্ত সরাসরি প্রশ্ন প্রায়ই আসে।",
          "whereUsed": "রৈখিক সমীকরণ জোট গঠনে, কোঅর্ডিনেট ট্রান্সফর্মেশনে এবং কোয়ান্টাম মেকানিক্সে।",
          "prerequisites": "ম্যাট্রিক্সের সারি ও কলামের ধারণা এবং সাধারণ বীজগণিতীয় সমীকরণ সমাধান।"
        },
        "easyExplanation": [
          "দুটি ম্যাট্রিক্স $A$ এবং $B$ সমান হতে হলে দুটি শর্ত পূরণ হতে হবে: ১) তাদের মাত্রা বা অর্ডার হুবহু একই হতে হবে, এবং ২) তাদের একই অবস্থানের ভুক্তিগুলো পরস্পর সমান হতে হবে ($a_{ij} = b_{ij}$)।",
          "বর্গ ম্যাট্রিক্সের ক্ষেত্রে প্রধান কর্ণ (উপরে বাম থেকে নিচে ডান) বরাবর অবস্থিত ভুক্তিগুলোর যোগফলই হলো ট্রেস। স্কেলার ম্যাট্রিক্সে কর্ণের সব ভুক্তি সমান থাকে, আর অভেদক ম্যাট্রিক্সে কর্ণের ভুক্তিগুলো ১ এবং বাকি সব শূন্য।"
        ],
        "formulas": [
          {
            "latex": "A = B \\iff a_{ij} = b_{ij} \\quad (\\forall i, j)",
            "name": "ম্যাট্রিক্স সমতার সূত্র",
            "meaning": "উভয় ম্যাট্রিক্সের আকার এক হতে হবে এবং প্রতিটি সংশ্লিষ্ট ভুক্তি সমান হতে হবে।",
            "whenToUse": "যখন দুই পাশে দুটি ম্যাট্রিক্স দেওয়া থাকে এবং অজানা ধ্রুবক নির্ণয় করতে হয়।",
            "conditions": "উভয় ম্যাট্রিক্সের সারি ও কলাম সংখ্যা সমান হতে হবে।",
            "variables": "$a_{ij}$: $i$-তম সারি ও $j$-তম কলামের ভুক্তি।",
            "commonMistakes": "আকার না মিলিয়ে ভুক্তি তুলনা করা যাবে না।"
          },
          {
            "latex": "\\text{Tr}(A) = \\sum_{i=1}^n a_{ii} = a_{11} + a_{22} + \\dots + a_{nn}",
            "name": "ট্রেস (Trace) এর সূত্র",
            "meaning": "বর্গ ম্যাট্রিক্সের মুখ্য কর্ণের ভুক্তিগুলোর যোগফল।",
            "whenToUse": "বর্গ ম্যাট্রিক্সের ট্রেস চাইতে বা আইগেনভ্যালুর সমষ্টি বিশ্লেষণে।",
            "conditions": "ম্যাট্রিক্সটিকে অবশ্যই বর্গ ম্যাট্রিক্স ($n \\times n$) হতে হবে।",
            "variables": "$a_{ii}$: প্রধান কর্ণের ভুক্তিসমূহ।",
            "commonMistakes": "গৌণ কর্ণের উপাদান যোগ করে ফেলা।"
          }
        ],
        "analysis": {
          "conditions": "ট্রেস শুধুমাত্র বর্গ ম্যাট্রিক্সের জন্য সংজ্ঞায়িত। আয়তাকার ম্যাট্রিক্সের ট্রেস নেই।",
          "variations": "কখনো সমতা সমীকরণ থেকে দ্বিঘাত সমীকরণ বা যুগপৎ সমীকরণ আসতে পারে।",
          "relationships": "ম্যাট্রিক্সের ট্রেস হলো তার আইগেনভ্যালুগুলোর যোগফলের সমান: $\\text{Tr}(A) = \\sum \\lambda_i$।",
          "transformations": "$\\text{Tr}(A + B) = \\text{Tr}(A) + \\text{Tr}(B)$ এবং $\\text{Tr}(cA) = c\\cdot\\text{Tr}(A)$।",
          "misunderstandings": "শিক্ষার্থীরা গৌণ কর্ণের উপাদান যোগ করে ট্রেস বের করার ভুল করে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "অজ্ঞাত রাশি নির্ণয় (Finding Unknowns from Matrix Equality)",
            "recognition": "উভয় পাশে সমান চিহ্নযুক্ত দুটি ম্যাট্রিক্স থাকবে এবং কোনো ভুক্তিতে $x, y$ বা $k$ থাকবে।",
            "requiredConcept": "ম্যাট্রিক্স সমতার ভুক্তি তুলনা ($a_{ij} = b_{ij}$)।",
            "strategy": "সরাসরি অজানা রাশিযুক্ত ভুক্তি এবং অপর ম্যাট্রিক্সের সংশ্লিষ্ট ভুক্তিকে সমান ধরে একঘাত বা দ্বিঘাত সমীকরণ সমাধান করুন।",
            "keySteps": [
              "অনুরূপ ভুক্তি চিহ্নিত করা",
              "সমীকরণ গঠন করা",
              "বীজগণিতীয় সমাধান করা"
            ],
            "commonTraps": "সবগুলো চলকের মান যাচাই না করে প্রথম সমীকরণ দেখেই উত্তর দাগানো।"
          }
        ],
        "easyExample": {
          "problem": "যদি $\\begin{bmatrix} x+y & 3 \\\\ 2 & x-y \\end{bmatrix} = \\begin{bmatrix} 5 & 3 \\\\ 2 & 1 \\end{bmatrix}$ হয়, তবে $x$ ও $y$ এর মান নির্ণয় করো।",
          "solutionSteps": [
            "ম্যাট্রিক্স সমতা অনুসারে: $x + y = 5$ এবং $x - y = 1$।",
            "উভয় সমীকরণ যোগ করে পাই: $2x = 6 \\implies x = 3$।",
            "প্রথম সমীকরণে মান বসিয়ে পাই: $3 + y = 5 \\implies y = 2$।"
          ],
          "answer": "$x = 3, y = 2$"
        },
        "examExample": {
          "examTag": "DU / RU Admission Exam",
          "problem": "$A = \\begin{bmatrix} 2k & -1 & 3 \\\\ 4 & k+1 & 0 \\\\ 1 & 2 & 3k-2 \\end{bmatrix}$ ম্যাট্রিক্সটির ট্রেস $11$ হলে $k$ এর মান কত?",
          "recognitionApproach": "প্রশ্নটি বর্গ ম্যাট্রিক্সের ট্রেস সংক্রান্ত। মুখ্য কর্ণের উপাদানগুলোর যোগফল ১১ এর সমান ধরতে হবে।",
          "stepByStepSolution": "প্রধান কর্ণের উপাদানগুলো হলো $2k$, $k+1$, এবং $3k-2$। অতএব, $\\text{Tr}(A) = 2k + (k+1) + (3k-2) = 6k - 1$। প্রশ্নমতে, $6k - 1 = 11 \\implies 6k = 12 \\implies k = 2$।",
          "whyItWorks": "ট্রেসের সংজ্ঞা সরাসরি মুখ্য কর্ণের উপাদানের রৈখিক সমষ্টি নির্দেশ করে।",
          "calcAvoidanceTrick": "চোখেই যোগ করুন: $(2+1+3)k + (1-2) = 6k-1 = 11 \\implies 6k=12 \\implies k=2$। ৫ সেকেন্ডে উত্তর সম্ভব।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$A=B \\iff a_{ij}=b_{ij}$",
            "$\\text{Tr}(A) = \\sum_{i=1}^n a_{ii}$"
          ],
          "importantConditions": [
            "ট্রেস শুধুমাত্র বর্গ ম্যাট্রিক্সের জন্য প্রযোজ্য।"
          ],
          "keyObservations": [
            "$\\text{Tr}(AB) = \\text{Tr}(BA)$ সর্বদা সত্য।"
          ],
          "recognitionTips": [
            "ম্যাট্রিক্স সমতা দেখা মাত্র অনুরূপ স্থান মেলাও।"
          ],
          "commonMistakes": [
            "গৌণ কর্ণ বিবেচনা করা যাবে না।"
          ],
          "summary": "সমতার জন্য অর্ডার ও প্রতি ভুক্তি এক হতে হবে। প্রধান কর্ণের যোগফলই ট্রেস।"
        }
      },
      {
        "id": "c-matrix-02",
        "title": "ম্যাট্রিক্সের গুণন ও গুণনযোগ্যতার শর্ত (Matrix Multiplication & Compatibility)",
        "topic": "ম্যাট্রিক্সের গুণন ও মাত্রা বিশ্লেষণ",
        "summary": "দুটি ম্যাট্রিক্সের গুণনযোগ্যতার মূল শর্ত, ফলাফল ম্যাট্রিক্সের মাত্রা এবং সারি-কলাম গুণন পদ্ধতি।",
        "intro": {
          "what": "ম্যাট্রিক্স গুণন হলো প্রথম ম্যাট্রিক্সের সারি এবং দ্বিতীয় ম্যাট্রিক্সের কলামের মধ্যে ডট প্রোডাক্টের মাধ্যমে নতুন ম্যাট্রিক্স তৈরি করার পদ্ধতি।",
          "whyImportant": "ভর্তি পরীক্ষার প্রতিটি সেটে গুণনযোগ্যতার মাত্রা সংক্রান্ত কমপক্ষে একটি শর্টকাট প্রশ্ন আসে।",
          "whereUsed": "গ্রাফিক্স রেন্ডারিং, কৃত্রিম বুদ্ধিমত্তা ও নিউরাল নেটওয়ার্কের ওয়েট মাল্টিপ্লিকেশন।",
          "prerequisites": "ম্যাট্রিক্সের মাত্রা ($m \\times n$) ও ভেক্টরের স্কেলার গুণনের ধারণা।"
        },
        "easyExplanation": [
          "প্রথম ম্যাট্রিক্সের কলাম সংখ্যা এবং দ্বিতীয় ম্যাট্রিক্সের সারি সংখ্যা সমান না হলে কখনো গুণ করা সম্ভব নয়। অর্থাৎ $A_{m \\times n}$ এবং $B_{n \\times p}$ হলে তবেই $AB$ সম্ভব।",
          "ফলাফল ম্যাট্রিক্স $C = AB$ এর আকার হবে প্রথমটির সারি এবং দ্বিতীয়টির কলাম অর্থাৎ $m \\times p$। গুণ করার নিয়ম হলো \"সারি ধরে নেমে কলাম ধরে নামা\" (Row by Column)।"
        ],
        "formulas": [
          {
            "latex": "A_{m \\times n} \\times B_{n \\times p} = C_{m \\times p}",
            "name": "গুণনযোগ্যতার মাত্রা সূত্র",
            "meaning": "প্রথমটির কলাম = দ্বিতীয়টির সারি হলে গুণফল সম্ভব এবং মাত্রা হবে $m \\times p$।",
            "whenToUse": "গুণফল ম্যাট্রিক্সের আকার জানতে বা গুণন সম্ভব কিনা যাচাই করতে।",
            "conditions": "অভ্যন্তরীণ মাত্রা দুটি সমান ($n = n$) হতে হবে।",
            "variables": "$m$: $A$-এর সারি, $n$: $A$-এর কলাম/$B$-এর সারি, $p$: $B$-এর কলাম।",
            "commonMistakes": "বাইরের মাত্রা আর ভেতরের মাত্রার মধ্যে বিভ্রান্ত হওয়া।"
          },
          {
            "latex": "(AB)^T = B^T A^T",
            "name": "ট্রান্সপোজের রিভার্সাল সূত্র",
            "meaning": "গুণফলের ট্রান্সপোজ হলো উল্টো ক্রমে ট্রান্সপোজগুলোর গুণফল।",
            "whenToUse": "জটিল ম্যাট্রিক্স সমীকরণ সরলীকরণে ও ভর্তি পরীক্ষার শর্টকাটে।",
            "conditions": "গুণন সংজ্ঞায়িত হতে হবে।",
            "variables": "$A^T, B^T$: $A$ ও $B$ এর ট্রান্সপোজ ম্যাট্রিক্স।",
            "commonMistakes": "$(AB)^T = A^T B^T$ মনে করা।"
          }
        ],
        "analysis": {
          "conditions": "ম্যাট্রিক্স গুণন সাধারণত বিনিময় বিধি মানে না, অর্থাৎ $AB \\neq BA$।",
          "variations": "যদি $AB = BA$ হয়, তবে তাদের বিনিময়যোগ্য (Commutative) বলা হয়।",
          "relationships": "গুণন সংযোগ বিধি মানে: $(AB)C = A(BC)$ এবং বণ্টন বিধি মানে: $A(B+C) = AB + AC$।",
          "transformations": "$(AB)^T = B^T A^T$।",
          "misunderstandings": "অনেকে ভাবে $AB = 0$ হলে অবশ্যই $A = 0$ বা $B = 0$ হতে হবে; কিন্তু দুটি অশূন্য ম্যাট্রিক্সের গুণফলও শূন্য ম্যাট্রিক্স হতে পারে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "মাত্রার শর্ত ও ফলাফল আকার নির্ণয়",
            "recognition": "$A, B, C$ এর মাত্রা দেওয়া থাকবে এবং $A^T B$ বা $AB^T$ এর মাত্রা জানতে চাইবে।",
            "requiredConcept": "ট্রান্সপোজের মাত্রা উল্টে যায় ($A_{m \\times n} \\implies A^T_{n \\times m}$) এবং গুণনের মাত্রা সূত্র।",
            "strategy": "প্রথমে ট্রান্সপোজের আকার ঠিক করুন, তারপর পাশাপাশি লিখে ভেতরের অংশ মিলিয়ে বাইরের অংশ নিন।",
            "keySteps": [
              "ট্রান্সপোজের মাত্রা লেখা",
              "ভেতরের ডাইমেনশন চেক করা",
              "ফলাফল মাত্রা নির্ধারণ করা"
            ],
            "commonTraps": "ট্রান্সপোজ করতে ভুলে যাওয়া।"
          }
        ],
        "easyExample": {
          "problem": "যদি $A$ ম্যাট্রিক্সের মাত্রা $3 \\times 4$ এবং $B$ এর মাত্রা $4 \\times 2$ হয়, তবে $AB$ এর মাত্রা কত?",
          "solutionSteps": [
            "$A$ এর কলাম সংখ্যা ৪ এবং $B$ এর সারি সংখ্যা ৪। যেহেতু অভ্যন্তরীণ মাত্রা সমান, গুণন সম্ভব।",
            "ফলাফল ম্যাট্রিক্সের মাত্রা হবে প্রথমটির সারি $\\times$ দ্বিতীয়টির কলাম।",
            "অতএব, $AB$ এর মাত্রা হবে $3 \\times 2$।"
          ],
          "answer": "$3 \\times 2$"
        },
        "examExample": {
          "examTag": "BUET Admission Exam",
          "problem": "যদি $A_{3 \\times 2}$, $B_{2 \\times 4}$, এবং $C_{4 \\times 3}$ হয়, তবে $(AB)C$ ম্যাট্রিক্সের মাত্রা কত এবং এর ট্রেস কি সংজ্ঞায়িত?",
          "recognitionApproach": "ক্রমান্বয়ে মাত্রা পরীক্ষা করুন: $A(3\\times 2) \\times B(2\\times 4) \\implies AB(3\\times 4)$। এরপর $AB(3\\times 4) \\times C(4\\times 3) \\implies (AB)C(3\\times 3)$।",
          "stepByStepSolution": "১) $AB$ এর মাত্রা $3 \\times 4$।\n২) $(AB)C = (3 \\times 4) \\times (4 \\times 3) = 3 \\times 3$।\n৩) যেহেতু ফলাফল ম্যাট্রিক্সটি একটি $3 \\times 3$ বর্গ ম্যাট্রিক্স, তাই এর ট্রেস সংজ্ঞায়িত।",
          "whyItWorks": "মাত্রা সমীকরণ থেকে নিশ্চিত হয় যে ফলাফল একটি বর্গ ম্যাট্রিক্স।",
          "calcAvoidanceTrick": "প্রান্তীয় মাত্রা দেখুন: প্রথমটির সারি ৩, শেষটির কলাম ৩ $\\implies 3 \\times 3$ বর্গ ম্যাট্রিক্স।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$A_{m \\times n} B_{n \\times p} = C_{m \\times p}$",
            "$(AB)^T = B^T A^T$"
          ],
          "importantConditions": [
            "$AB$ সংজ্ঞায়িত হলেই $BA$ সংজ্ঞায়িত হবে এমন কোনো নিশ্চয়তা নেই।"
          ],
          "keyObservations": [
            "$AB = 0$ হলেও $A \\neq 0, B \\neq 0$ হতে পারে।"
          ],
          "recognitionTips": [
            "ভেতরের সংখ্যা দুটি মিললে গুণ সম্ভব, বাইরের দুটি ফলাফল।"
          ],
          "commonMistakes": [
            "$AB = BA$ ধরে নেওয়া।"
          ],
          "summary": "গুণনের শর্ত: প্রথমটির কলাম = দ্বিতীয়টির সারি। মাত্রা হবে প্রথমটির সারি বাই দ্বিতীয়টির কলাম।"
        }
      },
      {
        "id": "c-matrix-03",
        "title": "ব্যতিক্রমী ম্যাট্রিক্স ও বিপরীত ম্যাট্রিক্স (Singular & Inverse Matrices)",
        "topic": "ব্যতিক্রমী ম্যাট্রিক্স ও বিপরীত ম্যাট্রিক্স",
        "summary": "নির্ণায়কের মান শূন্য হলে ব্যতিক্রমী ম্যাট্রিক্স এবং ২x২ ম্যাট্রিক্সের বিপরীত নির্ণয়ের শর্টকাট কৌশল।",
        "intro": {
          "what": "যে বর্গ ম্যাট্রিক্সের নির্ণায়কের মান শূন্য ($|A| = 0$), তাকে ব্যতিক্রমী (Singular) ম্যাট্রিক্স বলে। যে ম্যাট্রিক্সের নির্ণায়কের মান অশূন্য ($|A| \\neq 0$), তার অনন্য বিপরীত ম্যাট্রিক্স $A^{-1}$ বিদ্যমান।",
          "whyImportant": "ভর্তি পরীক্ষায় \"k এর মান কত হলে ম্যাট্রিক্সটি ব্যতিক্রমী হবে?\" এবং ২x২ ইনভার্স বের করার প্রশ্ন প্রতিবছর আসে।",
          "whereUsed": "ক্রিপ্টোগ্রাফি, কোডিং থিওরি ও সমীকরণ জোট সমাধানের বিপরীত প্রক্রিয়া।",
          "prerequisites": "২x২ ও ৩x৩ নির্ণায়কের মান বের করার নিয়ম।"
        },
        "easyExplanation": [
          "সংখ্যার ক্ষেত্রে যেমন শুন্য দিয়ে ভাগ করা যায় না, তেমনি ম্যাট্রিক্সের ক্ষেত্রে যার নির্ণায়ক শূন্য, তার কোনো ইনভার্স থাকে না। তাই তাকে ব্যতিক্রমী বলে।",
          "২x২ ম্যাট্রিক্স $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ এর বিপরীত ম্যাট্রিক্স বের করার চমৎকার শর্টকাট আছে: প্রধান কর্ণের ভুক্তিদ্বয় স্থান বিনিময় করবে ($a$ ও $d$), গৌণ কর্ণের ভুক্তিদ্বয়ের শুধু চিহ্ন পরিবর্তন হবে ($-b$ ও $-c$), এবং পুরো ম্যাট্রিক্সকে নির্ণায়ক $(ad - bc)$ দিয়ে ভাগ করতে হবে।"
        ],
        "formulas": [
          {
            "latex": "|A| = 0 \\implies \\text{Singular (ব্যতিক্রমী)}",
            "name": "ব্যতিক্রমী ম্যাট্রিক্সের শর্ত",
            "meaning": "ম্যাট্রিক্সের নির্ণায়কের মান শূন্য হতে হবে। এর কোনো বিপরীত ম্যাট্রিক্স থাকে না।",
            "whenToUse": "অজ্ঞাত রাশি $k$ বা $p$ এর মান বের করতে যখন ব্যতিক্রমী বলা থাকে।",
            "conditions": "অবশ্যই বর্গ ম্যাট্রিক্স হতে হবে।",
            "variables": "$|A|$: $A$ ম্যাট্রিক্সের নির্ণায়ক।",
            "commonMistakes": "ম্যাট্রিক্স ভুক্তির যোগফল শূন্য ধরা।"
          },
          {
            "latex": "A^{-1} = \\frac{1}{ad - bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}",
            "name": "২x২ বিপরীত ম্যাট্রিক্স শর্টকাট",
            "meaning": "প্রধান কর্ণ অদল-বদল, গৌণ কর্ণের চিহ্ন বদল, নির্ণায়ক দ্বারা ভাগ।",
            "whenToUse": "যেকোনো ২x২ ম্যাট্রিক্সের ইনভার্স ম্যাট্রিক্স ৩০ সেকেন্ডে বের করতে।",
            "conditions": "$ad - bc \\neq 0$ হতে হবে।",
            "variables": "$a, b, c, d$: ম্যাট্রিক্সের ৪টি ভুক্তি।",
            "commonMistakes": "চিহ্ন বদলাতে ভুলে যাওয়া বা প্রধান কর্ণে চিহ্ন বদলানো।"
          }
        ],
        "analysis": {
          "conditions": "বিপরীত ম্যাট্রিক্সের অস্তিত্বের একমাত্র শর্ত হলো $|A| \\neq 0$ (অব্যতিক্রমী)।",
          "variations": "৩x৩ ম্যাট্রিক্সের ক্ষেত্রে $A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$ যেখানে $\\text{adj}(A) = (\\text{Cofactor}(A))^T$।",
          "relationships": "$A A^{-1} = A^{-1} A = I$ এবং $|A^{-1}| = \\frac{1}{|A|}$।",
          "transformations": "$(AB)^{-1} = B^{-1} A^{-1}$ এবং $(A^T)^{-1} = (A^{-1})^T$।",
          "misunderstandings": "শিক্ষার্থীরা সহগুণক ম্যাট্রিক্স বের করে ট্রান্সপোজ করতে ভুলে যায়।"
        },
        "questionPatterns": [
          {
            "typeTitle": "ব্যতিক্রমী হওয়ার শর্তে চলকের মান নির্ণয়",
            "recognition": "প্রশ্নে একটি ম্যাট্রিক্স দেওয়া থাকবে যাতে $k$ বা $x$ থাকবে এবং বলা থাকবে \"ম্যাট্রিক্সটি ব্যতিক্রমী হলে $k=$ কত?\"",
            "requiredConcept": "$|A| = 0$ ধরে সমীকরণ তৈরি।",
            "strategy": "ম্যাট্রিক্সের নির্ণায়কের মান বের করে শূন্যের সমান বসিয়ে সমাধান করুন।",
            "keySteps": [
              "নির্ণায়ক $|A|$ এর বিস্তার করা",
              "$|A| = 0$ সমীকরণ তৈরি করা",
              "চলকের মান বের করা"
            ],
            "commonTraps": "চিহ্ন পরিবর্তনে প্লাস-মাইনাস ভুল করা।"
          }
        ],
        "easyExample": {
          "problem": "$A = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$ হলে $A^{-1}$ নির্ণয় করো।",
          "solutionSteps": [
            "নির্ণায়ক বের করি: $|A| = (2)(3) - (5)(1) = 6 - 5 = 1$।",
            "যেহেতু $|A| = 1 \\neq 0$, তাই এর বিপরীত ম্যাট্রিক্স বিদ্যমান।",
            "প্রধান কর্ণ অদল-বদল: ২ এবং ৩ এর স্থান বদল হয়ে ৩ এবং ২ হবে।",
            "গৌণ কর্ণের চিহ্ন পরিবর্তন: ৫ এবং ১ হয়ে যাবে $-5$ এবং $-1$।",
            "অতএব, $A^{-1} = \\frac{1}{1} \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix} = \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$।"
          ],
          "answer": "$\\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$"
        },
        "examExample": {
          "examTag": "CKREUT / GST Admission",
          "problem": "$A = \\begin{bmatrix} p-2 & 4 \\\\ 3 & p-3 \\end{bmatrix}$ ব্যতিক্রমী হলে $p$ এর মান কত?",
          "recognitionApproach": "ব্যতিক্রমী হওয়ার শর্ত $|A| = 0$ প্রয়োগ করতে হবে।",
          "stepByStepSolution": "নির্ণায়ক: $|A| = (p-2)(p-3) - (4)(3) = 0$\n$\\implies p^2 - 5p + 6 - 12 = 0$\n$\\implies p^2 - 5p - 6 = 0$\n$\\implies (p-6)(p+1) = 0$\n$\\therefore p = 6$ অথবা $p = -1$।",
          "whyItWorks": "নির্ণায়কের মান শূন্য হলেই ম্যাট্রিক্সটি ব্যতিক্রমী হয়।",
          "calcAvoidanceTrick": "মিডল টার্ম দ্রুত মুখে মুখে: গুণফল $-6$, যোগফল $-5$ $\\implies -6$ ও $+1$, তাই মূল হবে $6$ ও $-1$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$|A| = 0 \\iff$ Singular",
            "$A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$",
            "$|A^{-1}| = \\frac{1}{|A|}$"
          ],
          "importantConditions": [
            "বিপরীত ম্যাট্রিক্সের জন্য $|A| \\neq 0$ বাধ্যতামূলক।"
          ],
          "keyObservations": [
            "$(AB)^{-1} = B^{-1} A^{-1}$ (Reversal law)।"
          ],
          "recognitionTips": [
            "ব্যতিক্রমী দেখলেই নির্ণায়ক = ০ বসিয়ে সমাধান।"
          ],
          "commonMistakes": [
            "২x২ ইনভার্সে মাইনাস চিহ্নের স্থান ওলটপালট করা।"
          ],
          "summary": "ব্যতিক্রমীর নির্ণায়ক শূন্য, ইনভার্স নেই। ইনভার্স পেতে কর্ণ অদলবদল ও চিহ্নবদল করে নির্ণায়ক দিয়ে ভাগ।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "ম্যাট্রিক্সের সমতা ও ভুক্তি ভিত্তিক সমস্যা",
        "description": "অনুরূপ ভুক্তির মান তুলনা করে অজানা চলক ($x, y, k$) এর মান নির্ণয়ের প্রশ্নাবলি।",
        "solvingStrategy": "১) উভয় পাশের ম্যাট্রিক্সের অনুরূপ ভুক্তিগুলো সমান ($a_{ij}=b_{ij}$) ধরে সমীকরণ জোড়া তৈরি করুন। ২) সহজ সমীকরণটি আগে সমাধান করে বাকি চলক যাচাই করুন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0001",
            "question": "$2 \\times 2$ বর্গ ম্যাট্রix এর $a_{ij} = \\begin{cases} i+j & : i \\neq j \\\\ 2i-j & : i=j \\end{cases}$ হলে নিচের কোনটি সত্য? [RU '24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\begin{pmatrix} 1 & 3 \\\\ 2 & 3 \\end{pmatrix}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 3 \\end{pmatrix}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 2 \\end{pmatrix}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\begin{pmatrix} 3 & 2 \\\\ 3 & 1 \\end{pmatrix}$"
              }
            ],
            "answer": "a",
            "explanation": "Sol*: $a_{11}$ এর জন্য $i=j$;\r\n$\\therefore a_{11} = 2i-j = 2 \\times 1 - 1 = 1$\r\n$a_{12}$ এর জন্য $i \\neq j$; $\\therefore a_{12} = i+j = 1+2 = 3$\r\n$a_{21}$ এর জন্য $i \\neq j$; $\\therefore a_{21} = i+j = 2+1 = 3$\r\n$a_{22}$ এর জন্য $i=j$;\r\n$\\therefore a_{22} = 2i-j = 2 \\times 2 - 2 = 2$\r\n$\\therefore$ নির্ণেয় ম্যাট্রিক্স $= \\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix} = \\begin{pmatrix} 1 & 3 \\\\ 3 & 2 \\end{pmatrix}$",
            "university": "RU",
            "year": "24-25",
            "topic": "Chapter 01: ম্যাট্রিক্স ও নির্ণায়ক"
          },
          {
            "id": "math-q-0002",
            "question": "$2 \\times 2$ বর্গ ম্যাট্রিক্স এর $c_{ij} = \\begin{cases} i+2j & : i \\neq j \\\\ 2i+j & : i=j \\end{cases}$ হলে নিচের কোনটি সত্য? [RU '24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\begin{pmatrix} 3 & 5 \\\\ 4 & 6 \\end{pmatrix}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\begin{pmatrix} 3 & 4 \\\\ 5 & 6 \\end{pmatrix}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\begin{pmatrix} 3 & 4 \\\\ 6 & 5 \\end{pmatrix}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\begin{pmatrix} 6 & 4 \\\\ 5 & 3 \\end{pmatrix}$"
              }
            ],
            "answer": "a",
            "explanation": "Sol*: $c_{11}$ এর জন্য $i=j$; $2i+j = 2+1=3 = c_{11}$\r\n$c_{12}$ এর জন্য $i \\neq j$; $i+2j = 1+4=5 = c_{12}$\r\n$c_{21}$ এর জন্য $i \\neq j$; $i+2j = 2+2=4 = c_{21}$\r\n$c_{22}$ এর জন্য $i = j$; $2i+j = 4+2=6 = c_{22}$\r\n$\\therefore$ ম্যাট্রিক্সটি হবে $= \\begin{pmatrix} 3 & 5 \\\\ 4 & 6 \\end{pmatrix}$",
            "university": "RU",
            "year": "24-25",
            "topic": "Chapter 01: ম্যাট্রিক্স ও নির্ণায়ক"
          },
          {
            "id": "math-q-0003",
            "question": "$\\begin{bmatrix} 8 & x \\\\ y-2 & 6 \\end{bmatrix} = \\begin{bmatrix} 8 & 2+y \\\\ 4 & 6 \\end{bmatrix}$ হলে $(x,y)$ কোনটি? [RU '23-24]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$(8, 2)$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$(6, 2)$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$(6, 8)$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$(8, 6)$"
              }
            ],
            "answer": "a",
            "explanation": "Sol*: $\\begin{bmatrix} 8 & x \\\\ y-2 & 6 \\end{bmatrix} = \\begin{bmatrix} 8 & 2+y \\\\ 4 & 6 \\end{bmatrix}$\r\n$\\therefore y-2 = 4 \\Rightarrow y=6$\r\n$\\therefore x = 2+y \\Rightarrow x = 2+6 \\Rightarrow x=8$\r\n$\\therefore (x,y) = (8,6)$",
            "university": "RU",
            "year": "23-24",
            "topic": "Chapter 01: ম্যাট্রিক্স ও নির্ণায়ক"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0004",
            "question": "$\\begin{pmatrix} 1+2i & 0 \\\\ 0 & 1-2i \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$ হলে, $x$ ও $y$ এর মান কত? [CU '16-17]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$x=y=0$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$x=0, \\frac{1}{5}(1+2i)$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$x \\neq 0, \\frac{1}{5}(1-2i)$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$x=0, y = \\frac{(1+2i)(1+2i)}{5}$"
              }
            ],
            "answer": "a",
            "explanation": "Sol*: $\\begin{pmatrix} 1+2i & 0 \\\\ 0 & 1-2i \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} (1+2i)x \\\\ (1-2i)y \\end{pmatrix}$\r\n$\\therefore \\begin{pmatrix} (1+2i)x \\\\ (1-2i)y \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} \\Rightarrow (1+2i)x = 0, x=0$\r\nআবার, $(1-2i)y = 1 \\Rightarrow y = \\frac{1}{1-2i} = \\frac{(1+2i)}{(1-2i)^2}$\r\n$\\therefore y = \\frac{1+2i}{5}$ সুতরাং, সঠিক উত্তর নেই।",
            "university": "CU",
            "year": "16-17",
            "topic": "Chapter 01: ম্যাট্রিক্স ও নির্ণায়ক",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "ব্যতিক্রমী ম্যাট্রিক্স ও বিপরীত ম্যাট্রিক্স নির্ণয়",
        "description": "ম্যাট্রিক্স ব্যতিক্রমী হওয়ার শর্ত প্রয়োগ এবং ২x২ ও ৩x৩ বিপরীত ম্যাট্রিক্স নির্ণয়।",
        "solvingStrategy": "১) ব্যতিক্রমী বললে নির্ণায়কের মান বের করে ০ বসান। ২) ২x২ বিপরীতের জন্য মুখ্য কর্ণ অদলবদল ও গৌণ কর্ণে মাইনাস চিহ্ন দিয়ে নির্ণায়ক দিয়ে ভাগ করুন।",
        "startIndex": 10,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0011",
            "question": "$A = \\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix}$ হলে, $A^3 - 7I_3 = ?$ [CU'23-24]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$I_3$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$2I_3$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$A$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$2A$"
              }
            ],
            "answer": "a",
            "explanation": "",
            "university": "CU",
            "year": "23-24",
            "topic": "Chapter 01: ম্যাট্রিক্স ও নির্ণায়ক"
          },
          {
            "id": "math-q-0012",
            "question": "যদি $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & -4 \\end{pmatrix}$ হয়, তবে $A^2 + 3A - 10I$ হবে একটি- [CU'23-24]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "অভেদক ম্যাট্রিক্স"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "প্রতিসম ম্যাট্রিক্স"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "শূন্য ম্যাট্রیکس"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "কোনোটিই নয়"
              }
            ],
            "answer": "c",
            "explanation": "Sol^n: $A^2 + 3A - 10I = \\begin{pmatrix} 1 & 2 \\\\ 3 & -4 \\end{pmatrix} \\begin{pmatrix} 1 & 2 \\\\ 3 & -4 \\end{pmatrix} + 3\\begin{pmatrix} 1 & 2 \\\\ 3 & -4 \\end{pmatrix} - 10\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$\r\n\r\n$$= \\begin{pmatrix} 7 & -6 \\\\ -9 & 22 \\end{pmatrix} + \\begin{pmatrix} 3 & 6 \\\\ 9 & -12 \\end{pmatrix} - \\begin{pmatrix} 10 & 0 \\\\ 0 & 10 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$$\r\n\r\nযা একটি শূন্য ম্যাট্রিক্স।\r\nবিকল্প: $A^2 + 3A - 10I = A^2 + 5A - 2A - 10I$\r\n$= A(A + 5I) - 2I(A + 5I) = (A + 5I)(A - 2I)$\r\n$$\\left(\\begin{pmatrix} 1 & 2 \\\\ 3 & -4 \\end{pmatrix} + \\begin{pmatrix} 5 & 0 \\\\ 0 & 5 \\end{pmatrix}\\right) \\left(\\begin{pmatrix} 1 & 2 \\\\ 3 & -4 \\end{pmatrix} - \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}\\right)$$\r\n$$\\begin{aligned}\r\n&= \\begin{pmatrix} 6 & 2 \\\\ 3 & 1 \\end{pmatrix} \\begin{pmatrix} -1 & 2 \\\\ 3 & -6 \\end{pmatrix} = \\begin{pmatrix} -6 + 6 & 12 - 12 \\\\ -3 + 3 & 6 - 6 \\end{pmatrix} \\\\ &= \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix} \\text{ যা একটি শূন্য ম্যাট্রিক্স।}\r\n\\end{aligned}",
            "university": "CU",
            "year": "23-24",
            "topic": "Chapter 01: ম্যাট্রিক্স ও নির্ণায়ক"
          },
          {
            "id": "math-q-0013",
            "question": "$A = \\begin{pmatrix} 3 & 5 & 1 \\\\ 4 & 0 & 2 \\\\ 1 & 6 & 4 \\end{pmatrix}$ হলে, $A - 2I$ এর মান কোনটি?\r\n[JU'22-23]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\begin{pmatrix} 5 & 5 & 1 \\\\ 4 & 2 & 2 \\\\ 1 & 6 & 6 \\end{pmatrix}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\begin{pmatrix} 1 & 5 & 1 \\\\ 4 & -2 & 2 \\\\ 1 & 6 & 2 \\end{pmatrix}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\begin{pmatrix} 1 & 3 & -1 \\\\ 4 & 0 & 2 \\\\ 1 & 6 & 4 \\end{pmatrix}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\begin{pmatrix} 1 & 3 & -1 \\\\ 2 & -2 & 0 \\\\ -1 & 4 & 2 \\end{pmatrix}$"
              }
            ],
            "answer": "b",
            "explanation": "Sol^n: $A - 2I = \\begin{pmatrix} 3 & 5 & 1 \\\\ 4 & 0 & 2 \\\\ 1 & 6 & 4 \\end{pmatrix} - \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}$\r\n$$\\begin{aligned}\r\n&= \\begin{pmatrix} 1 & 5 & 1 \\\\ 4 & -2 & 2 \\\\ 1 & 6 & 2 \\end{pmatrix}\r\n\\end{aligned}",
            "university": "JU",
            "year": "22-23",
            "topic": "Chapter 01: ম্যাট্রিক্স ও নির্ণায়ক"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0014",
            "question": "A ম্যাট্রিক্সের ক্রম $2 \\times 3$ এবং B ম্যাট্রিক্সের ক্রম $3 \\times 2$ হলে, AB এর ক্রম কোনটি? [JU'22-23]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$2 \\times 2$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$2 \\times 3$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$3 \\times 2$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$3 \\times 3$"
              }
            ],
            "answer": "a",
            "explanation": "",
            "university": "JU",
            "year": "22-23",
            "topic": "Chapter 01: ম্যাট্রিক্স ও নির্ণায়ক",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "ব্যতিক্রমী ম্যাট্রিক্সের জ্যামিতিক তাৎপর্য কী?",
        "description": "কেন $|A|=0$ হলে ম্যাট্রিক্সের বিপরীত থাকে না এবং এর সাথে ক্ষেত্রফল শূন্য হওয়ার সম্পর্ক কী?",
        "promptQuery": "ব্যতিক্রমী ম্যাট্রিক্সের (Singular Matrix) জ্যামিতিক তাৎপর্য এবং কেন এর বিপরীত ম্যাট্রিক্স নির্ণয় অসম্ভব তা সহজ বাংলায় বুঝিয়ে দাও।"
      },
      {
        "title": "২x২ বিপরীত ম্যাট্রিক্সের শর্টকাটের পেছনের কারণ",
        "description": "কেন শুধুমাত্র মুখ্য কর্ণ অদলবদল এবং গৌণ কর্ণের চিহ্ন পরিবর্তন করলেই অ্যাডজয়েন্ট পাওয়া যায়?",
        "promptQuery": "২x২ ম্যাট্রিক্সের ইনভার্স শর্টকাটের পেছনের সহগুণক ও অ্যাডজয়েন্ট গাণিতিক প্রমাণ ব্যাখ্যা করো।"
      },
      {
        "title": "ম্যাট্রিক্স গুণনে $(AB)^T = B^T A^T$ কেন হয়?",
        "description": "ট্রান্সপোজের রিভার্সাল সূত্রটির গাণিতিক ভিত্তি ও সারি-কলাম রূপান্তরের নিখুঁত ব্যাখ্যা।",
        "promptQuery": "প্রমাণ করো যে $(AB)^T = B^T A^T$ এবং কেন ক্রমান্বয় উল্টে যায় তা সহজ উদাহরণ দিয়ে বুঝিয়ে দাও।"
      },
      {
        "title": "বুয়েট ও ঢাবি ভর্তি পরীক্ষার শীর্ষ ৩টি ম্যাট্রিক্স ফাঁদ",
        "description": "কোন জায়গাগুলোতে ছাত্রছাত্রীরা নেগেটিভ মার্ক খায় এবং কীভাবে তা এড়ানো যায়।",
        "promptQuery": "ম্যাট্রিক্স ও নির্ণায়ক অধ্যায়ের ভর্তি পরীক্ষায় বারবার আসা ৩টি সবচেয়ে ট্রিকি প্রশ্ন ও ফাঁদ বিশ্লেষণ করো।"
      },
      {
        "title": "ক্র্যামারের নিয়ম বনাম বিপরীত ম্যাট্রিক্স পদ্ধতি",
        "description": "সমীকরণ জোট সমাধানে কোন পদ্ধতিটি দ্রুত এবং কখন ক্র্যামার ব্যর্থ হয়?",
        "promptQuery": "ক্র্যামারের নিয়ম (Cramer's Rule) কখন ব্যর্থ হয় এবং $D=0$ হলে সমীকরণ জোটের সমাধান কীরূপ হয়?"
      }
    ],
    "questionCount": 179
  },
  {
    "id": "ch-vector",
    "paper": "First-Paper",
    "paperBn": "১ম পত্র",
    "chapterNum": 2,
    "nameBn": "ভেক্টর",
    "nameEn": "Vectors",
    "rawName": "ভেক্টর",
    "summary": "উচ্চতর গণিত ১ম পত্রের ভেক্টর অধ্যায়। ডট গুণন, ক্রস গুণন, লম্ব ও সমান্তরাল ভেক্টরের শর্ত, অভিক্ষেপ ও উপাংশ এবং সামান্তরিকের ক্ষেত্রফল নির্ণয় থেকে প্রতিবছর ইঞ্জিনিয়ারিং ও ভার্সিটি পরীক্ষায় একাধিক প্রশ্ন আসে।",
    "topics": [
      "ভেক্টরের মৌলিক ধারণা ও একক ভেক্টর",
      "স্কেলার (ডট) গুণন ও অভিক্ষেপ-উপাংশ",
      "ভেক্টর (ক্রস) গুণন ও জ্যামিতিক প্রয়োগ",
      "সমরেখ ও সমতলীয় ভেক্টরের শর্ত"
    ],
    "concepts": [
      {
        "id": "c-vector-01",
        "title": "ডট গুণন, লম্ব হওয়ার শর্ত ও অভিক্ষেপ (Dot Product & Projections)",
        "topic": "স্কেলার (ডট) গুণন ও অভিক্ষেপ-উপাংশ",
        "summary": "দুটি ভেক্টরের স্কেলার গুণনের সংজ্ঞা, মধ্যবর্তী কোণ নির্ণয়, লম্ব শর্ত এবং অভিক্ষেপ ও উপাংশের মধ্যে পার্থক্য।",
        "intro": {
          "what": "স্কেলার বা ডট গুণন হলো দুটি ভেক্টরের মানের এবং তাদের মধ্যবর্তী কোণের কোসাইনের গুণফল: $\\vec{A} \\cdot \\vec{B} = |A||B|\\cos\\theta$। এর ফলাফল একটি স্কেলার রাশি।",
          "whyImportant": "দুটি ভেক্টর পরস্পর লম্ব হওয়ার শর্ত ($\\vec{A}\\cdot\\vec{B}=0$) প্রয়োগ করে অজানা চলকের মান বের করার প্রশ্ন সবচেয়ে বেশি আসে।",
          "whereUsed": "পদার্থবিজ্ঞানে কাজ ($W = \\vec{F}\\cdot\\vec{s}$) নির্ণয়ে এবং যেকোনো ত্রিমাত্রিক জ্যামিতিতে রেখার মধ্যবর্তী কোণ পরিমাপে।",
          "prerequisites": "ভেক্টরের মান ($|A| = \\sqrt{A_x^2 + A_y^2 + A_z^2}$) এবং ত্রিকোণমিতিক কোণ।"
        },
        "easyExplanation": [
          "ডট গুণন বলে দেয় একটি ভেক্টরের দিকে অপর ভেক্টরের কতটা প্রভাব কাজ করছে। যদি ভেক্টর দুটি সমকোণে ($90^\\circ$) থাকে, তবে একটির দিকে অপরটির কোনো প্রভাব থাকে না, ফলে $\\cos 90^\\circ = 0$ হয়ে ডট গুণন শূন্য হয়।",
          "অভিক্ষেপ (Projection) হলো একটি দৈর্ঘ্য বা স্কেলার মান (ছায়ার দৈর্ঘ্য), কিন্তু উপাংশ (Component) হলো একটি ভেক্টর যার দিক প্রথম ভেক্টরের দিকে থাকে।"
        ],
        "formulas": [
          {
            "latex": "\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y + A_z B_z = |A||B|\\cos\\theta",
            "name": "ডট গুণনের কার্তেসীয় সূত্র",
            "meaning": "অনুরূপ অক্ষের সহগগুলোর গুণফলের সমষ্টিই হলো ডট গুণন।",
            "whenToUse": "ভেক্টরের ডট গুণন বা মধ্যবর্তী কোণ $\\theta$ বের করতে।",
            "conditions": "উভয় ভেক্টরকে একই ডাইমেনশনের হতে হবে।",
            "variables": "$A_x, A_y, A_z$ এবং $B_x, B_y, B_z$: অক্ষীয় সহগসমূহ।",
            "commonMistakes": "ফলাফলে একক ভেক্টর $\\hat{i}, \\hat{j}, \\hat{k}$ রেখে দেওয়া (ডট গুণনের ফল স্কেলার)।"
          },
          {
            "latex": "\\vec{A} \\perp \\vec{B} \\iff \\vec{A} \\cdot \\vec{B} = 0",
            "name": "ভেক্টর লম্ব হওয়ার শর্ত",
            "meaning": "দুটি অশূন্য ভেক্টরের ডট গুণন শূন্য হলে তারা পরস্পর লম্ব।",
            "whenToUse": "যখন লম্ব ভেক্টরের জন্য অজানা ধ্রুবক $m, k$ ইত্যাদি নির্ণয় করতে বলে।",
            "conditions": "$\\vec{A} \\neq 0, \\vec{B} \\neq 0$।",
            "variables": "$\\vec{A}, \\vec{B}$: প্রদত্ত ভেক্টরদ্বয়।",
            "commonMistakes": "ক্রস গুণন শূন্য ধরে ফেলা (ক্রস শূন্য হলে সমান্তরাল হয়)।"
          },
          {
            "latex": "\\text{Proj}_{\\vec{B}}(\\vec{A}) = \\frac{\\vec{A} \\cdot \\vec{B}}{|B|}",
            "name": "$\\vec{B}$ এর উপর $\\vec{A}$ এর অভিক্ষেপ",
            "meaning": "$\\vec{B}$ ভেক্টরের দিকে $\\vec{A}$ এর ছায়ার স্কেলার দৈর্ঘ্য।",
            "whenToUse": "অভিক্ষেপ নির্ণয় করতে বললে।",
            "conditions": "$|B| \\neq 0$।",
            "variables": "$|B|$: যার উপর অভিক্ষেপ তার মান দ্বারা ভাগ।",
            "commonMistakes": "যার উপর অভিক্ষেপ তার বদলে অপরটির মান দিয়ে ভাগ করা।"
          }
        ],
        "analysis": {
          "conditions": "যদি $\\theta < 90^\\circ$ হয় তবে ডট গুণন ধনাত্মক, $\\theta = 90^\\circ$ হলে শূন্য, এবং $\\theta > 90^\\circ$ হলে ঋণাত্মক।",
          "variations": "উপাংশ চাইলে অভিক্ষেপের সাথে যার উপর উপাংশ তার একক ভেক্টর গুণ করতে হয়: $\\left(\\frac{\\vec{A}\\cdot\\vec{B}}{|B|}\\right) \\frac{\\vec{B}}{|B|} = \\frac{\\vec{A}\\cdot\\vec{B}}{|B|^2}\\vec{B}$।",
          "relationships": "স্বয়ং নিজের সাথে ডট গুণন করলে মানের বর্গ পাওয়া যায়: $\\vec{A}\\cdot\\vec{A} = |A|^2$।",
          "transformations": "ডট গুণন বিনিময় বিধি মানে: $\\vec{A}\\cdot\\vec{B} = \\vec{B}\\cdot\\vec{A}$।",
          "misunderstandings": "শিক্ষার্থীরা প্রায়ই অভিক্ষেপ (স্কেলার) এবং উপাংশ (ভেক্টর) গুলিয়ে ফেলে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "লম্ব হওয়ার শর্তে অজানা ধ্রুবক নির্ণয়",
            "recognition": "দুটি ভেক্টর দেওয়া থাকবে যার একটিতে চলক $m$ থাকবে এবং বলা থাকবে ভেক্টর দুটি পরস্পর লম্ব।",
            "requiredConcept": "$\\vec{A}\\cdot\\vec{B} = 0 \\implies A_x B_x + A_y B_y + A_z B_z = 0$।",
            "strategy": "$\\hat{i}, \\hat{j}, \\hat{k}$ এর সহগগুলো গুণ করে যোগফল ০ ধরুন এবং $m$ এর মান বের করুন।",
            "keySteps": [
              "সহগগুলোর গুণফল নেওয়া",
              "সমীকরণ শূন্যের সমান করা",
              "সহজ সমাধান"
            ],
            "commonTraps": "মাইনাস চিহ্নের গুণনে ভুল করা।"
          }
        ],
        "easyExample": {
          "problem": "$\\vec{A} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ এবং $\\vec{B} = \\hat{i} - 2\\hat{j} + m\\hat{k}$ ভেক্টরদ্বয় পরস্পর লম্ব হলে $m$ এর মান কত?",
          "solutionSteps": [
            "লম্ব হওয়ার শর্ত: $\\vec{A} \\cdot \\vec{B} = 0$।",
            "সহগগুলোর ডট গুণন: $(2)(1) + (3)(-2) + (-1)(m) = 0$।",
            "$2 - 6 - m = 0 \\implies -4 - m = 0 \\implies m = -4$।"
          ],
          "answer": "$m = -4$"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "$\\vec{A} = 2\\hat{i} + \\hat{j} - \\hat{k}$ ভেক্টরের $\\vec{B} = \\hat{i} - 2\\hat{j} + 2\\hat{k}$ এর উপর লম্ব অভিক্ষেপ কত?",
          "recognitionApproach": "প্রশ্নটি $\\vec{B}$ এর উপর $\\vec{A}$ এর স্কেলার অভিক্ষেপ জানতে চেয়েছে। সূত্র: $\\frac{\\vec{A}\\cdot\\vec{B}}{|B|}$।",
          "stepByStepSolution": "১) $\\vec{A}\\cdot\\vec{B} = (2)(1) + (1)(-2) + (-1)(2) = 2 - 2 - 2 = -2$।\n২) $|B| = \\sqrt{1^2 + (-2)^2 + 2^2} = \\sqrt{1+4+4} = \\sqrt{9} = 3$।\n৩) অতএব, অভিক্ষেপ $= \\frac{-2}{3}$ (অথবা মান হিসেবে $2/3$)।",
          "whyItWorks": "অভিক্ষেপের সূত্র সরাসরি ভেক্টরের কসাইন কোণ ও মানের গুণফল প্রকাশ করে।",
          "calcAvoidanceTrick": "$|B| = \\sqrt{1+4+4} = 3$ সরাসরি স্ট্যান্ডার্ড ট্রিপলেট $1, 2, 2 \\to 3$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$\\vec{A}\\cdot\\vec{B} = A_x B_x + A_y B_y + A_z B_z$",
            "$\\vec{A}\\perp\\vec{B} \\iff \\vec{A}\\cdot\\vec{B}=0$",
            "$\\text{Proj}_{B}(A) = \\frac{\\vec{A}\\cdot\\vec{B}}{|B|}$"
          ],
          "importantConditions": [
            "লম্ব হলে ডট শূন্য, সমান্তরাল হলে ক্রস শূন্য।"
          ],
          "keyObservations": [
            "$\\vec{A}\\cdot\\vec{A} = |A|^2$।"
          ],
          "recognitionTips": [
            "লম্ব বললে সহগ গুণ করে যোগ = ০।"
          ],
          "commonMistakes": [
            "অভিক্ষেপে $|A|$ দিয়ে ভাগ করা (ভাগ হবে যার উপর তার মান দিয়ে)।"
          ],
          "summary": "ডট গুণন স্কেলার। লম্বের শর্ত ডট শূন্য। অভিক্ষেপ হলো ডট গুণফলকে হর-ভেক্টরের মান দিয়ে ভাগ।"
        }
      },
      {
        "id": "c-vector-02",
        "title": "ক্রস গুণন ও জ্যামিতিক ক্ষেত্রফল (Cross Product & Areas)",
        "topic": "ভেক্টর (ক্রস) গুণন ও জ্যামিতিক প্রয়োগ",
        "summary": "ভেক্টরের ভেক্টর গুণন, সমান্তরাল হওয়ার শর্ত এবং ত্রিভুজ ও সামান্তরিকের ক্ষেত্রফল নির্ণয়।",
        "intro": {
          "what": "দুটি ভেক্টরের ক্রস গুণন হলো একটি নতুন ভেক্টর যার মান $|\u000bec{A}\times\u000bec{B}| = |A||B|sin\theta$ এবং দিক উভয় ভেক্টরের সমতলের সাথে ডানহাতি স্ক্রু নিয়ম অনুসারে লম্ব।",
          "whyImportant": "ভর্তি পরীক্ষায় দুটি ভেক্টর সমান্তরাল হওয়ার শর্ত এবং কর্ণ বা বাহু দেওয়া থাকলে সামান্তরিকের ক্ষেত্রফল নির্ণয় সবচেয়ে জনপ্রিয়।",
          "whereUsed": "টর্ক ($\u000bec{\tau} = \u000bec{r}\times\u000bec{F}$), কৌণিক ভরবেগ ($\u000bec{L} = \u000bec{r}\times\u000bec{p}$), এবং কম্পিউটেশনাল জ্যামিতিতে নরমাল ভেক্টর তৈরিতে।",
          "prerequisites": "৩x৩ নির্ণায়কের বিস্তার ও ত্রিকোণমিতিক সাইন অনুপাত।"
        },
        "easyExplanation": [
          "ক্রস গুণনের ফলাফল সর্বদা একটি ভেক্টর রাশি। এটি মূলত দুটি ভেক্টর দ্বারা আবদ্ধ সামান্তরিকের ক্ষেত্রফল ও তলের লম্ব দিক নির্দেশ করে।",
          "যদি দুটি ভেক্টর সমান্তরাল বা একই রেখায় হয়, তবে তাদের মধ্যবর্তী কোণ $\theta = 0^circ$ বা $180^circ$, ফলে $sin\theta = 0$ হয়ে ক্রস গুণন শূন্য হয় ($\u000bec{A}\times\u000bec{B} = \u000bec{0}$)।"
        ],
        "formulas": [
          {
            "latex": "\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \\end{vmatrix}",
            "name": "ক্রস গুণনের নির্ণায়ক রূপ",
            "meaning": "নির্ণায়কের প্রথম সারিতে একক ভেক্টর বসিয়ে ক্রস গুণন নির্ণয়।",
            "whenToUse": "দুটি ভেক্টরের ক্রস গুণন বা তলের লম্ব একক ভেক্টর বের করতে।",
            "conditions": "ত্রিমাত্রিক ভেক্টর হতে হবে।",
            "variables": "$A_x, A_y, A_z$ এবং $B_x, B_y, B_z$: ভেক্টরদ্বয়ের উপাংশ।",
            "commonMistakes": "$\\hat{j}$ এর ক্ষেত্রে চিহ্নের ভুল করা ($- \\hat{j}$)।"
          },
          {
            "latex": "\\vec{A} \\parallel \\vec{B} \\iff \\frac{A_x}{B_x} = \\frac{A_y}{B_y} = \\frac{A_z}{B_z}",
            "name": "সমান্তরাল ভেক্টরের শর্টকাট শর্ত",
            "meaning": "দুটি ভেক্টর সমান্তরাল হলে তাদের অনুরূপ সহগগুলোর অনুপাত সমান হবে।",
            "whenToUse": "ভর্তি পরীক্ষায় দ্রুত সমান্তরাল ভেক্টরের অজানা চলক নির্ণয়ে।",
            "conditions": "কোনো সহগ শূন্য হলে অপরটির সংশ্লিষ্ট সহগও শূন্য হতে হবে।",
            "variables": "অনুরূপ অক্ষীয় সহগসমূহ।",
            "commonMistakes": "অনুপাত না মিলিয়ে ক্রস গুণনের বড় নির্ণায়ক করতে গিয়ে সময় নষ্ট করা।"
          },
          {
            "latex": "\\text{Area}_{\\text{Parallelogram}} = |\\vec{A} \\times \\vec{B}| \\quad (\\text{সন্নিহিত বাহুদ্বয় হলে})",
            "name": "সামান্তরিকের ক্ষেত্রফল সূত্র (বাহু)",
            "meaning": "সন্নিহিত বাহুদ্বয়ের ক্রস গুণনের মানই সামান্তরিকের ক্ষেত্রফল।",
            "whenToUse": "যখন সন্নিহিত বাহু ভেক্টর দেওয়া থাকে।",
            "conditions": "ভেক্টর দুটি একই বিন্দু হতে নির্গত সন্নিহিত বাহু হতে হবে।",
            "variables": "$\\vec{A}, \\vec{B}$: সন্নিহিত বাহু।",
            "commonMistakes": "কর্ণ দেওয়া থাকলে এই সূত্র ব্যবহার করা।"
          },
          {
            "latex": "\\text{Area}_{\\text{Parallelogram}} = \\frac{1}{2}|\\vec{d}_1 \\times \\vec{d}_2| \\quad (\\text{কর্ণদ্বয় হলে})",
            "name": "সামান্তরিকের ক্ষেত্রফল সূত্র (কর্ণ)",
            "meaning": "কর্ণদ্বয়ের ক্রস গুণনের মানের অর্ধেক হলো ক্ষেত্রফল।",
            "whenToUse": "প্রশ্নে কর্ণ ভেক্টরদ্বয় দেওয়া থাকলে।",
            "conditions": "$\\vec{d}_1, \\vec{d}_2$ কর্ণ ভেক্টর হতে হবে।",
            "variables": "$\\vec{d}_1, \\vec{d}_2$: সামান্তরিকের দুটি কর্ণ।",
            "commonMistakes": "হাফ ($1/2$) দিতে ভুলে যাওয়া।"
          }
        ],
        "analysis": {
          "conditions": "ক্রস গুণন বিনিময় বিধি মানে না: $\\vec{A} \\times \\vec{B} = -(\\vec{B} \\times \\vec{A})$ (অ্যান্টি-কমিউটেটিভ)।",
          "variations": "ত্রিভুজের ক্ষেত্রফল সন্নিহিত বাহুদ্বয়ের ক্রস গুণনের মানের অর্ধেক: $\\frac{1}{2}|\\vec{A}\\times\\vec{B}|$।",
          "relationships": "ল্যাগ্রাঞ্জের অভেদ: $|\\vec{A}\\times\\vec{B}|^2 + (\\vec{A}\\cdot\\vec{B})^2 = |A|^2|B|^2$।",
          "transformations": "তলের উপর লম্ব একক ভেক্টর: $\\hat{\\eta} = \\pm \\frac{\\vec{A} \\times \\vec{B}}{|\\vec{A} \\times \\vec{B}|}$।",
          "misunderstandings": "সন্নিহিত বাহু এবং কর্ণের সূত্রের মধ্যে প্রায়ই হাফ ($1/2$) নিয়ে বিভ্রান্তি তৈরি হয়।"
        },
        "questionPatterns": [
          {
            "typeTitle": "সমান্তরাল ভেক্টরের অজানা চলক নির্ণয় (Shortcut Ratio Method)",
            "recognition": "দুটি ভেক্টর সমান্তরাল বলা থাকবে এবং একটিতে $m$ বা $k$ থাকবে।",
            "requiredConcept": "সহগের অনুপাতের সমতা: $\\frac{A_x}{B_x} = \\frac{A_y}{B_y} = \\frac{A_z}{B_z}$।",
            "strategy": "নির্ণায়ক না করে সরাসরি সহগের অনুপাত সমান বসিয়ে বজ্রগুণন করুন।",
            "keySteps": [
              "সহগের অনুপাত সাজানো",
              "অজানা যুক্ত অংশের সাথে জানা অংশ মেলানো",
              "বজ্রগুণন করে মান নির্ণয়"
            ],
            "commonTraps": "চিহ্ন উপেক্ষা করা।"
          }
        ],
        "easyExample": {
          "problem": "$\\vec{A} = 2\\hat{i} - 4\\hat{j} + 5\\hat{k}$ এবং $\\vec{B} = m\\hat{i} + 8\\hat{j} - 10\\hat{k}$ ভেক্টরদ্বয় সমান্তরাল হলে $m$ এর মান কত?",
          "solutionSteps": [
            "সমান্তরাল হওয়ার শর্টকাট শর্ত: $\\frac{A_x}{B_x} = \\frac{A_y}{B_y} = \\frac{A_z}{B_z}$।",
            "মান বসিয়ে পাই: $\\frac{2}{m} = \\frac{-4}{8} = \\frac{5}{-10}$।",
            "যেহেতু $\\frac{-4}{8} = -\\frac{1}{2}$, তাই $\\frac{2}{m} = -\\frac{1}{2} \\implies m = -4$।"
          ],
          "answer": "$m = -4$"
        },
        "examExample": {
          "examTag": "DU / RU Admission",
          "problem": "একটি সামান্তরিকের দুটি কর্ণ $\\vec{d}_1 = 3\\hat{i} + \\hat{j} - 2\\hat{k}$ এবং $\\vec{d}_2 = \\hat{i} - 3\\hat{j} + 4\\hat{k}$ হলে এর ক্ষেত্রফল কত বর্গ একক?",
          "recognitionApproach": "কর্ণ দেওয়া থাকলে ক্ষেত্রফল $= \\frac{1}{2}|\\vec{d}_1 \\times \\vec{d}_2|$।",
          "stepByStepSolution": "১) $\\vec{d}_1 \\times \\vec{d}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & 1 & -2 \\\\ 1 & -3 & 4 \\end{vmatrix}$\n$= \\hat{i}(4 - 6) - \\hat{j}(12 - (-2)) + \\hat{k}(-9 - 1) = -2\\hat{i} - 14\\hat{j} - 10\\hat{k}$।\n২) মান: $|\\vec{d}_1 \\times \\vec{d}_2| = \\sqrt{(-2)^2 + (-14)^2 + (-10)^2} = \\sqrt{4 + 196 + 100} = \\sqrt{300} = 10\\sqrt{3}$।\n৩) ক্ষেত্রফল $= \\frac{1}{2}(10\\sqrt{3}) = 5\\sqrt{3}$ বর্গ একক।",
          "whyItWorks": "কর্ণ দ্বারা গঠিত ক্ষেত্রফলের সূত্র জ্যামিতিকভাবে ভেক্টর গুণনের অর্ধেকের সমান।",
          "calcAvoidanceTrick": "কর্ণ দেওয়া থাকলে অবশ্যই শেষে ২ দিয়ে ভাগ করতে হবে।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$\\vec{A}\\parallel\\vec{B} \\iff \\frac{A_x}{B_x}=\\frac{A_y}{B_y}=\\frac{A_z}{B_z}$",
            "$\\text{Area}_{\\text{side}} = |\\vec{A}\\times\\vec{B}|$",
            "$\\text{Area}_{\\text{diag}} = \\frac{1}{2}|\\vec{d}_1\\times\\vec{d}_2|$"
          ],
          "importantConditions": [
            "বাহু থাকলে সরাসরি মান, কর্ণ থাকলে হাফ ইনটু মান।"
          ],
          "keyObservations": [
            "$\\vec{A}\\times\\vec{B} = -\\vec{B}\\times\\vec{A}$।"
          ],
          "recognitionTips": [
            "সমান্তরাল দেখলে সহগ অনুপাত করো।"
          ],
          "commonMistakes": [
            "কর্ণের সূত্রে হাফ না দেওয়া।"
          ],
          "summary": "ক্রস গুণন তলের লম্ব ভেক্টর দেয়। সমান্তরালের শর্ত সহগ অনুপাত সমান। বাহুতে সরাসরি মান, কর্ণে হাফ মান।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "ভেক্টরের ডট গুণন ও লম্ব হওয়ার শর্ত",
        "description": "দুটি ভেক্টর লম্ব হওয়ার শর্ত ব্যবহার করে অজানা রাশির মান নির্ণয় ও মধ্যবর্তী কোণ সংক্রান্ত সমস্যা।",
        "solvingStrategy": "১) ডট গুণন শূন্য ধরুন ($\\vec{A}\\cdot\\vec{B}=0$)। ২) $A_x B_x + A_y B_y + A_z B_z = 0$ সমীকরণ সমাধান করুন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0180",
            "question": "$ABC$ ত্রিভুজের $BC, CA$ এবং $AB$ বাহুর মধ্যবিন্দুগুলো যথাক্রমে $D, E$ এবং $F$ হলে- [DU'14-15, 13-14]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\overline{AD} = \\overline{AB} + \\overline{BC}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\overline{DA} = \\overline{DF} + \\overline{DE}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\overline{AD} = \\overline{AB} + \\overline{AC}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\overline{AD} = \\overline{BE} + \\overline{CF}$"
              }
            ],
            "answer": "b",
            "explanation": "**Sol\":**\r\nএকটি ত্রিভুজের চিত্র দেওয়া আছে যেখানে $ABC$ ত্রিভুজের বাহুগুলির মধ্যবিন্দু $D, E, F$ এবং ভেক্টর নির্দেশ করা হয়েছে।\r\nএখানে, $DE \\parallel FA$ ও $DE = \\frac{1}{2} \\overline{BA} = \\overline{FA}$\r\n$DF \\parallel EA$ ও $DF = \\frac{1}{2} \\overline{CA} = \\overline{EA}$\r\n\r\nঅর্থাৎ $DEAF$ সামান্তরিক ও $DA$ কর্ণ\r\n$\\therefore$ সামান্তরিক সূত্র অনুযায়ী, $\\overline{DA} = \\overline{DE} + \\overline{DF}$",
            "university": "Admission",
            "year": "",
            "topic": "T-01: বিভিন্ন ভেক্টরের বিধি সংক্রান্ত"
          },
          {
            "id": "math-q-0181",
            "question": "$\\Delta ABC$ এর ভরকেন্দ্র $G$ এবং $A, B, C$ বিন্দুগুলোর অবস্থান ভেক্টরের যথাক্রমে $\\vec{a}, \\vec{b}, \\vec{c}$ হলে, $G$ বিন্দুর অবস্থান ভেক্টর কত? [CU'14-15]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{\\vec{a} + \\vec{b} + \\vec{c}}{3}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{\\vec{a} + \\vec{b} - \\vec{c}}{3}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{\\vec{a} - \\vec{b} + \\vec{c}}{3}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "কোনটিই নয়"
              }
            ],
            "answer": "a",
            "explanation": "",
            "university": "CU",
            "year": "14-15",
            "topic": "T-01: বিভিন্ন ভেক্টরের বিধি সংক্রান্ত"
          },
          {
            "id": "math-q-0182",
            "question": "যে ভেক্টরের মডুলাস ও দিক স্থির অথচ অবস্থান স্থির নয় তাকে বলা হয় - [KU'11-12]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "সমান ভেক্টর"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "বিপরীত ভেক্টর"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "শূন্য ভেক্টর"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "মুক্ত ভেক্টর\r\n\r\n---"
              }
            ],
            "answer": "a",
            "explanation": "",
            "university": "KU",
            "year": "11-12",
            "topic": "T-01: বিভিন্ন ভেক্টরের বিধি সংক্রান্ত"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0183",
            "question": "$\\vec{A} = 3\\hat{i} - \\hat{j} - 4\\hat{k}$ এবং $\\vec{B} = -2\\hat{i} + 4\\hat{j} - 3\\hat{k}$ হলে, $|\\vec{A} + \\vec{B}|$ এর মান কত? [JU'18-19]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\sqrt{29}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\sqrt{39}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\sqrt{49}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\sqrt{59}$"
              }
            ],
            "answer": "d",
            "explanation": "**Sol\":** $\\vec{A} + \\vec{B} = \\hat{i} + 3\\hat{j} - 7\\hat{k}$;\r\n$|\\vec{A} + \\vec{B}| = \\sqrt{1^2 + 3^2 + (-7)^2} = \\sqrt{59}$",
            "university": "JU",
            "year": "18-19",
            "topic": "T-02: ভেক্টরের মান নির্ণয় এবং যোগ-বিয়োগ সংক্রান্ত",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "ভেক্টরের ক্রস গুণন ও ক্ষেত্রফল নির্ণয়",
        "description": "সমান্তরাল ভেক্টরের অনুপাত নির্ণয় এবং সামান্তরিক ও ত্রিভুজের ক্ষেত্রফল সংক্রান্ত সমস্যা।",
        "solvingStrategy": "১) সমান্তরাল হলে সহগের অনুপাত সমান বসান। ২) ক্ষেত্রফলে বাহু নাকি কর্ণ দেওয়া আছে তা লক্ষ্য করে সূত্র প্রয়োগ করুন।",
        "startIndex": 5,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0185",
            "question": "দুটি দিক রাশির প্রত্যেকটির মান যদি এদের লব্ধি রাশির মানের সমান হয় তবে রাশি দুটির মধ্যবর্তী কোণের মান কত? [RU'14-15]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$45^{\\circ}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$60^{\\circ}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$90^{\\circ}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$120^{\\circ}$"
              }
            ],
            "answer": "d",
            "explanation": "**Sol\":** সমান বলদ্বয়ের মান $P$ হলে লব্ধির মানও $P$ হবে\r\n$\\therefore P^2 = P^2 + P^2 + 2. P. P. \\cos\\alpha \\Rightarrow \\cos\\alpha = -\\frac{1}{2}$\r\n$\\therefore \\alpha = 120^{\\circ}$",
            "university": "RU",
            "year": "14-15",
            "topic": "T-02: ভেক্টরের মান নির্ণয় এবং যোগ-বিয়োগ সংক্রান্ত"
          },
          {
            "id": "math-q-0186",
            "question": "যদি $|\\vec{a}| = 3, |\\vec{b}| = 5$ এবং $|\\vec{a} - \\vec{b}| = 7$ হয় তবে $\\vec{a}$ ও $\\vec{b}$ ভেক্টর দুটির মধ্যবর্তী কোণ কত হবে? [CU'11-12]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$180^{\\circ}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$120^{\\circ}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$30^{\\circ}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$220^{\\circ}$\r\n(e) $135^{\\circ}$"
              }
            ],
            "answer": "a",
            "explanation": "**Sol\":**\r\nএকটি ভেক্টর চিত্র দেওয়া আছে যাতে $\\vec{a}, \\vec{b}, \\vec{a}-\\vec{b}$ এবং কোণ $\\alpha, \\pi-\\alpha$ দেখানো হয়েছে।\r\n$|\\vec{a}| = 3, |\\vec{b}| = 5; |\\vec{a} - \\vec{b}| = 7$\r\n$7^2 = 5^2 + 3^2 + 2.5.3 \\cos(\\pi - \\alpha) \\therefore \\alpha = 120^{\\circ}$",
            "university": "CU",
            "year": "11-12",
            "topic": "T-02: ভেক্টরের মান নির্ণয় এবং যোগ-বিয়োগ সংক্রান্ত"
          },
          {
            "id": "math-q-0187",
            "question": "$2\\hat{i} + 2\\hat{j}$ ভেক্টরটি $x$- অক্ষের সাথে কত ডিগ্রি কোণ তৈরি করে? [JU'20-21]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$30^{\\circ}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$45^{\\circ}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$90^{\\circ}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$180^{\\circ}$"
              }
            ],
            "answer": "b",
            "explanation": "Soln: $\\vec{A} = 2\\hat{i} + 2\\hat{j}, \\; A_x = 2$\r\n$\\cos \\theta = \\frac{A_x}{|\\vec{A}|} = \\frac{2}{\\sqrt{2^2+2^2}} = \\frac{2}{2\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$\r\n$\\therefore \\theta = \\cos^{-1}\\frac{1}{\\sqrt{2}} = 45^{\\circ}$",
            "university": "JU",
            "year": "20-21",
            "topic": "T-03: ভেক্টরের ডট এবং ক্রস গুণন এবং দুইটি ভেক্টরের মধ্যবর্তী কোণ"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0188",
            "question": "দুইটি ভেক্টর $\\vec{u}$ এবং $\\vec{v}$ এর মধ্যবর্তী কোণ কত হলে $\\vec{u} \\cdot \\vec{v} = 9$ এবং $|\\vec{u} \\times \\vec{v}| = 3\\sqrt{3}$ হবে? [GST'20-21]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{\\pi}{3}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{\\pi}{4}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{\\pi}{6}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{2\\pi}{3}$"
              }
            ],
            "answer": "c",
            "explanation": "Soln: $|\\vec{u} \\times \\vec{v}| = uv \\sin \\theta = 3\\sqrt{3} \\cdots (i)$\r\n$\\vec{u} \\cdot \\vec{v} = uv \\cos \\theta = 9 \\cdots \\cdots (ii)$\r\n$\\therefore (i) \\div (ii)$\r\n$\\Rightarrow \\tan \\theta = \\frac{1}{\\sqrt{3}} \\Rightarrow \\theta = \\frac{\\pi}{6}$\r\n\r\nউদ্ভাস একাডেমিক এন্ড এডমিশন কেয়ার | পরিবর্তনের প্রত্যয়ে নিরন্তর পথচলা...",
            "university": "GST",
            "year": "20-21",
            "topic": "T-03: ভেক্টরের ডট এবং ক্রস গুণন এবং দুইটি ভেক্টরের মধ্যবর্তী কোণ",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "ডট গুণন ও ক্রস গুণনের ভৌত অর্থ কী?",
        "description": "কেন ডট গুণনে স্কেলার কিন্তু ক্রস গুণনে ভেক্টর পাওয়া যায়?",
        "promptQuery": "ডট গুণন এবং ক্রস গুণনের জ্যামিতিক ও ভৌত তাৎপর্য সহজ বাংলায় ব্যাখ্যা করো।"
      },
      {
        "title": "তিনটি ভেক্টর সমতলীয় (Coplanar) হওয়ার শর্ত",
        "description": "বক্স প্রোডাক্ট বা স্কেলার ট্রিপল প্রোডাক্ট কেন শূন্য হতে হয়?",
        "promptQuery": "তিনটি ভেক্টর সমতলীয় হওয়ার শর্ত এবং স্কেলার ট্রিপল প্রোডাক্ট $\\vec{A}\\cdot(\\vec{B}\\times\\vec{C})=0$ এর প্রমাণ বুঝিয়ে দাও।"
      },
      {
        "title": "ল্যাগ্রাঞ্জের অভেদের প্রয়োগ ও প্রমাণ",
        "description": "$|A\\times B|^2 + (A\\cdot B|^2 = |A|^2|B|^2$ সূত্রটি কীভাবে জটিল অঙ্ককে ৩ লাইনে নামায়?",
        "promptQuery": "ল্যাগ্রাঞ্জের ভেক্টর অভেদটি প্রমাণ করো এবং ভর্তি পরীক্ষায় এর প্রয়োগ দেখাও।"
      },
      {
        "title": "ভেক্টর দিয়ে ত্রিভুজের ভরকেন্দ্র ও অন্তকেন্দ্র",
        "description": "শীর্ষবিন্দুর অবস্থান ভেক্টর থেকে ভরকেন্দ্রের অবস্থান ভেক্টর নির্ণয়।",
        "promptQuery": "ভেক্টর পদ্ধতিতে ত্রিভুজের ভরকেন্দ্রের অবস্থান ভেক্টর $\\vec{g} = \\frac{\\vec{a}+\\vec{b}+\\vec{c}}{3}$ প্রমাণ করো।"
      },
      {
        "title": "ভেক্টর অধ্যায়ের শীর্ষ ভর্তি পরীক্ষা ফাঁদ",
        "description": "অভিক্ষেপ বনাম উপাংশ এবং বাহু বনাম কর্ণের ক্ষেত্রফলের সাধারণ ভুলসমূহ।",
        "promptQuery": "ভেক্টর অধ্যায়ের ভর্তি পরীক্ষায় ছাত্রছাত্রীদের সবচেয়ে বেশি হওয়া ৩টি সাধারণ ভুল ও ট্রিকি প্রশ্ন আলোচনা করো।"
      }
    ],
    "questionCount": 80
  },
  {
    "id": "ch-straight-line",
    "paper": "First-Paper",
    "paperBn": "১ম পত্র",
    "chapterNum": 3,
    "nameBn": "সরলরেখা",
    "nameEn": "Straight Lines",
    "rawName": "সরলরেখা",
    "summary": "এইচএসসি ১ম পত্রের সবচেয়ে বৃহৎ ও সর্বাধিক প্রশ্নসমৃদ্ধ অধ্যায়। ঢাল, বিভিন্ন আকারের সমীকরণ, লম্ব ও সমান্তরাল রেখা, লম্ব দূরত্ব এবং কোণের সমদ্বিখণ্ডক থেকে বোর্ড ও ভর্তি পরীক্ষায় নিশ্চিতভাবে প্রতি বছর একাধিক প্রশ্ন আসে।",
    "topics": [
      "স্থানাঙ্ক ব্যবস্থা ও সঞ্চারপথ",
      "বিভক্তিকরণ সূত্র ও ত্রিভুজের ক্ষেত্রফল",
      "সরলরেখার ঢাল ও সমীকরণের বিভিন্ন আকার",
      "সমান্তরাল ও লম্ব রেখার সমীকরণ",
      "দূরত্ব, ছেদবিন্দু ও কোণের সমদ্বিখণ্ডক"
    ],
    "concepts": [
      {
        "id": "c-line-01",
        "title": "স্থানাঙ্ক রূপান্তর ও দূরত্বের শর্ত (Coordinate Conversion & Distance)",
        "topic": "স্থানাঙ্ক ব্যবস্থা ও সঞ্চারপথ",
        "summary": "কার্তেসীয় $(x, y)$ এবং পোলার $(r, \theta)$ রূপান্তরের নিয়ম ও চতুর্ভাগীয় কোণ নির্ধারণ।",
        "intro": {
          "what": "কার্তেসীয় স্থানাঙ্কে বিন্দুর অবস্থান দুটি লম্ব অক্ষ বরাবর দূরত্বের মাধ্যমে প্রকাশ পায়। পোলার স্থানাঙ্কে মূলবিন্দু থেকে সরাসরি দূরত্ব $r$ এবং ধনাত্মক $x$-অক্ষের সাথে উৎপন্ন কোণ $\theta$ দ্বারা প্রকাশ পায়।",
          "whyImportant": "পোলার স্থানাঙ্কের কোণ $\theta$ নির্ধারণে চতুর্ভাগীয় ভুলের কারণে প্রতিবছর বহু শিক্ষার্থী নেগেটিভ মার্ক পায়।",
          "whereUsed": "রাডার ট্র্যাকিং, রোবোটিক আর্মের কোণ নিয়ন্ত্রণ ও নৌ-চলাচল নেভিগেশন।",
          "prerequisites": "পিথাগোরাসের উপপাদ্য এবং মৌলিক ত্রিকোণমিতি।"
        },
        "easyExplanation": [
          "মূলবিন্দু থেকে কোনো বিন্দুর সোজাসুজি দূরত্বই হলো $r = \\sqrt{x^2 + y^2}$। আর কোণ $\\theta$ নির্ভর করে বিন্দুটি কোন চতুর্ভাগে আছে তার উপর।",
          "১ম চতুর্ভাগে $\\theta = \\tan^{-1}|y/x|$, ২য় চতুর্ভাগে $\\theta = \\pi - \\tan^{-1}|y/x|$, ৩য় চতুর্ভাগে $\\theta = -\\pi + \\tan^{-1}|y/x|$ (অথবা $\\pi + \\tan^{-1}|y/x|$), এবং ৪র্থ চতুর্ভাগে $\\theta = -\\tan^{-1}|y/x|$।"
        ],
        "formulas": [
          {
            "latex": "x = r\\cos\\theta, \\quad y = r\\sin\\theta",
            "name": "পোলার থেকে কার্তেসীয় রূপান্তর",
            "meaning": "$r$ ও $\\theta$ জানা থাকলে সোজা $x$ ও $y$ নির্ণয়ের সূত্র।",
            "whenToUse": "পোলার সমীকরণ বা বিন্দু থেকে কার্তেসীয়তে যেতে।",
            "conditions": "$r \\ge 0$।",
            "variables": "$r$: ব্যাসার্ধ ভেক্টর, $\\theta$: ভেক্টরিয়াল কোণ।",
            "commonMistakes": "ডিগ্রি ও রেডিয়ানের গোলমাল করা।"
          },
          {
            "latex": "r = \\sqrt{x^2 + y^2}, \\quad \\theta = \\text{Arg}(x + iy)",
            "name": "কার্তেসীয় থেকে পোলার রূপান্তর",
            "meaning": "দূরত্ব ও চতুর্ভাগভিত্তিক কোণ নির্ণয়।",
            "whenToUse": "কার্তেসীয় বিন্দু $(x, y)$ কে পোলারে প্রকাশ করতে।",
            "conditions": "মূলবিন্দু ব্যতীত সব বিন্দুর জন্য অনন্য।",
            "variables": "$x, y$: বিন্দুর কার্তেসীয় স্থানাঙ্ক।",
            "commonMistakes": "চতুর্ভাগ খেয়াল না করে অন্ধভাবে $\\tan^{-1}(y/x)$ লিখে ফেলা।"
          }
        ],
        "analysis": {
          "conditions": "পোলার কোণ $\\theta$ কে সাধারণত $(-\\pi, \\pi]$ বা $[0, 2\\pi)$ ব্যবধিতে রাখা হয়।",
          "variations": "কার্তেসীয় সমীকরণ $x^2 + y^2 = a^2$ পোলারে হয়ে যায় সহজ $r = a$ (বৃত্ত)।",
          "relationships": "জটিল সংখ্যার মডুলাস ও আর্গুমেন্ট নির্ণয়ের সাথে পোলার রূপান্তরের শতভাগ মিল রয়েছে।",
          "transformations": "রেখার সমীকরণ $y = mx$ পোলারে হয়ে যায় $\\theta = \\alpha$ (ধ্রুবক কোণ)।",
          "misunderstandings": "৩য় চতুর্ভাগের বিন্দু যেমন $(-1, -1)$ এর জন্য কোণ $-135^\\circ$ বা $225^\\circ$, কিন্তু ভুল করে $45^\\circ$ দাগানো হয়।"
        },
        "questionPatterns": [
          {
            "typeTitle": "চতুর্ভাগভিত্তিক পোলার স্থানাঙ্ক নির্ণয়",
            "recognition": "একটি বিন্দু দেওয়া থাকবে যার এক বা উভয় স্থানাঙ্ক ঋণাত্মক (যেমন $(-\\sqrt{3}, 1)$ বা $(-1, -\\sqrt{3})$)।",
            "requiredConcept": "চতুর্ভাগ নির্ণয় ও কোণ সমন্বয়।",
            "strategy": "১) চিহ্ন দেখে চতুর্ভাগ চিহ্নিত করুন। ২) $r = \\sqrt{x^2+y^2}$ বের করুন। ৩) নির্দিষ্ট চতুর্ভাগের সূত্রে কোণ বের করুন।",
            "keySteps": [
              "চতুর্ভাগ নির্ধারণ",
              "$r$ বের করা",
              "কোণ সমন্বয়"
            ],
            "commonTraps": "চিহ্ন উপেক্ষা করে ১ম চতুর্ভাগের কোণ দাগানো।"
          }
        ],
        "easyExample": {
          "problem": "$(-\\sqrt{2}, -\\sqrt{2})$ বিন্দুর পোলার স্থানাঙ্ক কত?",
          "solutionSteps": [
            "$r = \\sqrt{(-\\sqrt{2})^2 + (-\\sqrt{2})^2} = \\sqrt{2 + 2} = \\sqrt{4} = 2$।",
            "বিন্দুটির $x < 0, y < 0$, অর্থাৎ এটি ৩য় চতুর্ভাগে অবস্থিত।",
            "৩য় চতুর্ভাগে কোণ $\\theta = -\\pi + \\tan^{-1}\\left|\\frac{-\\sqrt{2}}{-\\sqrt{2}}\\right| = -\\pi + \\frac{\\pi}{4} = -\\frac{3\\pi}{4}$ (বা $225^\\circ$)।"
          ],
          "answer": "$(2, -135^\\circ)$ বা $(2, 225^\\circ)$"
        },
        "examExample": {
          "examTag": "JU / KU / GST Admission",
          "problem": "$(1, -\\sqrt{3})$ বিন্দুর পোলার স্থানাঙ্ক কোনটি?",
          "recognitionApproach": "$x > 0$ এবং $y < 0$, সুতরাং বিন্দুটি ৪র্থ চতুর্ভাগে অবস্থিত।",
          "stepByStepSolution": "১) $r = \\sqrt{1^2 + (-\\sqrt{3})^2} = \\sqrt{1+3} = 2$।\n২) ৪র্থ চতুর্ভাগে কোণ $\\theta = -\\tan^{-1}\\left|\\frac{-\\sqrt{3}}{1}\\right| = -60^\\circ$ (বা $360^\\circ - 60^\\circ = 300^\\circ$)।\n৩) অতএব পোলার স্থানাঙ্ক $(2, -60^\\circ)$ বা $(2, 300^\\circ)$।",
          "whyItWorks": "চতুর্থ চতুর্ভাগে ভেক্টরিয়াল কোণ ঋণাত্মক অথবা $270^\\circ$ থেকে $360^\\circ$ এর মধ্যে থাকে।",
          "calcAvoidanceTrick": "$1$ ও $\\sqrt{3}$ দেখলেই অনুপাত $\\tan 60^\\circ$। ৪র্থ চতুর্ভাগ মানে $-60^\\circ$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$r = \\sqrt{x^2+y^2}$",
            "১ম: $\\theta=\\alpha$, ২য়: $\\pi-\\alpha$, ৩য়: $-\\pi+\\alpha$, ৪র্থ: $-\\alpha$"
          ],
          "importantConditions": [
            "$\\alpha = \\tan^{-1}|y/x|$ সর্বদা ধনাত্মক সূক্ষ্মকোণ।"
          ],
          "keyObservations": [
            "$x^2+y^2 = r^2$ এবং $y/x = \\tan\\theta$।"
          ],
          "recognitionTips": [
            "চিহ্ন দেখে আগে চতুর্ভাগ ঠিক করো, তারপর কোণ।"
          ],
          "commonMistakes": [
            "মাইনাস চিহ্ন না দেখে সরাসরি ক্যালকুলেটরে ইনভার্স ট্যান করা।"
          ],
          "summary": "পোলারে $r$ হলো দূরত্ব, $\\theta$ হলো দিক। চতুর্ভাগ অনুযায়ী কোণের সূত্র বেছে নিতে হয়।"
        }
      },
      {
        "id": "c-line-02",
        "title": "সমান্তরাল ও লম্ব রেখার সমীকরণ এবং লম্ব দূরত্ব (Parallel, Perpendicular & Distance)",
        "topic": "সমান্তরাল ও লম্ব রেখার সমীকরণ",
        "summary": "সমান্তরাল ও লম্ব রেখার দ্রুত সমীকরণ গঠন, বিন্দু হতে রেখার লম্ব দূরত্ব এবং দুই সমান্তরাল রেখার মধ্যবর্তী দূরত্ব।",
        "intro": {
          "what": "দুটি রেখা সমান্তরাল হলে তাদের ঢাল সমান ($m_1 = m_2$) এবং লম্ব হলে তাদের ঢালের গুণফল $-1$ ($m_1 m_2 = -1$)। লম্ব দূরত্ব হলো কোনো বিন্দু থেকে রেখার ক্ষুদ্রতম জ্যামিতিক দূরত্ব।",
          "whyImportant": "ভর্তি পরীক্ষার জ্যামিতি অংশের প্রায় অর্ধেক প্রশ্নই লম্ব রেখা, সমান্তরাল রেখা এবং দূরত্বের সূত্র ব্যবহার করে সমাধান হয়।",
          "whereUsed": "অপটিক্যাল রে ট্র্যাকিং, কম্পিউটার গ্রাফিক্সের ক্লিপিং এবং আর্কিটেকচারাল ডিজাইন।",
          "prerequisites": "সরলরেখার সাধারণ আকার ($ax + by + c = 0$) ও ঢালের ধারণা ($m = -a/b$)।"
        },
        "easyExplanation": [
          "$ax + by + c = 0$ রেখার সমান্তরাল রেখা লিখতে হলে $x$ ও $y$ এর অংশ হুবহু রেখে শুধু ধ্রুবক বদলাতে হয়: $ax + by + k = 0$।",
          "লম্ব রেখা লিখতে হলে সহগ অদলবদল করে মাঝের চিহ্ন পাল্টাতে হয়: $bx - ay + k = 0$। এরপর প্রদত্ত বিন্দুর মান বসিয়ে $k$ এর মান এক লাইনে পাওয়া যায়।",
          "বিন্দু থেকে লম্ব দূরত্বের নিয়ম: সমীকরণের বামপাশে বিন্দুটি বসিয়ে পরমমান নাও এবং নিচে $\\sqrt{a^2+b^2}$ দিয়ে ভাগ করো।"
        ],
        "formulas": [
          {
            "latex": "ax + by + k = 0 \\quad (\\text{সমান্তরাল রেখা})",
            "name": "সমান্তরাল রেখার সমীকরণ",
            "meaning": "$ax + by + c = 0$ এর সমান্তরাল যেকোনো রেখা।",
            "whenToUse": "সমান্তরাল রেখার সমীকরণ নির্ণয়ে।",
            "conditions": "মূল রেখার সমান্তরাল হতে হবে।",
            "variables": "$k$: নতুন ধ্রুবক যা বিন্দুর মান বসিয়ে বের করতে হয়।",
            "commonMistakes": "সহগ পরিবর্তন করে ফেলা।"
          },
          {
            "latex": "bx - ay + k = 0 \\quad (\\text{লম্ব রেখা})",
            "name": "লম্ব রেখার সমীকরণ",
            "meaning": "$ax + by + c = 0$ এর উপর লম্ব যেকোনো রেখা।",
            "whenToUse": "লম্ব রেখার সমীকরণ এক লাইনে বের করতে।",
            "conditions": "মূল রেখার লম্ব হতে হবে।",
            "variables": "$k$: নতুন ধ্রুবক।",
            "commonMistakes": "চিহ্ন বদলাতে ভুলে যাওয়া।"
          },
          {
            "latex": "d = \\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2 + b^2}}",
            "name": "বিন্দু হতে রেখার লম্ব দূরত্ব",
            "meaning": "$(x_1, y_1)$ বিন্দু হতে $ax + by + c = 0$ রেখার ক্ষুদ্রতম দূরত্ব।",
            "whenToUse": "বিন্দু থেকে রেখার দূরত্ব বা বৃত্তের স্পর্শকের শর্ত যাচাইয়ে।",
            "conditions": "দূরত্ব সর্বদা অঋণাত্মক ($d \\ge 0$)।",
            "variables": "$x_1, y_1$: বিন্দুর স্থানাঙ্ক; $a, b, c$: রেখার সহগসমূহ।",
            "commonMistakes": "পরমমান না দিয়ে ঋণাত্মক দূরত্ব লেখা।"
          },
          {
            "latex": "d = \\frac{|c_1 - c_2|}{\\sqrt{a^2 + b^2}}",
            "name": "দুই সমান্তরাল রেখার মধ্যবর্তী দূরত্ব",
            "meaning": "$ax+by+c_1=0$ এবং $ax+by+c_2=0$ এর মধ্যবর্তী লম্ব দূরত্ব।",
            "whenToUse": "দুটি সমান্তরাল রেখার দূরত্ব বের করতে।",
            "conditions": "উভয় সমীকরণে $x$ ও $y$ এর সহগ হুবহু এক বানিয়ে নিতে হবে।",
            "variables": "$c_1, c_2$: দুটি রেখার ধ্রুবক।",
            "commonMistakes": "সহগ এক না করেই $c_1 - c_2$ করে ফেলা।"
          }
        ],
        "analysis": {
          "conditions": "দুই সমান্তরাল রেখার দূরত্বের সূত্রে অবশ্যই $a$ এবং $b$ উভয় সমীকরণে সমান হতে হবে। যেমন $2x+4y+6=0$ থাকলে তাকে ২ দিয়ে ভাগ করে $x+2y+3=0$ বানাতে হবে।",
          "variations": "মূলবিন্দু হতে লম্ব দূরত্ব: $d = \\frac{|c|}{\\sqrt{a^2+b^2}}$।",
          "relationships": "বৃত্তের ক্ষেত্রে: কেন্দ্র থেকে স্পর্শকের লম্ব দূরত্ব = বৃত্তের ব্যাসার্ধ ($d = r$)।",
          "transformations": "যদি রেখা দুটি সমান্তরাল হয়: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$।",
          "misunderstandings": "সহগ সমান না করে ধ্রুবকের বিয়োগফল নেওয়া সবচেয়ে মারাত্মক ভুল।"
        },
        "questionPatterns": [
          {
            "typeTitle": "দুই সমান্তরাল রেখার মধ্যবর্তী দূরত্ব নির্ণয়",
            "recognition": "দুটি রেখার সমীকরণ দেওয়া থাকবে যাদের $x$ ও $y$ এর সহগের অনুপাত সমান।",
            "requiredConcept": "সহগ সমানীকরণ ও দূরত্ব সূত্র $d = \\frac{|c_1-c_2|}{\\sqrt{a^2+b^2}}$।",
            "strategy": "১) উভয় সমীকরণের $x$ ও $y$ এর সহগ হুবহু এক করুন। ২) ধ্রুবকদ্বয়ের পার্থক্যের পরমমানকে $\\sqrt{a^2+b^2}$ দিয়ে ভাগ করুন।",
            "keySteps": [
              "সহগ সমতাকরণ",
              "ধ্রুবক চিহ্নিতকরণ",
              "সূত্রে মান বসানো"
            ],
            "commonTraps": "সহগ না মিলিয়ে সরাসরি বিয়োগ করা।"
          }
        ],
        "easyExample": {
          "problem": "$(1, 2)$ বিন্দু থেকে $3x - 4y + 10 = 0$ রেখার লম্ব দূরত্ব কত?",
          "solutionSteps": [
            "লম্ব দূরত্বের সূত্র: $d = \\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2 + b^2}}$।",
            "বিন্দুর মান বসিয়ে পাই: $d = \\frac{|3(1) - 4(2) + 10|}{\\sqrt{3^2 + (-4)^2}}$।",
            "$d = \\frac{|3 - 8 + 10|}{\\sqrt{9 + 16}} = \\frac{|5|}{\\sqrt{25}} = \\frac{5}{5} = 1$ একক।"
          ],
          "answer": "$1$ একক"
        },
        "examExample": {
          "examTag": "BUET / DU / GST Admission",
          "problem": "$3x - 4y + 5 = 0$ এবং $6x - 8y - 15 = 0$ রেখাদ্বয়ের মধ্যবর্তী দূরত্ব কত?",
          "recognitionApproach": "উভয় রেখা সমান্তরাল কারণ সহগের অনুপাত $\\frac{3}{6} = \\frac{-4}{-8} = \\frac{1}{2}$।",
          "stepByStepSolution": "১) প্রথম সমীকরণকে ২ দিয়ে গুণ করে সহগ সমান করি: $6x - 8y + 10 = 0$।\n২) এখন উভয় সমীকরণে $a = 6, b = -8$ এবং ধ্রুবকদ্বয় $c_1 = 10, c_2 = -15$।\n৩) দূরত্ব সূত্র: $d = \\frac{|c_1 - c_2|}{\\sqrt{a^2 + b^2}} = \\frac{|10 - (-15)|}{\\sqrt{6^2 + (-8)^2}} = \\frac{|25|}{\\sqrt{36+64}} = \\frac{25}{\\sqrt{100}} = \\frac{25}{10} = 2.5$ একক।",
          "whyItWorks": "সহগ সমান হলে জ্যামিতিক স্কেল এক হয়, তখন ধ্রুবকের পার্থক্য প্রকৃত রৈখিক ব্যবধান নির্দেশ করে।",
          "calcAvoidanceTrick": "মনে মনে প্রথমটিকে ২ দিয়ে গুণ: ধ্রুবক হয় ১০। অপরটির ধ্রুবক $-15$। ব্যবধান $10 - (-15) = 25$। নিচে $\\sqrt{36+64} = 10$। $25/10 = 2.5$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "সমান্তরাল: $ax+by+k=0$",
            "লম্ব: $bx-ay+k=0$",
            "$d = \\frac{|ax_1+by_1+c|}{\\sqrt{a^2+b^2}}$",
            "$d = \\frac{|c_1-c_2|}{\\sqrt{a^2+b^2}}$"
          ],
          "importantConditions": [
            "সমান্তরাল রেখার দূরত্বে সহগ $a, b$ সমান করা বাধ্যতামূলক।"
          ],
          "keyObservations": [
            "দূরত্ব সর্বদা ধনাত্মক।"
          ],
          "recognitionTips": [
            "লম্ব বললে সহগ বদল ও এক চিহ্নে মাইনাস।"
          ],
          "commonMistakes": [
            "সহগ না মিলিয়ে সমান্তরাল রেখার দূরত্ব বের করা।"
          ],
          "summary": "সমান্তরালে ধ্রুবক বদলায়, লম্বে সহগ অদলবদল ও চিহ্নবদল। দূরত্বের হর $\\sqrt{a^2+b^2}$।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "পোলার স্থানাঙ্ক ও রূপান্তর সংক্রান্ত সমস্যা",
        "description": "কার্তেসীয় বিন্দু হতে পোলার স্থানাঙ্ক ও পোলার সমীকরণ হতে কার্তেসীয় রূপান্তর।",
        "solvingStrategy": "১) চিহ্ন দেখে চতুর্ভাগ নির্ধারণ করুন। ২) দূরত্ব $r=\\sqrt{x^2+y^2}$ ও নির্দিষ্ট চতুর্ভাগের কোণ বের করুন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0260",
            "question": "$(-\\sqrt{2},-\\sqrt{2})$ বিন্দুর পোলার স্থানাঙ্ক কোনটি?\r\n[JU'25-26; KU'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\left(2,-\\frac{\\pi}{4}\\right)$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\left(2,\\frac{5\\pi}{4}\\right)$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\left(2,\\frac{3\\pi}{4}\\right)$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\left(2,-\\frac{3\\pi}{4}\\right)$\r\n(b, d)"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": $r = \\sqrt{(-\\sqrt{2})^2 + (-\\sqrt{2})^2} = \\sqrt{2+2} = 2$\r\n$\\theta = -\\pi + \\tan^{-1}\\left|\\frac{-\\sqrt{2}}{-\\sqrt{2}}\\right|$\r\n$= -\\pi + \\tan^{-1}(1) = -\\pi + \\frac{\\pi}{4} = -\\frac{3\\pi}{4}$\r\n$\\therefore (r,\\theta) = \\left(2,-\\frac{3\\pi}{4}\\right)$ বা, $\\left(2,\\frac{5\\pi}{4}\\right)$",
            "university": "Admission",
            "year": "",
            "topic": "T-01: স্থানাঙ্ক ব্যবস্থার পরিবর্তন সম্পর্কিত সমস্যা"
          },
          {
            "id": "math-q-0261",
            "question": "$x$ এর কোন মানের জন্য মূল বিন্দুর সাথে $(3, 90^\\circ)$ এবং $(3, x^\\circ)$ সমবাহু ত্রিভুজ গঠন করবে? [SUST'25-26]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$15^\\circ$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$30^\\circ$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$45^\\circ$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$60^\\circ$"
              }
            ],
            "answer": "b",
            "explanation": "Sol\": \r\n[Diagram shows an equilateral triangle with vertices at origin $O(0,0)$, $(3, 90^\\circ)$, and $A(3, x^\\circ)$]\r\nএখানে, $x^\\circ + 60^\\circ = 90^\\circ \\therefore x^\\circ = 90^\\circ - 60^\\circ = 30^\\circ$",
            "university": "SUST",
            "year": "25-26",
            "topic": "T-01: স্থানাঙ্ক ব্যবস্থার পরিবর্তন সম্পর্কিত সমস্যা"
          },
          {
            "id": "math-q-0262",
            "question": "$(1,-\\sqrt{3})$ বিন্দুরটির পোলার স্থানাঙ্ক - [GST'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\left(5,-\\frac{\\pi}{3}\\right)$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\left(-2,\\frac{5\\pi}{4}\\right)$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\left(2,\\frac{5\\pi}{3}\\right)$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\left(2,\\frac{\\pi}{3}\\right)$"
              }
            ],
            "answer": "c",
            "explanation": "Sol\": $(1,-\\sqrt{3}), r = \\sqrt{1+3} = 2$;\r\n$\\theta = -\\tan^{-1}\\left(\\frac{\\sqrt{3}}{1}\\right) \\Rightarrow \\theta = -\\frac{\\pi}{3}$ অথবা $\\frac{5\\pi}{3}$",
            "university": "GST",
            "year": "24-25",
            "topic": "T-01: স্থানাঙ্ক ব্যবস্থার পরিবর্তন সম্পর্কিত সমস্যা"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0263",
            "question": "কোন বিন্দুর কার্তেসীয় স্থানাঙ্ক $(-1, \\sqrt{3})$ হলে পোলার স্থানাঙ্ক কত হবে? [CoU'24-25; JU'22-23]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$(\\sqrt{2}, 45^\\circ)$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$(2, 120^\\circ)$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$(\\sqrt{2}, 130^\\circ)$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$(2, 135^\\circ)$"
              }
            ],
            "answer": "b",
            "explanation": "Sol\": পোলার স্থানাঙ্ক $= \\left(\\sqrt{(\\sqrt{3})^2+1^2}, \\pi - \\tan^{-1}\\frac{\\sqrt{3}}{1}\\right) = (2, 120^\\circ)$",
            "university": "Admission",
            "year": "",
            "topic": "T-01: স্থানাঙ্ক ব্যবস্থার পরিবর্তন সম্পর্কিত সমস্যা",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "সরলরেখার লম্ব ও সমান্তরাল দূরত্ব সংক্রান্ত",
        "description": "বিন্দু হতে রেখার লম্ব দূরত্ব এবং দুটি সমান্তরাল সরলরেখার মধ্যবর্তী দূরত্ব নির্ণয়।",
        "solvingStrategy": "১) সমান্তরাল রেখা হলে সহগ সমান করে $d=\\frac{|c_1-c_2|}{\\sqrt{a^2+b^2}}$ প্রয়োগ করুন।",
        "startIndex": 10,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0270",
            "question": "$r\\cos(\\theta - \\alpha) = k$, সমীকরণটির কার্তেসীয় সমীকরণ কোনটি? [RU'17-18]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$x\\cos\\theta + y\\sin\\theta = k$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$x\\cos\\alpha + y\\sin\\alpha = k$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$x\\cos\\alpha - y\\sin\\alpha = k$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$x\\cos\\alpha - y\\sin\\alpha - k = 0$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: r\\cos\\theta\\cos\\alpha + r\\sin\\theta\\sin\\alpha = k$$\n$\\therefore x\\cos\\alpha + y\\sin\\alpha = k$",
            "university": "RU",
            "year": "17-18",
            "topic": "T-01: স্থানাঙ্ক ব্যবস্থার পরিবর্তন সম্পর্কিত সমস্যা"
          },
          {
            "id": "math-q-0271",
            "question": "$(2, 270^\\circ)$ বিন্দুটির কার্তেসীয় স্থানাঙ্ক কত? [KU'16-17]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$(-2, 0)$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$(0, -2)$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$(2, -2)$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$(0, 0)$"
              }
            ],
            "answer": "a",
            "explanation": "**Sol$^n$:**\r\nচিত্র হতে প্রদত্ত বিন্দু $(3, 150^\\circ)$ ২য় চতুর্ভাগে অবস্থিত।\r\n$\\therefore$ ২য় চতুর্ভাগে ভুঞ্জ; $x < 0$ (-ve)\r\nএবং কোটি; $y > 0$ (+ve)\r\nএখন প্রদত্ত Option-এর মধ্যে কেবলমাত্র (c) Option-টি এই শর্ত খাটে।",
            "university": "KU",
            "year": "16-17",
            "topic": "T-01: স্থানাঙ্ক ব্যবস্থার পরিবর্তন সম্পর্কিত সমস্যা"
          },
          {
            "id": "math-q-0272",
            "question": "পোলার স্থানাঙ্ক পদ্ধতিতে পোল এর স্থানাঙ্ক কত? [RU'15-16]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$(0, 0)$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$(0, \\pi)$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$(0, -\\pi)$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$(0, 2\\pi)$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: r = \\sqrt{0^2 + 0^2} = 0$ এবং $\\theta = \\tan^{-1} \\frac{0}{0}$ বা অসংজ্ঞায়িত। অতএব, পোল এর জন্য পোলার স্থানাঙ্ক নির্ণয় করা সম্ভব নয়।$\nসুতরাং সঠিক উত্তর নেই।",
            "university": "RU",
            "year": "15-16",
            "topic": "T-01: স্থানাঙ্ক ব্যবস্থার পরিবর্তন সম্পর্কিত সমস্যা"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0273",
            "question": "$6r^3\\sin\\theta = 4 - \\cos\\theta$ এর কার্তেসীয় সমীকরণ কী? [RU'15]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$6y(\\sqrt{x^2 + y^2})^3 = 4\\sqrt{x^2 + y^2} - x$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$3y(\\sqrt{x^2 + y^2})^3 = 2x$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$4y(\\sqrt{x^2 + y^2})^3 = 6\\sqrt{x^2 + y^2} - x$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$2y(\\sqrt{x^2 + y^2})^3 = 3\\sqrt{x^2 + y^2}$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: 6r^3\\sin\\theta = 4 - \\cos\\theta$$\n$\\Rightarrow 6r^4\\sin\\theta = 4r - r\\cos\\theta$\r\n$\\Rightarrow 6y(\\sqrt{x^2 + y^2})^3 = 4\\sqrt{x^2 + y^2} - x$",
            "university": "RU",
            "year": "15",
            "topic": "T-01: স্থানাঙ্ক ব্যবস্থার পরিবর্তন সম্পর্কিত সমস্যা",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "পোলার স্থানাঙ্কে চতুর্ভাগীয় কোণের সাধারণ ভুল",
        "description": "কেন $(-1, -1)$ বিন্দুর কোণ $-135^\\circ$ হয় এবং $45^\\circ$ নয়?",
        "promptQuery": "পোলার স্থানাঙ্কে কোণ $\\theta$ নির্ধারণের চতুর্ভাগভিত্তিক নিয়ম এবং ক্যালকুলেটরের সাধারণ ভুল ব্যাখ্যা করো।"
      },
      {
        "title": "বিন্দু হতে রেখার লম্ব দূরত্বের জ্যামিতিক প্রমাণ",
        "description": "ত্রিভুজের ক্ষেত্রফল পদ্ধতি ও অভিক্ষেপ পদ্ধতি দিয়ে $d = \\frac{|ax_1+by_1+c|}{\\sqrt{a^2+b^2}}$ প্রমাণ।",
        "promptQuery": "বিন্দু থেকে সরলরেখার লম্ব দূরত্বের সূত্রের প্রমাণ সহজ জ্যামিতিক চিত্রের সাহায্যে বুঝিয়ে দাও।"
      },
      {
        "title": "দুই রেখার মধ্যবর্তী কোণের সমদ্বিখণ্ডকের সমীকরণ",
        "description": "সূক্ষ্মকোণ ও স্থূলকোণের সমদ্বিখণ্ডক চেনার চমৎকার শর্টকাট কৌশল ($a_1 a_2 + b_1 b_2$ এর চিহ্ন)।",
        "promptQuery": "দুটি সরলরেখার মধ্যবর্তী সূক্ষ্মকোণ ও স্থূলকোণের সমদ্বিখণ্ডক নির্ণয়ের শর্টকাট টেস্ট বিস্তারিত ব্যাখ্যা করো।"
      },
      {
        "title": "ছেদবিন্দুগামী সরলরেখার সমীকরণ ($L_1 + kL_2 = 0$)",
        "description": "ছেদবিন্দু না বের করেই কীভাবে সরাসরি সমীকরণ লেখা যায়?",
        "promptQuery": "দুটি রেখার ছেদবিন্দুগামী রেখার সমীকরণ $L_1 + kL_2 = 0$ পদ্ধতির প্রয়োগ ও সুবিধা ব্যাখ্যা করো।"
      },
      {
        "title": "সরলরেখা অধ্যায়ের শীর্ষ ৫টি ভর্তি পরীক্ষা শর্টকাট",
        "description": "বুয়েট ও ঢাকা বিশ্ববিদ্যালয়ে ৩০ সেকেন্ডে উত্তর দাগানোর কৌশলসমূহ।",
        "promptQuery": "সরলরেখা অধ্যায়ের সবচেয়ে কার্যকরী ৫টি ভর্তি পরীক্ষা শর্টকাট ট্রিক উদাহরণসহ আলোচনা করো।"
      }
    ],
    "questionCount": 226
  },
  {
    "id": "ch-circle",
    "paper": "First-Paper",
    "paperBn": "১ম পত্র",
    "chapterNum": 4,
    "nameBn": "বৃত্ত",
    "nameEn": "Circles",
    "rawName": "বৃত্ত",
    "summary": "উচ্চতর গণিত ১ম পত্রের অন্যতম গুরুত্বপূর্ণ অধ্যায়। বৃত্তের সমীকরণ চেনার শর্ত, কেন্দ্র ও ব্যাসার্ধ নির্ণয়, অক্ষের খণ্ডিতাংশ, অক্ষ স্পর্শ করার শর্ত এবং স্পর্শক ও অভিলম্বের সমীকরণ প্রতি বছর ভর্তি পরীক্ষায় বারবার আসে।",
    "topics": [
      "বৃত্তের সমীকরণ ও বৈশিষ্ট্য",
      "অক্ষের খণ্ডিতাংশ ও স্পর্শ শর্ত",
      "বৃত্তের সাপেক্ষে বিন্দুর অবস্থান ও জ্যা",
      "বৃত্তের স্পর্শক ও অভিলম্ব"
    ],
    "concepts": [
      {
        "id": "c-circle-01",
        "title": "বৃত্তের সাধারণ সমীকরণ, কেন্দ্র ও ব্যাসার্ধ (General Equation, Center & Radius)",
        "topic": "বৃত্তের সমীকরণ ও বৈশিষ্ট্য",
        "summary": "দ্বিঘাত সমীকরণ বৃত্ত নির্দেশ করার ৩টি শর্ত এবং কেন্দ্র ও ব্যাসার্ধ দ্রুত নির্ণয়।",
        "intro": {
          "what": "বৃত্তের আদর্শ সমীকরণ হলো $(x - h)^2 + (y - k)^2 = r^2$, যার কেন্দ্র $(h, k)$ এবং ব্যাসার্ধ $r$। বৃত্তের সাধারণ সমীকরণ $x^2 + y^2 + 2gx + 2fy + c = 0$, যার কেন্দ্র $(-g, -f)$ এবং ব্যাসার্ধ $r = \\sqrt{g^2 + f^2 - c}$।",
          "whyImportant": "একটি দ্বিঘাত সমীকরণ বৃত্ত নির্দেশ করে কিনা এবং সমীকরণ থেকে কেন্দ্র ও ব্যাসার্ধ বের করার প্রশ্ন প্রতিবছর বোর্ড ও ভর্তি পরীক্ষায় নিশ্চিত আসে।",
          "whereUsed": "জিপিএস ট্রাইলেটারেশন, মহাকাশযানের কক্ষপথ ও অপটিক্যাল লেন্সের বক্রতা নির্ণয়ে।",
          "prerequisites": "দ্বিপদী বর্গের বিস্তার ও দ্বিঘাত সমীকরণ।"
        },
        "easyExplanation": [
          "কোনো দ্বিঘাত সমীকরণ বৃত্ত হতে হলে ৩টি আবশ্যিক শর্ত মানতে হবে: ১) এটি $x$ ও $y$ এর দ্বিঘাত সমীকরণ হতে হবে, ২) $x^2$ ও $y^2$ এর সহগ সমান ও সমচিহ্নবিশিষ্ট হতে হবে, এবং ৩) কোনো $xy$ যুক্ত পদ থাকা চলবে না (অর্থাৎ $xy$ এর সহগ শূন্য)।",
          "সাধারণ সমীকরণ থেকে কেন্দ্র বের করার দ্রুত নিয়ম: $x$ এর সহগকে $-2$ দিয়ে ভাগ এবং $y$ এর সহগকে $-2$ দিয়ে ভাগ। ব্যাসার্ধ হবে $\\sqrt{(\\text{কেন্দ্রের } x)^2 + (\\text{কেন্দ্রের } y)^2 - c}$।"
        ],
        "formulas": [
          {
            "latex": "x^2 + y^2 + 2gx + 2fy + c = 0",
            "name": "বৃত্তের সাধারণ সমীকরণ",
            "meaning": "যেখানে কেন্দ্র $= (-g, -f)$ এবং ব্যাসার্ধ $r = \\sqrt{g^2 + f^2 - c}$।",
            "whenToUse": "বৃত্তের সমীকরণ থেকে কেন্দ্র ও ব্যাসার্ধ নির্ণয়ে।",
            "conditions": "$g^2 + f^2 - c \\ge 0$ হতে হবে (বাস্তব বৃত্তের জন্য)।",
            "variables": "$g, f, c$: বৃত্তের পরামিতি ধ্রুবক।",
            "commonMistakes": "$x^2$ ও $y^2$ এর সহগ ১ না বানিয়েই কেন্দ্র বের করা।"
          },
          {
            "latex": "g^2 + f^2 - c > 0 \\implies \\text{বাস্তব বৃত্ত}, \\quad g^2 + f^2 - c = 0 \\implies \\text{বিন্দু বৃত্ত}",
            "name": "বৃত্তের অস্তিত্বের শর্ত",
            "meaning": "বর্গমূলের ভেতরের মান শূন্য হলে বিন্দু বৃত্ত এবং ঋণাত্মক হলে কাল্পনিক বৃত্ত।",
            "whenToUse": "বিন্দু বৃত্ত বা বাস্তব বৃত্তের শর্ত পরীক্ষায়।",
            "conditions": "বিন্দু বৃত্তের ব্যাসার্ধ শূন্য ($r = 0$)।",
            "variables": "$g, f, c$: সমীকরণের সহগ।",
            "commonMistakes": "বিন্দু বৃত্তকে বৃত্ত নয় মনে করা।"
          }
        ],
        "analysis": {
          "conditions": "যদি সমীকরণে $2x^2 + 2y^2 + 8x - 12y + 4 = 0$ থাকে, তবে কেন্দ্র বের করার আগে অবশ্যই পুরো সমীকরণকে ২ দিয়ে ভাগ করে নিতে হবে।",
          "variations": "ব্যাসাকার বৃত্ত: $(x_1, y_1)$ এবং $(x_2, y_2)$ ব্যাসের দুই প্রান্তবিন্দু হলে বৃত্তের সমীকরণ: $(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$।",
          "relationships": "শাঙ্কব বা কণিকের সাধারণ সমীকরণ $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ বৃত্ত হবে যদি $a = b$ এবং $h = 0$ হয়।",
          "transformations": "মূলবিন্দুগামী বৃত্তের ক্ষেত্রে ধ্রুবক পদ $c = 0$ হয়।",
          "misunderstandings": "শিক্ষার্থীরা সহগ ১ না করে সরাসরি কেন্দ্র $(-g, -f)$ লিখে ভুল করে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "সমীকরণ বৃত্ত নির্দেশ করার শর্ত",
            "recognition": "সমীকরণে $ax^2 + 2bxy - 2y^2 + \\dots = 0$ থাকবে এবং $a$ ও $b$ এর মান চাইবে।",
            "requiredConcept": "$x^2$ এর সহগ = $y^2$ এর সহগ এবং $xy$ এর সহগ = 0।",
            "strategy": "সরাসরি $a = \\text{সহগ}(y^2)$ এবং $xy$ এর সহগকে শূন্য বসান।",
            "keySteps": [
              "সহগ তুলনা করা",
              "$xy$ এর সহগ = 0 ধরা",
              "মান বের করা"
            ],
            "commonTraps": "চিহ্ন না খেয়াল করা (যেমন $-2y^2$ থাকলে $a = -2$ হবে)।"
          }
        ],
        "easyExample": {
          "problem": "$x^2 + y^2 - 4x + 6y - 12 = 0$ বৃত্তের কেন্দ্র ও ব্যাসার্ধ নির্ণয় করো।",
          "solutionSteps": [
            "$x$ এর সহগ $-4 \\implies 2g = -4 \\implies g = -2$।",
            "$y$ এর সহগ $6 \\implies 2f = 6 \\implies f = 3$।",
            "ধ্রুবক পদ $c = -12$।",
            "কেন্দ্র $= (-g, -f) = (2, -3)$।",
            "ব্যাসার্ধ $r = \\sqrt{g^2 + f^2 - c} = \\sqrt{(-2)^2 + 3^2 - (-12)} = \\sqrt{4 + 9 + 12} = \\sqrt{25} = 5$ একক।"
          ],
          "answer": "কেন্দ্র: $(2, -3)$, ব্যাসার্ধ: $5$"
        },
        "examExample": {
          "examTag": "HSTU / RU Admission",
          "problem": "$a$ এবং $b$ এর মান কত হলে $ax^2 + 2bxy - 2y^2 + 8x + 12y + 6 = 0$ একটি বৃত্তের সমীকরণ নির্দেশ করবে?",
          "recognitionApproach": "বৃত্তের দুটি মৌলিক শর্ত: ১) $x^2$ এর সহগ = $y^2$ এর সহগ, এবং ২) $xy$ যুক্ত পদ অনুপস্থিত ($h = 0$)।",
          "stepByStepSolution": "১) $x^2$ এর সহগ $a$ এবং $y^2$ এর সহগ $-2$। শর্তমতে: $a = -2$।\n২) $xy$ এর সহগ $2b$। বৃত্তে $xy$ পদ থাকতে পারবে না, তাই $2b = 0 \\implies b = 0$।\n৩) অতএব, $a = -2$ এবং $b = 0$।",
          "whyItWorks": "বৃত্তের সমীকরণ জ্যামিতিকভাবে সমস্ত দিকে সমান স্কেলিং নির্দেশ করে এবং অক্ষের কোনো ঘূর্ণন থাকে না।",
          "calcAvoidanceTrick": "চোখেই দেখা যায়: $y^2$ এর সহগ $-2$, তাই $a=-2$; $xy$ থাকা নিষেধ, তাই $b=0$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "কেন্দ্র: $(-g, -f)$",
            "ব্যাসার্ধ: $\\sqrt{g^2+f^2-c}$",
            "ব্যাসাকার: $(x-x_1)(x-x_2)+(y-y_1)(y-y_2)=0$"
          ],
          "importantConditions": [
            "$x^2$ ও $y^2$ এর সহগ সমান হতে হবে, $xy$ পদ শূন্য হতে হবে।"
          ],
          "keyObservations": [
            "$c = 0$ হলে বৃত্ত মূলবিন্দুগামী।"
          ],
          "recognitionTips": [
            "আগে সমীকরণকে $x^2$ এর সহগ দিয়ে ভাগ করে সহগ ১ বানাও।"
          ],
          "commonMistakes": [
            "ভাগ না করে কেন্দ্র বের করা।"
          ],
          "summary": "বৃত্তে $x^2$ ও $y^2$ এর সহগ সমান, $xy$ পদ নেই। কেন্দ্র $(-g, -f)$, ব্যাসার্ধ $\\sqrt{g^2+f^2-c}$।"
        }
      },
      {
        "id": "c-circle-02",
        "title": "অক্ষদ্বয়ের খণ্ডিতাংশ ও অক্ষ স্পর্শ করার শর্ত (Intercepts & Tangency to Axes)",
        "topic": "অক্ষের খণ্ডিতাংশ ও স্পর্শ শর্ত",
        "summary": "বৃত্ত কর্তৃক স্থানাঙ্কের অক্ষদ্বয় থেকে খণ্ডিত অংশের দৈর্ঘ্য এবং অক্ষদ্বয় স্পর্শ করার শর্তাবলি।",
        "intro": {
          "what": "একটি বৃত্ত কার্তেসীয় অক্ষদ্বয়কে ছেদ করলে যে জ্যা উৎপন্ন হয় তাকে অক্ষের খণ্ডিতাংশ বলে। বৃত্ত কোনো অক্ষকে স্পর্শ করলে ঐ অক্ষের খণ্ডিতাংশের দৈর্ঘ্য শূন্য হয়।",
          "whyImportant": "ভর্তি পরীক্ষার বৃত্ত অধ্যায়ের প্রায় ৩০% প্রশ্ন আসে \"x-অক্ষকে স্পর্শ করলে c=কত?\" বা খণ্ডিতাংশের দৈর্ঘ্য সংক্রান্ত।",
          "whereUsed": "সিভিল ইঞ্জিনিয়ারিংয়ে রাউন্ডঅবাউট ও আর্চ ব্রিজ ডিজাইনে।",
          "prerequisites": "দ্বিঘাত সমীকরণের মূলের বিয়োগফল নির্ণয়।"
        },
        "easyExplanation": [
          "$x^2 + y^2 + 2gx + 2fy + c = 0$ বৃত্তটি $x$-অক্ষকে ছেদ করলে $y = 0$ বসিয়ে পাওয়া যায় $x^2 + 2gx + c = 0$। এই সমীকরণের মূলদ্বয়ের দূরত্বই হলো $x$-অক্ষের খণ্ডিতাংশ $= 2\\sqrt{g^2 - c}$।",
          "একইভাবে $y$-অক্ষের খণ্ডিতাংশ $= 2\\sqrt{f^2 - c}$।",
          "যদি বৃত্তটি $x$-অক্ষকে স্পর্শ করে, তবে খণ্ডিতাংশ শূন্য হবে, অর্থাৎ $g^2 = c$। আর $y$-অক্ষকে স্পর্শ করলে $f^2 = c$। উভয় অক্ষকে স্পর্শ করলে $g^2 = f^2 = c = r^2$।"
        ],
        "formulas": [
          {
            "latex": "\\text{x-অক্ষের খণ্ডিতাংশ} = 2\\sqrt{g^2 - c}",
            "name": "x-অক্ষের খণ্ডিতাংশের দৈর্ঘ্য",
            "meaning": "বৃত্ত দ্বারা $x$-অক্ষ থেকে কেটে নেওয়া অংশের দৈর্ঘ্য।",
            "whenToUse": "$x$-অক্ষ থেকে খণ্ডিত জ্যা এর দৈর্ঘ্য বের করতে।",
            "conditions": "$g^2 > c$ হলে ছেদ করে, $g^2 = c$ হলে স্পর্শ করে, $g^2 < c$ হলে ছেদ করে না।",
            "variables": "$g$: $x$ এর সহগের অর্ধেক, $c$: ধ্রুবক।",
            "commonMistakes": "সামনে ২ গুণ করতে ভুলে যাওয়া।"
          },
          {
            "latex": "\\text{y-অক্ষের খণ্ডিতাংশ} = 2\\sqrt{f^2 - c}",
            "name": "y-অক্ষের খণ্ডিতাংশের দৈর্ঘ্য",
            "meaning": "বৃত্ত দ্বারা $y$-অক্ষ থেকে কেটে নেওয়া অংশের দৈর্ঘ্য।",
            "whenToUse": "$y$-অক্ষ থেকে খণ্ডিত অংশের দৈর্ঘ্য বের করতে।",
            "conditions": "$f^2 \\ge c$।",
            "variables": "$f$: $y$ এর সহগের অর্ধেক, $c$: ধ্রুবক।",
            "commonMistakes": "$g$ ও $f$ এর মধ্যে গোলমাল করা।"
          },
          {
            "latex": "x\\text{-অক্ষ স্পর্শ করলে: } g^2 = c, \\quad y\\text{-অক্ষ স্পর্শ করলে: } f^2 = c",
            "name": "অক্ষ স্পর্শ করার শর্ত",
            "meaning": "যে অক্ষকে স্পর্শ করে সেই অক্ষের সহগের বর্গের মান ধ্রুবক $c$ এর সমান হয়।",
            "whenToUse": "অক্ষ স্পর্শ করার প্রশ্নে অজানা ধ্রুবক $c$ বের করতে।",
            "conditions": "স্পর্শ বিন্দুতে ব্যাসার্ধ সংশ্লিষ্ট অক্ষের লম্ব দূরত্বের সমান।",
            "variables": "$g, f, c$: বৃত্তের পরামিতি।",
            "commonMistakes": "$x$-অক্ষ স্পর্শে $f^2 = c$ মনে করা।"
          }
        ],
        "analysis": {
          "conditions": "উভয় অক্ষকে স্পর্শ করলে কেন্দ্রের স্থানাঙ্ক $(\\pm r, \\pm r)$ হয় এবং সমীকরণ $(x \\pm r)^2 + (y \\pm r)^2 = r^2$ হয়।",
          "variations": "$x$-অক্ষকে স্পর্শ করলে কেন্দ্রের $y$-স্থানাঙ্কের পরমমানই বৃত্তের ব্যাসার্ধ ($r = |f|$) হয়।",
          "relationships": "$y$-অক্ষকে স্পর্শ করলে কেন্দ্রের $x$-স্থানাঙ্কের পরমমানই ব্যাসার্ধ ($r = |g|$) হয়।",
          "transformations": "যদি বৃত্ত মূলবিন্দুতে $x$-অক্ষকে স্পর্শ করে, তবে কেন্দ্র $(0, \\pm r)$ এবং সমীকরণ $x^2 + y^2 \\pm 2ry = 0$।",
          "misunderstandings": "শিক্ষার্থীরা মনে রাখে $x$-অক্ষ স্পর্শ করলে $y$-অক্ষের মান ব্যাসার্ধ—এটা সঠিক কিন্তু সূত্রে $g^2 = c$ আর $f^2 = c$ উল্টে ফেলে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "অক্ষ স্পর্শ করার শর্তে ধ্রুবকের মান নির্ণয়",
            "recognition": "প্রশ্নে বলা থাকবে বৃত্তটি $x$-অক্ষ বা $y$-অক্ষকে স্পর্শ করে, $k$ বা $c$ এর মান কত?",
            "requiredConcept": "$x$-অক্ষ স্পর্শে $g^2 = c$; $y$-অক্ষ স্পর্শে $f^2 = c$।",
            "strategy": "বৃত্তের সমীকরণ থেকে $g$ বা $f$ বের করে বর্গ করে $c$ এর সমান বসান।",
            "keySteps": [
              "সমীকরণ প্রমিত করা",
              "$g$ বা $f$ বের করা",
              "বর্গ করে $c$ এর সমান বসানো"
            ],
            "commonTraps": "সমীকরণে $x^2, y^2$ এর সহগ ১ না থাকলে সরাসরি সহগ নেওয়া।"
          }
        ],
        "easyExample": {
          "problem": "$x^2 + y^2 - 6x + 8y + k = 0$ বৃত্তটি $x$-অক্ষকে স্পর্শ করলে $k$ এর মান কত?",
          "solutionSteps": [
            "$x$ এর সহগ $-6 \\implies 2g = -6 \\implies g = -3$।",
            "$x$-অক্ষ স্পর্শ করার শর্ত হলো $g^2 = c$।",
            "এখানে $c = k$। অতএব, $k = g^2 = (-3)^2 = 9$।"
          ],
          "answer": "$k = 9$"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "$x^2 + y^2 - 8x - 6y + 9 = 0$ বৃত্তটি দ্বারা $y$-অক্ষের খণ্ডিতাংশের দৈর্ঘ্য কত?",
          "recognitionApproach": "$y$-অক্ষের খণ্ডিতাংশের সূত্র: $2\\sqrt{f^2 - c}$।",
          "stepByStepSolution": "১) $y$ এর সহগ $-6 \\implies 2f = -6 \\implies f = -3$।\n২) ধ্রুবক পদ $c = 9$।\n৩) খণ্ডিতাংশ $= 2\\sqrt{f^2 - c} = 2\\sqrt{(-3)^2 - 9} = 2\\sqrt{9 - 9} = 2\\sqrt{0} = 0$।\n৪) খণ্ডিতাংশ ০ মানে বৃত্তটি $y$-অক্ষকে স্পর্শ করেছে।",
          "whyItWorks": "খণ্ডিতাংশ শূন্য হওয়া মানে রেখাটি বৃত্তের ছেদক নয়, বরং স্পর্শক।",
          "calcAvoidanceTrick": "দেখাই যাচ্ছে $f^2 = (-3)^2 = 9 = c$, অর্থাৎ বৃত্তটি $y$-অক্ষকে স্পর্শ করে, তাই খণ্ডিতাংশ শূন্য।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$x$-খণ্ডিতাংশ: $2\\sqrt{g^2-c}$",
            "$y$-খণ্ডিতাংশ: $2\\sqrt{f^2-c}$",
            "$x$-স্পর্শ: $g^2=c$",
            "$y$-স্পর্শ: $f^2=c$"
          ],
          "importantConditions": [
            "উভয় অক্ষ স্পর্শ করলে $g^2 = f^2 = c = r^2$।"
          ],
          "keyObservations": [
            "$x$-অক্ষ স্পর্শ করলে ব্যাসার্ধ $r = |f|$; $y$-অক্ষ স্পর্শ করলে $r = |g|$।"
          ],
          "recognitionTips": [
            "খণ্ডিতাংশ চাইলে ২ গুণ দিতে ভুলো না।"
          ],
          "commonMistakes": [
            "$x$-অক্ষ স্পর্শে $f^2=c$ লিখে ফেলা।"
          ],
          "summary": "$x$-খণ্ডিতাংশ $2\\sqrt{g^2-c}$, স্পর্শ করলে $g^2=c$। $y$-খণ্ডিতাংশ $2\\sqrt{f^2-c}$, স্পর্শ করলে $f^2=c$।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "বৃত্তের সমীকরণ ও বৈশিষ্ট্য সংক্রান্ত",
        "description": "বৃত্ত নির্দেশ করার শর্তাবলী এবং কেন্দ্র ও ব্যাসার্ধ নির্ণয়।",
        "solvingStrategy": "১) $x^2$ ও $y^2$ এর সহগ ১ বানান। ২) কেন্দ্র $(-g, -f)$ এবং ব্যাসার্ধ $r=\\sqrt{g^2+f^2-c}$ বের করুন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0486",
            "question": "$a$ এবং $b$ এর মান কত হলে $ax^2 + 2bxy - 2y^2 + 8x + 12y + 6 = 0$ একটি বৃত্তের সমীকরণ হবে? [JnU'25-26]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$(-2, 1)$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$(2, 0)$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$(0, -2)$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$(-2, 0)$"
              }
            ],
            "answer": "a",
            "explanation": "**Solⁿ:** $x^2$ এর সহগ = $y^2$ এর সহগ $\\therefore a = -2$\r\n$xy$ এর সহগ = $0 \\Rightarrow 2b = 0 \\therefore b = \\frac{0}{2} = 0$",
            "university": "JnU",
            "year": "25-26",
            "topic": "T-01: বৃত্তের সমীকরণ নির্দেশ করার শর্ত"
          },
          {
            "id": "math-q-0487",
            "question": "বৃত্তের সমীকরণে $x^2$ ও $y^2$ এর সহগ কেমন হওয়া উচিত? [HSTU'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "ভিন্ন ও অসমান"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "ভিন্ন ও সমান"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "সমান ও একই চিহ্নযুক্ত"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "সমান ও বিপরীত চিহ্নযুক্ত"
              }
            ],
            "answer": "a",
            "explanation": "",
            "university": "HSTU",
            "year": "24-25",
            "topic": "T-01: বৃত্তের সমীকরণ নির্দেশ করার শর্ত"
          },
          {
            "id": "math-q-0488",
            "question": "$k$ এর কোন মানের জন্য $(x - y + 3)^2 + (kx + 2)(y - 1) = 0$ সমীকরণটি একটি বৃত্ত হবে? [JnU'24-25; JU'23-24; Agri.'20-21]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$1$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$-1$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$-2$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$2$"
              }
            ],
            "answer": "a",
            "explanation": "**Solⁿ:** $(x - y + 3)^2 + (kx + 2)(y - 1) = 0$\r\n$\\Rightarrow x^2 + y^2 + 9 - 2xy + 6x - 6y + kxy - kx + 2y - 2 = 0$\r\n$\\Rightarrow x^2 + y^2 + (6 - k)x - 4y + (k - 2)xy + 7 = 0$\r\nবৃত্তের জন্য, $xy$ এর সহগ $= 0 \\therefore k - 2 = 0 \\therefore k = 2$\r\n**Shortcut:** $(x - y + 3)^2 + (kx + 2)(y - 1) = 0$\r\n$\\Rightarrow -2xy + kxy = 0 \\therefore k = 2$",
            "university": "Admission",
            "year": "",
            "topic": "T-01: বৃত্তের সমীকরণ নির্দেশ করার শর্ত"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0489",
            "question": "$4x^2 + 4y^2 = 3$ সমীকরণটি কিসের? [RU'11-12]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "পরাবৃত্ত"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "বৃত্ত"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "উপবৃত্ত"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "সরলরেখা"
              }
            ],
            "answer": "a",
            "explanation": "**Solⁿ:** $x^2 + y^2 = \\frac{3}{4}$; $x^2$ এর সহগ = $y^2$ এর সহগ এবং সমীকরণটি বৃত্ত নির্দেশ করে যেখানে $xy$ এর সহগ = 0।",
            "university": "RU",
            "year": "11-12",
            "topic": "T-01: বৃত্তের সমীকরণ নির্দেশ করার শর্ত",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "অক্ষের খণ্ডিতাংশ ও স্পর্শ সংক্রান্ত সমস্যা",
        "description": "অক্ষদ্বয়ের ছেদকৃত জ্যা এর দৈর্ঘ্য এবং অক্ষ স্পর্শ করার শর্তাবলী।",
        "solvingStrategy": "১) $x$-অক্ষ স্পর্শে $g^2=c$ এবং $y$-অক্ষ স্পর্শে $f^2=c$ বসান।",
        "startIndex": 8,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0494",
            "question": "$x^2 + y^2 - 2x = 0$ বৃত্ত দ্বারা আবদ্ধ ক্ষেত্রের ক্ষেত্রফল কত বর্গ একক? [JU'22-23]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{1}{2}\\pi g^2$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{1}{4}\\pi g^2$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{1}{3}\\pi g^2$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\pi g^2$"
              }
            ],
            "answer": "a",
            "explanation": "*Sol*: $x^2 + y^2 - 2x = 0$\r\n$\\Rightarrow x^2 - 2x \\cdot \\frac{x}{2} + \\left(\\frac{g}{2}\\right)^2 + y^2 - \\left(\\frac{g}{2}\\right)^2 = 0$\r\n$\\Rightarrow \\left(x - \\frac{g}{2}\\right)^2 + y^2 - \\left(\\frac{g}{2}\\right)^2 = 0$\r\n$\\therefore \\left(x - \\frac{g}{2}\\right)^2 + y^2 = \\left(\\frac{g}{2}\\right)^2 \\therefore \\text{কেন্দ্র } \\left(\\frac{g}{2}, 0\\right), \\text{ ব্যাসার্ধ } r = \\frac{g}{2}$.\r\n$\\text{ক্ষেত্রফল} = \\pi r^2 = \\pi \\left(\\frac{g}{2}\\right)^2 = \\frac{1}{4}\\pi g^2$ বর্গ একক।",
            "university": "JU",
            "year": "22-23",
            "topic": "T-02: বৃত্তের কেন্দ্র, ব্যাসার্ধ ও ক্ষেত্রফল নির্ণয়"
          },
          {
            "id": "math-q-0495",
            "question": "$x^2 + y^2 - 5x = 0$ ও $x^2 + y^2 + 3x = 0$ বৃত্তদ্বয়ের কেন্দ্রদ্বয়ের মধ্যবর্তী দূরত্ব কত? [RU'22-23]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$1$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$2$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$3$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$4$"
              }
            ],
            "answer": "a",
            "explanation": "*Sol*: $x^2 + y^2 - 5x = 0$ এর কেন্দ্র = $\\left(\\frac{5}{2}, 0\\right)$\r\n$x^2 + y^2 + 3x = 0$ এর কেন্দ্র = $\\left(-\\frac{3}{2}, 0\\right)$\r\n$\\therefore \\text{কেন্দ্রদ্বয়ের মধ্যবর্তী দূরত্ব} = \\frac{5}{2} - \\left(-\\frac{3}{2}\\right) = \\left(\\frac{5}{2} + \\frac{3}{2}\\right) = 4$ একক।",
            "university": "RU",
            "year": "22-23",
            "topic": "T-02: বৃত্তের কেন্দ্র, ব্যাসার্ধ ও ক্ষেত্রফল নির্ণয়"
          },
          {
            "id": "math-q-0496",
            "question": "$c$-এর মান কত হলে, $x^2 + y^2 + 8x - 6y + c = 0$ বৃত্তটি একটি বিন্দুবৃত্ত হবে? [CoU'24-25; RU'21-22]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$15$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$25$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\sqrt{15}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$5$"
              }
            ],
            "answer": "a",
            "explanation": "*Sol*: $x^2 + y^2 + 8x - 6y + c = 0$ কে বৃত্তের সাধারণ সমীকরণ $x^2 + y^2 + 2gx + 2fy + c = 0$ এর সাথে তুলনা করে পাই, $g = 4, f = -3$\r\nবৃত্তটি বিন্দুবৃত্ত হলে বৃত্তের ব্যাসার্ধ, $\\sqrt{g^2 + f^2 - c} = 0$\r\n$\\Rightarrow g^2 + f^2 - c = 0 \\Rightarrow 4^2 + (-3)^2 - c = 0 \\therefore c = 25$",
            "university": "Admission",
            "year": "",
            "topic": "T-02: বৃত্তের কেন্দ্র, ব্যাসার্ধ ও ক্ষেত্রফল নির্ণয়"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0497",
            "question": "$x^2 + y^2 - 2x - 4y - 4 = 0$ বৃত্তটির কেন্দ্রের স্থানাঙ্ক এবং ব্যাসার্ধ কত? [RU'21-22]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$(1, 2), 3$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$(4, 2), 4$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$(2, 4), 4$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$(1, 2), 9$"
              }
            ],
            "answer": "a",
            "explanation": "*Sol*: $x^2 + y^2 - 2x - 4y - 4 = 0$\r\n$\\Rightarrow x^2 + 2(-1)x + 2(-2)y - 4 = 0$;\r\nআবার, $g = -1, f = -2, c = -4$\r\n$\\therefore \\text{কেন্দ্র } (-g, -f) \\equiv (1, 2)$\r\n$\\therefore r = \\sqrt{g^2 + f^2 - c} = \\sqrt{(-1)^2 + (-2)^2 + 4} = 3$ একক",
            "university": "RU",
            "year": "21-22",
            "topic": "T-02: বৃত্তের কেন্দ্র, ব্যাসার্ধ ও ক্ষেত্রফল নির্ণয়",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "বৃত্তে $xy$ যুক্ত পদ কেন থাকতে পারে না?",
        "description": "কণিকের সাধারণ সমীকরণে $xy$ পদ থাকলে কী জ্যামিতিক পরিবর্তন ঘটে?",
        "promptQuery": "বৃত্তের সমীকরণে $xy$ যুক্ত পদ অনুপস্থিত থাকার জ্যামিতিক কারণ ও অক্ষের ঘূর্ণন প্রভাব ব্যাখ্যা করো।"
      },
      {
        "title": "সরলরেখা বৃত্তের স্পর্শক হওয়ার শর্ত ($c = \\pm a\\sqrt{1+m^2}$)",
        "description": "কেন্দ্র থেকে লম্ব দূরত্ব = ব্যাসার্ধ বসিয়ে প্রমাণ এবং শর্টকাট প্রয়োগ।",
        "promptQuery": "$y = mx + c$ সরলরেখাটি $x^2 + y^2 = a^2$ বৃত্তের স্পর্শক হওয়ার শর্ত $c = \\pm a\\sqrt{1+m^2}$ প্রমাণ করো।"
      },
      {
        "title": "দুটি বৃত্তের সাধারণ জ্যা এর সমীকরণ ($S_1 - S_2 = 0$)",
        "description": "কেন দুটি বৃত্তের সমীকরণ বিয়োগ করলেই সরাসরি সাধারণ জ্যা পাওয়া যায়?",
        "promptQuery": "দুটি বৃত্তের সাধারণ জ্যা এর সমীকরণ $S_1 - S_2 = 0$ কেন হয় তার গাণিতিক যুক্তি বুঝিয়ে দাও।"
      },
      {
        "title": "বহিঃস্থ বিন্দু থেকে অঙ্কিত স্পর্শকের দৈর্ঘ্য",
        "description": "বিন্দুর স্থানাঙ্ক বৃত্তের সমীকরণে বসিয়ে বর্গমূল করার রহস্য।",
        "promptQuery": "বহিঃস্থ বিন্দু $(x_1, y_1)$ থেকে $S=0$ বৃত্তে স্পর্শকের দৈর্ঘ্য $\\sqrt{S_1}$ হওয়ার প্রমাণ দেখাও।"
      },
      {
        "title": "বৃত্ত অধ্যায়ের শীর্ষ ভর্তি পরীক্ষা ফাঁদ",
        "description": "অক্ষ স্পর্শের ভুল, সহগ না মেলানোর ভুল এবং স্পর্শক সমীকরণের ট্রিকস।",
        "promptQuery": "বৃত্ত অধ্যায়ের ভর্তি পরীক্ষায় বারবার ভুল হওয়া শীর্ষ ৩টি ট্রিকি প্রশ্ন সমাধানসহ বিশ্লেষণ করো।"
      }
    ],
    "questionCount": 153
  },
  {
    "id": "ch-perm-comb",
    "paper": "First-Paper",
    "paperBn": "১ম পত্র",
    "chapterNum": 5,
    "nameBn": "বিন্যাস ও সমাবেশ",
    "nameEn": "Permutations & Combinations",
    "rawName": "বিন্যাস ও সমাবেশ",
    "summary": "উচ্চতর গণিত ১ম পত্রের অন্যতম গুরুত্বপূর্ণ অধ্যায়। পাশাপাশি থাকা ও না থাকার শর্ত, পুনরাবৃত্তিমূলক বস্তুর বিন্যাস, দল গঠন, করমর্দন ও জ্যামিতিক সমাবেশ (ত্রিভুজ ও কর্ণ সংখ্যা) থেকে প্রতি বছর ভর্তি পরীক্ষায় প্রশ্ন আসে।",
    "topics": [
      "গণনার মৌলিক নীতি ও ফ্যাক্টোরিয়াল",
      "রৈখিক বিন্যাস ও শর্তযুক্ত বিন্যাস",
      "সমজাতীয় বস্তুর বিন্যাস ও বৃত্তাকার বিন্যাস",
      "সমাবেশ ও দল গঠন",
      "জ্যামিতিক সমাবেশ"
    ],
    "concepts": [
      {
        "id": "c-perm-01",
        "title": "বিন্যাস বনাম সমাবেশ এবং পাশাপাশি থাকার শর্ত (Permutation vs Combination & Tie Method)",
        "topic": "রৈখিক বিন্যাস ও শর্তযুক্ত বিন্যাস",
        "summary": "ক্রম গুরুত্বপূর্ণ হলে বিন্যাস ($^nP_r$), শুধু বাছাই হলে সমাবেশ ($^nC_r$), এবং স্বরবর্ণ একত্রে রাখার টাই মেথড।",
        "intro": {
          "what": "বিন্যাস (Permutation) হলো কতগুলো বস্তু থেকে কয়েকটি বা সবগুলোকে নিয়ে নির্দিষ্ট ক্রমে সাজানোর উপায়। সমাবেশ (Combination) হলো ক্রম বিবেচনা না করে কেবল দল বা গ্রুপ বাছাই করার উপায়।",
          "whyImportant": "ভর্তি পরীক্ষায় \"শব্দটির স্বরবর্ণগুলো সর্বদা একত্রে রেখে কতভাবে সাজানো যায়?\" প্রশ্নটি প্রায় প্রতিটি বিশ্ববিদ্যালয়ে এসেছে।",
          "whereUsed": "পাসওয়ার্ড সিকিউরিটি, জেনেটিক কোডিং ও লটারির সম্ভাব্যতা গণনায়।",
          "prerequisites": "ফ্যাক্টোরিয়াল ধারণা ($n! = n(n-1)\\dots 1$ এবং $0! = 1$)।"
        },
        "easyExplanation": [
          "সহজ কথায়: ক্রম বা পদের গুরুত্ব থাকলে বিন্যাস ($AB \\neq BA$, যেমন রোল নম্বর বা পদবী)। ক্রমের গুরুত্ব না থাকলে সমাবেশ ($AB = BA$, যেমন ২ জনের দল বা হ্যান্ডশেক)।",
          "পাশাপাশি রাখার বা একত্রে রাখার শর্টকাট (Tie Method / বাঁধাই পদ্ধতি): যাদের একত্রে রাখতে হবে তাদের একটিমাত্র বস্তু বা পুঁটলি বিবেচনা করুন। এরপর মোট বস্তুর সাথে ঐ পুঁটলি সাজান ($n!$), এবং শেষে পুঁটলির ভেতরের উপাদানগুলোকে নিজেদের মধ্যে সাজান ($m!$)। মোট উপায় $= n! \\times m!$।"
        ],
        "formulas": [
          {
            "latex": "^nP_r = \\frac{n!}{(n-r)!}, \\quad ^nC_r = \\frac{n!}{r!(n-r)!}",
            "name": "বিন্যাস ও সমাবেশের মূল সূত্র",
            "meaning": "$n$ টি ভিন্ন বস্তু থেকে $r$ টি নিয়ে সাজানো ও বাছাই করার উপায়।",
            "whenToUse": "সরাসরি সাজানো বা দল গঠনে।",
            "conditions": "$n \\ge r \\ge 0$ এবং $n, r$ অঋণাত্মক পূর্ণসংখ্যা।",
            "variables": "$n$: মোট বস্তু, $r$: নির্বাচিত বস্তু।",
            "commonMistakes": "দল গঠনের প্রশ্নে বিন্যাস সূত্র প্রয়োগ করা।"
          },
          {
            "latex": "^nP_r = r! \\times ^nC_r",
            "name": "বিন্যাস ও সমাবেশের সম্পর্ক",
            "meaning": "বাছাই করে তাদের নিজেদের মধ্যে সাজালেই বিন্যাস পাওয়া যায়।",
            "whenToUse": "বিন্যাস ও সমাবেশের অনুপাত সম্পর্কিত প্রশ্নে।",
            "conditions": "$r$ টি উপাদানকে নিজেদের মধ্যে $r!$ উপায়ে সাজানো যায়।",
            "variables": "$^nP_r, ^nC_r$: বিন্যাস ও সমাবেশ।",
            "commonMistakes": "$r!$ গুণ না করে ভাগ করা।"
          },
          {
            "latex": "\\text{একত্রে না রাখার উপায়} = \\text{মোট বিন্যাস} - \\text{একত্রে রাখার বিন্যাস}",
            "name": "পাশাপাশি না রাখার বিয়োগ পদ্ধতি",
            "meaning": "যেকোনো শর্তে \"কখনো পাশাপাশি না থাকা\" বের করার সর্বজনীন উপায়।",
            "whenToUse": "যখন ২টি উপাদান কখনোই পাশাপাশি বসবে না বলা থাকে।",
            "conditions": "উপাদান দুটি হলে বিয়োগ পদ্ধতি সবচেয়ে দ্রুত কাজ করে।",
            "variables": "মোট বিন্যাস এবং একত্রে রাখার বিন্যাস।",
            "commonMistakes": "৩টি উপাদানের ক্ষেত্রে বিয়োগ পদ্ধতি ভুল ফলাফল দেয় (৩টির জন্য ফাঁকা স্থান/Gap Method ব্যবহার করতে হয়)।"
          }
        ],
        "analysis": {
          "conditions": "যদি কোনো উপাদান একাধিকবার থাকে (যেমন $p$ টি একরকম, $q$ টি আরেকরকম), তবে মোট ফ্যাক্টোরিয়ালকে তাদের ফ্যাক্টোরিয়াল দিয়ে ভাগ করতে হয়: $\\frac{n!}{p! q!}$।",
          "variations": "বৃত্তাকার বিন্যাস: $n$ টি ভিন্ন বস্তুকে গোল টেবিলে সাজানোর উপায় $(n - 1)!$।",
          "relationships": "$^nC_r = ^nC_{n-r}$ (প্রতিসম সমাবেশ)। এটি হিসাবকে অর্ধেক সহজ করে দেয়।",
          "transformations": "$^nC_x = ^nC_y \\implies x = y$ অথবা $x + y = n$। ভর্তি পরীক্ষার সেরা শর্টকাট।",
          "misunderstandings": "অনেকে ভাবে স্বরবর্ণ পাশাপাশি না থাকা মানেই Gap Method, কিন্তু উপাদান ২টি হলে মোট থেকে বিয়োগ করাই সহজতম।"
        },
        "questionPatterns": [
          {
            "typeTitle": "একত্রে রাখার শর্তে শব্দ বিন্যাস (Tie Method)",
            "recognition": "প্রশ্নে একটি শব্দ দেওয়া থাকবে (যেমন \"DIRECTOR\", \"MATHEMATICS\") এবং স্বরবর্ণ একত্রে রাখতে বলবে।",
            "requiredConcept": "স্বরবর্ণগুলোকে ১টি ধরে মোট বিন্যাস $\\times$ স্বরবর্ণগুলোর অভ্যন্তরীণ বিন্যাস।",
            "strategy": "১) স্বরবর্ণ ও ব্যঞ্জনবর্ণ আলাদা করুন। ২) স্বরবর্ণগুলোকে ১টি ব্লক ধরুন। ৩) পুনরাবৃত্তি থাকলে ভাগ করুন।",
            "keySteps": [
              "স্বরবর্ণ চিহ্নিত করা",
              "ব্লক তৈরি করে সাজানো",
              "অভ্যন্তরীণ সাজানো",
              "ভাগ করা"
            ],
            "commonTraps": "পুনরাবৃত্ত বর্ণ দিয়ে ভাগ করতে ভুলে যাওয়া।"
          }
        ],
        "easyExample": {
          "problem": "\"TRIANGLE\" শব্দটির স্বরবর্ণগুলোকে একত্রে রেখে কত উপায়ে সাজানো যায়?",
          "solutionSteps": [
            "\"TRIANGLE\" শব্দে মোট ৮টি বর্ণ আছে যার মধ্যে স্বরবর্ণ ৩টি (I, A, E) এবং ব্যঞ্জনবর্ণ ৫টি (T, R, N, G, L)।",
            "স্বরবর্ণ ৩টিকে একটি ব্লক (IAE) বিবেচনা করলে মোট উপাদান সংখ্যা $= 5 + 1 = 6$ টি।",
            "এই ৬টি উপাদানকে সাজানো যায় $6! = 720$ উপায়ে।",
            "আবার ৩টি স্বরবর্ণ নিজেদের মধ্যে সাজানো যায় $3! = 6$ উপায়ে।",
            "অতএব মোট বিন্যাস সংখ্যা $= 6! \\times 3! = 720 \\times 6 = 4320$ উপায়ে।"
          ],
          "answer": "$4320$"
        },
        "examExample": {
          "examTag": "DU / RU / GST Admission",
          "problem": "যদি $^nC_{12} = ^nC_8$ হয়, তবে $n$ এবং $^{22}C_n$ এর মান কত?",
          "recognitionApproach": "প্রতিসম সমাবেশের ধর্ম: $^nC_x = ^nC_y \\implies x + y = n$।",
          "stepByStepSolution": "১) যেহেতু $12 \\neq 8$, সুতরাং $n = 12 + 8 = 20$।\n২) এখন $^{22}C_n = ^{22}C_{20}$।\n৩) প্রতিসম ধর্ম মতে $^{22}C_{20} = ^{22}C_{22-20} = ^{22}C_2$।\n৪) $^{22}C_2 = \\frac{22 \\times 21}{2 \\times 1} = 11 \\times 21 = 231$।",
          "whyItWorks": "$n$ টি বস্তু থেকে $r$ টি বাছাই করা আর $(n-r)$ টি ফেলে দেওয়া একই কথা।",
          "calcAvoidanceTrick": "$^{22}C_{20}$ কে $^{22}C_2$ বানালে মাত্র ৩ সেকেন্ডে $11 \\times 21 = 231$ মুখে মুখে বের হয়।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$^nP_r = \\frac{n!}{(n-r)!}$",
            "$^nC_r = \\frac{n!}{r!(n-r)!}$",
            "$^nC_x = ^nC_y \\implies x+y=n$",
            "গোল টেবিল: $(n-1)!$"
          ],
          "importantConditions": [
            "একত্রে রাখলে পুঁটলি ধরে গুণ, পাশাপাশি না রাখলে মোট থেকে বিয়োগ।"
          ],
          "keyObservations": [
            "পুনরাবৃত্তি থাকলে ফ্যাক্টোরিয়াল দিয়ে ভাগ।"
          ],
          "recognitionTips": [
            "পদবী/রোল মানে বিন্যাস, দল/কমিটি মানে সমাবেশ।"
          ],
          "commonMistakes": [
            "সমজাতীয় বর্ণ দিয়ে ভাগ না করা।"
          ],
          "summary": "ক্রম থাকলে বিন্যাস, শুধু বাছাই সমাবেশ। টাই মেথডে একসাথে রেখে গুণ। $^nC_x = ^nC_y$ হলে $n = x+y$।"
        }
      },
      {
        "id": "c-perm-02",
        "title": "জ্যামিতিক সমাবেশ — সরলরেখা, কর্ণ ও ত্রিভুজ গণনা (Geometric Combinations)",
        "topic": "জ্যামিতিক সমাবেশ",
        "summary": "$n$ সংখ্যক বিন্দু ও বহুভুজের বাহু থেকে সরলরেখা, ত্রিভুজ ও কর্ণের সংখ্যা নির্ণয়ের শর্টকাট।",
        "intro": {
          "what": "জ্যামিতিক সমাবেশ হলো সমতলে নির্দিষ্ট সংখ্যক বিন্দু সংযোগ করে কতটি সরলরেখা, কতটি ত্রিভুজ অথবা কোনো বহুভুজে কতটি কর্ণ আঁকা যায় তা নির্ণয়ের সমাবেশীয় গণনা।",
          "whyImportant": "ভর্তি পরীক্ষায় \"১০ বাহুবিশিষ্ট বহুভুজের কর্ণের সংখ্যা কত?\" বা \"সমরেখ বিন্দুযুক্ত সমতলে ত্রিভুজ সংখ্যা কত?\" নিয়মিত আসে।",
          "whereUsed": "নেটওয়ার্ক টপোলজি, সার্কিট কানেক্টিভিটি ও গ্রাফ থিওরিতে নোড কানেকশন গণনায়।",
          "prerequisites": "সমাবেশ সূত্র ($^nC_2, ^nC_3$)।"
        },
        "easyExplanation": [
          "যেকোনো ২টি বিন্দু যোগ করলেই ১টি সরলরেখা পাওয়া যায়, তাই $n$ টি বিন্দু থেকে মোট সরলরেখা $= ^nC_2$। যদি $p$ টি বিন্দু সমরেখ হয়, তবে তারা নিজেরা কোনো নতুন রেখা না দিয়ে কেবল ১টি সাধারণ রেখা দেয়, তাই রেখা সংখ্যা $= ^nC_2 - ^pC_2 + 1$।",
          "যেকোনো ৩টি অসমরেখ বিন্দু দিয়ে ১টি ত্রিভুজ গঠিত হয়, তাই ত্রিভুজ সংখ্যা $= ^nC_3$। সমরেখ $p$ টি বিন্দু থেকে কোনো ত্রিভুজ হয় না, তাই ত্রিভুজ সংখ্যা $= ^nC_3 - ^pC_3$।",
          "$n$ বাহুবিশিষ্ট বহুভুজের মোট কোণিক বিন্দুর সংযোজক রেখা $^nC_2$ যার মধ্যে $n$ টি হলো বাইরের বাহু। বাকিগুলো কর্ণ, তাই কর্ণ সংখ্যা $= ^nC_2 - n = \\frac{n(n-3)}{2}$।"
        ],
        "formulas": [
          {
            "latex": "\\text{কর্ণ সংখ্যা} = \\frac{n(n-3)}{2} = ^nC_2 - n",
            "name": "বহুভুজের কর্ণ সংখ্যার শর্টকাট",
            "meaning": "$n$ বাহুবিশিষ্ট সুষম বা বিষম যেকোনো বহুভুজের মোট কর্ণের সংখ্যা।",
            "whenToUse": "বহুভুজের কর্ণের সংখ্যা চাইলে সরাসরি।",
            "conditions": "$n \\ge 3$ হতে হবে (ত্রিভুজের কোনো কর্ণ নেই, $n=3 \\implies 0$)।",
            "variables": "$n$: বহুভুজের শীর্ষবিন্দু বা বাহুর সংখ্যা।",
            "commonMistakes": "বাহু সংখ্যা $n$ বিয়োগ করতে ভুলে যাওয়া।"
          },
          {
            "latex": "\\text{সরলরেখা} = ^nC_2 - ^pC_2 + 1",
            "name": "সমরেখ বিন্দুর সরলরেখা সূত্র",
            "meaning": "$n$ টি বিন্দুর মধ্যে $p$ টি বিন্দু একই রেখায় অবস্থিত হলে মোট সরলরেখা।",
            "whenToUse": "যখন কিছু বিন্দু সমরেখ বলা থাকে।",
            "conditions": "$p \\ge 2$ হতে হবে।",
            "variables": "$n$: মোট বিন্দু, $p$: সমরেখ বিন্দু।",
            "commonMistakes": "শেষে $+1$ যোগ করতে ভুলে যাওয়া (সমরেখ বিন্দুগুলো নিজেরা একটি রেখা তৈরি করে)।"
          },
          {
            "latex": "\\text{ত্রিভুজ সংখ্যা} = ^nC_3 - ^pC_3",
            "name": "সমরেখ বিন্দুর ত্রিভুজ সূত্র",
            "meaning": "$n$ টি বিন্দুর মধ্যে $p$ টি বিন্দু সমরেখ হলে মোট গঠিত ত্রিভুজ।",
            "whenToUse": "সমরেখ বিন্দুযুক্ত ব্যবস্থায় ত্রিভুজ গণনায়।",
            "conditions": "$p \\ge 3$ হলে বাদ যাবে।",
            "variables": "$n$: মোট বিন্দু, $p$: সমরেখ বিন্দু।",
            "commonMistakes": "ত্রিভুজের ক্ষেত্রে শেষে $+1$ যোগ করা (সমরেখ বিন্দু দিয়ে কোনো ত্রিভুজ হয় না)।"
          }
        ],
        "analysis": {
          "conditions": "ত্রিভুজের কর্ণ নেই কারণ $\\frac{3(3-3)}{2} = 0$। চতুর্ভুজের কর্ণ $\\frac{4(1)}{2} = 2$। পঞ্চভুজের কর্ণ $\\frac{5(2)}{2} = 5$।",
          "variations": "করমর্দন বা হ্যান্ডশেক সংখ্যা: $n$ জন ব্যক্তি প্রত্যেকে প্রত্যেকের সাথে হ্যান্ডশেক করলে মোট হ্যান্ডশেক $= ^nC_2 = \\frac{n(n-1)}{2}$।",
          "relationships": "রাউন্ড রবিন লিগ টুর্নামেন্টে মোট ম্যাচ সংখ্যাও $= ^nC_2$।",
          "transformations": "যদি সমান্তরাল রেখার জালিকা থাকে ($m$ টি সমান্তরাল রেখা অপর $n$ টি সমান্তরাল রেখাকে ছেদ করে), তবে মোট সামান্তরিক সংখ্যা $= ^mC_2 \\times ^nC_2$।",
          "misunderstandings": "সরলরেখার ক্ষেত্রে $+1$ দিতে হয় কিন্তু ত্রিভুজের ক্ষেত্রে $+1$ হয় না—এই পার্থক্য মনে না রাখা।"
        },
        "questionPatterns": [
          {
            "typeTitle": "বহুভুজের কর্ণ সংখ্যা নির্ণয়",
            "recognition": "প্রশ্নে বাহু সংখ্যা দেওয়া থাকবে (যেমন অষ্টভুজ, দশভুজ) এবং কর্ণ জানতে চাইবে।",
            "requiredConcept": "$\\frac{n(n-3)}{2}$ সূত্র।",
            "strategy": "সরাসরি $n$ এর মান বসিয়ে ক্যালকুলেশন করুন।",
            "keySteps": [
              "$n$ চিহ্নিত করা",
              "$n(n-3)/2$ তে মান বসানো",
              "উত্তর বের করা"
            ],
            "commonTraps": "অষ্টভুজ মানে ৮, কিন্তু দশভুজ ভেবে ফেলা।"
          }
        ],
        "easyExample": {
          "problem": "একটি দশভুজ (Decagon) এর কর্ণের সংখ্যা কত?",
          "solutionSteps": [
            "দশভুজের বাহু সংখ্যা $n = 10$।",
            "কর্ণ সংখ্যার সূত্র: $\\frac{n(n-3)}{2}$।",
            "মান বসিয়ে পাই: $\\frac{10(10-3)}{2} = \\frac{10 \\times 7}{2} = 5 \\times 7 = 35$ টি।"
          ],
          "answer": "$35$ টি"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "একটি সমতলে ১২টি বিন্দু আছে যার মধ্যে ৫টি বিন্দু সমরেখ। এই বিন্দুগুলো সংযোগ করে কতটি ত্রিভুজ গঠন করা যায়?",
          "recognitionApproach": "মোট বিন্দু $n = 12$, সমরেখ বিন্দু $p = 5$। সূত্র: $^nC_3 - ^pC_3$।",
          "stepByStepSolution": "১) ১২টি বিন্দু থেকে যেকোনো ৩টি বাছাইয়ের উপায়: $^{12}C_3 = \\frac{12 \\times 11 \\times 10}{3 \\times 2 \\times 1} = 220$।\n২) ৫টি সমরেখ বিন্দু থেকে ৩টি বাছাইয়ের উপায়: $^5C_3 = ^5C_2 = \\frac{5 \\times 4}{2 \\times 1} = 10$।\n৩) গঠিত ত্রিভুজ সংখ্যা $= 220 - 10 = 210$ টি।",
          "whyItWorks": "সমরেখ ৫টি বিন্দুর যেকোনো ৩টি নিলে কোনো ত্রিভুজ উৎপন্ন হয় না, কেবল একটি সরলরেখা হয়। তাই সেগুলো মোট থেকে বাদ যায়।",
          "calcAvoidanceTrick": "$^{12}C_3 = 220$ এবং $^5C_3 = 10$ মুখস্থ মান। বিয়োগফল $220 - 10 = 210$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "কর্ণ: $\\frac{n(n-3)}{2}$",
            "হ্যান্ডশেক: $\\frac{n(n-1)}{2}$",
            "রেখা: $^nC_2 - ^pC_2 + 1$",
            "ত্রিভুজ: $^nC_3 - ^pC_3$"
          ],
          "importantConditions": [
            "সরলরেখায় $+1$ হবে, ত্রিভুজে $+1$ হবে না।"
          ],
          "keyObservations": [
            "সামান্তরিক সংখ্যা $= ^mC_2 \\times ^nC_2$।"
          ],
          "recognitionTips": [
            "কর্ণ চাইলে সরাসরি $n(n-3)/2$।"
          ],
          "commonMistakes": [
            "কর্ণের সূত্রে $n$ বিয়োগ না করা।"
          ],
          "summary": "কর্ণ সংখ্যা $\\frac{n(n-3)}{2}$, হ্যান্ডশেক $\\frac{n(n-1)}{2}$। সমরেখ বিন্দু থাকলে রেখায় বাদ দিয়ে $+1$, ত্রিভুজে কেবল বাদ।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "রৈখিক বিন্যাস ও শব্দ গঠনের সমস্যা",
        "description": "পাশাপাশি থাকা/না থাকার শর্ত ও পুনরাবৃত্তিমূলক বর্ণযুক্ত শব্দ সাজানো।",
        "solvingStrategy": "১) একত্রে বললে পুঁটলি ধরুন। ২) পুনরাবৃত্ত বর্ণ থাকলে ফ্যাক্টোরিয়াল দিয়ে ভাগ করুন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0639",
            "question": "$1$ থেকে $5$ পর্যন্ত অঙ্কগুলো দিয়ে পুনরাবৃত্তি ছাড়া $4$ অঙ্কের সংখ্যা কত হয়? [GST'25-26]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "120"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "60"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "24"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "125"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": মোট সংখ্যা = $^5P_4 = 120$",
            "university": "GST",
            "year": "25-26",
            "topic": "T-02:"
          },
          {
            "id": "math-q-0640",
            "question": "ঢাকা হতে জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ে যাতায়াত করার $6$ টি ভিন্ন ভিন্ন বাস আছে। যদি যাবার ও আসার বাস আলাদা হয় তবে তুমি কত সংখ্যক উপায়ে ঢাকা হতে জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ে পৌঁছে আবার ঢাকায় ফিরে আসতে পারবে? [JU'18-19]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "30"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "36"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "31"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "12"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": $^6P_2 = 6 \\times 5 = 30$",
            "university": "JU",
            "year": "18-19",
            "topic": "T-02:"
          },
          {
            "id": "math-q-0641",
            "question": "হিমেলে ড্রইং রুমে ৪টি ছবি ঝুলানো আছে। সে দেয়াল থেকে ২টি করে ছবি নিয়ে ১টি ডাইনিং রুমে ও ১টি বেড রুমে ঝুলাতে চায়। কতভাবে সে কাজটি করতে পারবে? [RU'14-15]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "6"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "12"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "24"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "2"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": $^4P_2 = 4 \\times 3 = 12$",
            "university": "RU",
            "year": "14-15",
            "topic": "T-02:"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0642",
            "question": "'SCIENCE' শব্দটির সবকটি বর্ণকে কতভাবে সাজানো যায়? [CU' 21-22]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "120"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "1260"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "5010"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "20160"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": $\\frac{7!}{2!2!} = 1260$ [SCIENCE শব্দে বর্ণ আছে 7 টি, C আছে 2 টি, E আছে 2 টি]",
            "university": "CU",
            "year": "21-22",
            "topic": "T-03:",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "জ্যামিতিক সমাবেশ ও কর্ণ গণনা",
        "description": "বহুভুজের কর্ণ সংখ্যা, বিন্দু হতে ত্রিভুজ ও সরলরেখা গঠন।",
        "solvingStrategy": "১) কর্ণ চাইলে $\\frac{n(n-3)}{2}$ প্রয়োগ করুন। ২) ত্রিভুজে $^nC_3 - ^pC_3$ প্রয়োগ করুন।",
        "startIndex": 8,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0647",
            "question": "‘DIGITAL’ শব্দটির বর্ণগুলোকে মোট কত প্রকারে সাজানো যাবে যেখানে স্বরবর্ণগুলি (Vowels) সর্বদা একত্রে থাকবে? [JnU'14-15]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "60"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "100"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "120"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "40"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": DIGITAL শব্দে স্বরবর্ণ: I, I, A (3 টি)\r\n$\\therefore$ বিন্যাস সংখ্যা: $5! \\times \\frac{3!}{2!} = 360$",
            "university": "JnU",
            "year": "14-15",
            "topic": "T-04: কতগুলো বস্তু এবং বর্ণ একত্রে বা একত্রে না রেখে বিন্যাস সংক্রান্ত"
          },
          {
            "id": "math-q-0648",
            "question": "ENGINEERING শব্দটির বর্ণগুলোকে যত প্রকারে সাজানো যায় তার কতগুলোতে স্বরবর্ণগুলো একত্রে থাকবে? [RU'14-15]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{7!5!}{3!2!}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{7!5!}{3!3!2!2!}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{8!3!}{3!2!}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{6!5!}{3!3!2!2!}$"
              }
            ],
            "answer": "b",
            "explanation": "Sol\": E, E, E, I, I, N, N, N; G, G, R: $\\frac{7!}{3!2!} \\times \\frac{5!}{3!2!}$",
            "university": "RU",
            "year": "14-15",
            "topic": "T-04: কতগুলো বস্তু এবং বর্ণ একত্রে বা একত্রে না রেখে বিন্যাস সংক্রান্ত"
          },
          {
            "id": "math-q-0649",
            "question": "JAGANNATH শব্দটির বর্ণগুলোকে ‘দুটি N পূর্বের জায়গায় সর্বদা থাকবে’ – এই শর্তে কতভাবে বিন্যস্ত করা যায়? [JnU'17-18]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$7!$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{7!}{3!}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{7!}{2!}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{9!}{2!3!}$"
              }
            ],
            "answer": "b",
            "explanation": "Sol\": এক্ষেত্রে উভয় পাশের 7 টি gap পূরণ করতে হবে যার 3 টি একই বর্ণ, কাজেই $\\frac{7!}{3!}$ টি উপায়ে।",
            "university": "JnU",
            "year": "17-18",
            "topic": "T-05: কোন কিছু অবস্থান পরিবর্তন করবে না সংক্রান্ত"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0650",
            "question": "‘BANGLADESH’ শব্দটিকে DESH এর অবস্থান পরিবর্তন না করে কতভাবে সাজানো যাবে? [JnU'16-17]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "720"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "360"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "2520"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "60480"
              }
            ],
            "answer": "b",
            "explanation": "Sol\": $\\frac{6!}{2!} = 360$",
            "university": "JnU",
            "year": "16-17",
            "topic": "T-05: কোন কিছু অবস্থান পরিবর্তন করবে না সংক্রান্ত",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "বৃত্তাকার বিন্যাসে কেন $(n-1)!$ হয়?",
        "description": "রৈখিক বিন্যাসে $n!$ হলেও গোল টেবিলে ১ বিয়োগ যাওয়ার নিখুঁত যুক্তি।",
        "promptQuery": "বৃত্তাকার বিন্যাসে কেন ১টি উপাদান স্থির ধরে $(n-1)!$ করা হয় তা সহজ উপমা দিয়ে বুঝিয়ে দাও।"
      },
      {
        "title": "পাশাপাশি না থাকার ক্ষেত্রে Gap Method বনাম বিয়োগ পদ্ধতি",
        "description": "কখন বিয়োগ পদ্ধতি ব্যর্থ হয় এবং কেন গ্যাপ মেথড সর্বজনীন?",
        "promptQuery": "৩ বা ততোধিক উপাদান পাশাপাশি না থাকার প্রশ্নে কেন বিয়োগ পদ্ধতি কাজ করে না এবং গ্যাপ মেথডের কৌশল কী?"
      },
      {
        "title": "$^nC_r$ এর প্যাসকেল অভেদ প্রমাণ ($^nC_r + ^nC_{r-1} = ^{n+1}C_r$)",
        "description": "প্যাসকেলের ত্রিভুজের মূল গাণিতিক সূত্রের বীজগণিতীয় প্রমাণ।",
        "promptQuery": "প্রমাণ করো যে $^nC_r + ^nC_{r-1} = ^{n+1}C_r$ এবং ভর্তি পরীক্ষায় এর প্রয়োগ দেখাও।"
      },
      {
        "title": "জ্যামিতিক সমাবেশে সামান্তরিক ও কর্ণের গভীর বিশ্লেষণ",
        "description": "কেন বহুভুজের কর্ণ সংখ্যা $^nC_2 - n$ হয়?",
        "promptQuery": "বহুভুজের কর্ণ সংখ্যার সূত্র $\\frac{n(n-3)}{2}$ সমাবেশ তত্ত্ব দিয়ে প্রমাণ করো।"
      },
      {
        "title": "বিন্যাস ও সমাবেশের শীর্ষ ৩টি নেগেটিভ মার্কিং ফাঁদ",
        "description": "অন্তর্ভুক্তি-বর্জন ও পুনরাবৃত্তির সাধারণ ভুলগুলো যেভাবে এড়াবেন।",
        "promptQuery": "বিন্যাস ও সমাবেশ অধ্যায়ে ভর্তি পরীক্ষার সবচেয়ে বিভ্রান্তিকর ৩টি ফাঁদ প্রশ্ন বিশ্লেষণ করো।"
      }
    ],
    "questionCount": 129
  },
  {
    "id": "ch-trig-ratio",
    "paper": "First-Paper",
    "paperBn": "১ম পত্র",
    "chapterNum": 6,
    "nameBn": "ত্রিকোণমিতিক অনুপাত",
    "nameEn": "Trigonometric Ratios",
    "rawName": "ত্রিকোণমিতিক অনুপাত",
    "summary": "উচ্চতর গণিত ১ম পত্রের ত্রিকোণমিতির ভিত্তি অধ্যায়। রেডিয়ান ও ডিগ্রির সম্পর্ক, বৃত্তচাপ ($s=r\theta$), এবং চতুর্ভাগীয় কোণের চিহ্ন ও রূপান্তর থেকে বেসিক ও ট্রিকি প্রশ্ন ভর্তি পরীক্ষায় প্রায়ই আসে।",
    "topics": [
      "কোণ পরিমাপ — ডিগ্রি ও রেডিয়ান",
      "বৃত্তচাপ ও ক্ষেত্রফল ($s=r\\theta$)",
      "চতুর্ভাগীয় চিহ্ন ও সহযোগী কোণ",
      "মৌলিক ত্রিকোণমিতিক রূপান্তর"
    ],
    "concepts": [
      {
        "id": "c-trig-01",
        "title": "বৃত্তচাপ, কেন্দ্রস্থ কোণ ও বৃত্তকলা ($s = r\\theta$ & Sector Area)",
        "topic": "বৃত্তচাপ ও ক্ষেত্রফল ($s=r\\theta$)",
        "summary": "বৃত্তচাপের দৈর্ঘ্য, চাকার ঘূর্ণন ও দূরত্বের হিসাব এবং কোণ রেডিয়ানে নেওয়ার শর্ত।",
        "intro": {
          "what": "বৃত্তের ব্যাসার্ধ $r$ এবং কেন্দ্রস্থ কোণ $\\theta$ (রেডিয়ানে) হলে বৃত্তচাপের দৈর্ঘ্য $s = r\\theta$ এবং বৃত্তকলার ক্ষেত্রফল $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}rs$।",
          "whyImportant": "ঘড়ির কাঁটার মধ্যবর্তী কোণ এবং চাকার আবর্তন সংক্রান্ত প্রশ্ন ইঞ্জিনিয়ারিং ও ভার্সিটিতে নিয়মিত আসে।",
          "whereUsed": "জ্যোতির্বিদ্যায় দূরবর্তী নক্ষত্রের কোণিক দূরত্ব পরিমাপে ও রোবটিক গিয়ার সিস্টেমে।",
          "prerequisites": "ডিগ্রি হতে রেডিয়ান রূপান্তর ($1^\\circ = \\frac{\\pi}{180}$ rad)।"
        },
        "easyExplanation": [
          "সবচেয়ে বড় সতর্কবার্তা: $s = r\\theta$ সূত্রে $\\theta$ কে অবশ্যই রেডিয়ান এককে প্রকাশ করতে হবে! ডিগ্রিতে রাখলে পুরো অঙ্ক ভুল হবে।",
          "ঘড়ির কাঁটার মধ্যবর্তী কোণের চমৎকার শর্টকাট: $\\theta = |30H - 5.5M|$। যদি মান $180^\\circ$ এর বেশি হয়, তবে প্রবৃদ্ধ কোণ এড়াতে $360^\\circ$ থেকে বিয়োগ করতে হয়।"
        ],
        "formulas": [
          {
            "latex": "s = r\\theta \\quad (\\theta \\text{ অবশ্যই রেডিয়ানে})",
            "name": "বৃত্তচাপের দৈর্ঘ্য সূত্র",
            "meaning": "$r$ ব্যাসার্ধের বৃত্তে $\\theta$ কেন্দ্রস্থ কোণ দ্বারা খণ্ডিত বৃত্তচাপের দৈর্ঘ্য।",
            "whenToUse": "চাপের দৈর্ঘ্য বা চাকার ঘূর্ণন দূরত্ব নির্ণয়ে।",
            "conditions": "$\\theta$ রেডিয়ান এককে হতে হবে।",
            "variables": "$s$: বৃত্তচাপ, $r$: ব্যাসার্ধ, $\\theta$: কেন্দ্রস্থ কোণ (rad)।",
            "commonMistakes": "ডিগ্রি কোণ সরাসরি গুণ করে দেওয়া।"
          },
          {
            "latex": "\\theta = \\left|30H - \\frac{11}{2}M\\right|^\\circ = |30H - 5.5M|^\\circ",
            "name": "ঘড়ির কাঁটার মধ্যবর্তী কোণের শর্টকাট",
            "meaning": "$H$ টা $M$ মিনিটে ঘণ্টার কাঁটা ও মিনিটের কাঁটার মধ্যবর্তী কোণ।",
            "whenToUse": "ঘড়ির সময় দেওয়া থাকলে কাঁটা দুটির মধ্যবর্তী কোণ ৩০ সেকেন্ডে বের করতে।",
            "conditions": "ফলাফল $> 180^\\circ$ হলে $360^\\circ - \\theta$ নিতে হবে।",
            "variables": "$H$: ঘণ্টা ($1-12$), $M$: মিনিট ($0-59$)।",
            "commonMistakes": "পরমমান না নেওয়া এবং $180^\\circ$ এর চেয়ে বড় মান রেখে দেওয়া।"
          }
        ],
        "analysis": {
          "conditions": "চাকা একবার পূর্ণ ঘুরলে অতিক্রান্ত দূরত্ব পরিধির সমান: $d = 2\\pi r$। $n$ বার ঘুরলে মোট দূরত্ব $S = 2\\pi r n$।",
          "variations": "বৃত্তকলার ক্ষেত্রফল: $A = \\frac{1}{2}r^2\\theta$ (বর্গ একক)।",
          "relationships": "বৃত্তের পরিধি $2\\pi r$ হলো $\\theta = 2\\pi$ রেডিয়ানের জন্য $s = r(2\\pi)$।",
          "transformations": "ডিগ্রি থেকে রেডিয়ান: $\\theta_{\\text{rad}} = \\theta^\\circ \\times \\frac{\\pi}{180}$।",
          "misunderstandings": "শিক্ষার্থীরা ঘড়ির কাঁটার কোণ বের করতে সাধারণ ঐকিক নিয়ম করতে গিয়ে ৩ মিনিট নষ্ট করে, অথচ শর্টকাটে ৫ সেকেন্ডেই উত্তর আসে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "ঘড়ির কাঁটার মধ্যবর্তী কোণ নির্ণয়",
            "recognition": "প্রশ্নে সময় বলা থাকবে (যেমন ২টা ১৫ মিনিট, ৮টা ২০ মিনিট)।",
            "requiredConcept": "$|30H - 5.5M|$ শর্টকাট সূত্র।",
            "strategy": "সরাসরি $H$ এবং $M$ বসিয়ে হিসাব করুন।",
            "keySteps": [
              "$H$ ও $M$ চিহ্নিত করা",
              "সূত্রে মান বসানো",
              "পরমমান নেওয়া"
            ],
            "commonTraps": "প্রবৃদ্ধ কোণ অপশনে না থাকলে $360^\\circ$ থেকে বিয়োগ না করা।"
          }
        ],
        "easyExample": {
          "problem": "একটি বৃত্তের ব্যাসার্ধ $7$ সেমি হলে $60^\\circ$ কেন্দ্রস্থ কোণ দ্বারা উৎপন্ন চাপের দৈর্ঘ্য কত?",
          "solutionSteps": [
            "কোণটিকে রেডিয়ানে রূপান্তর করি: $\\theta = 60^\\circ = 60 \\times \\frac{\\pi}{180} = \\frac{\\pi}{3}$ রেডিয়ান।",
            "চাপের দৈর্ঘ্য: $s = r\\theta = 7 \\times \\frac{\\pi}{3} = \\frac{7\\pi}{3} \\approx 7.33$ সেমি।"
          ],
          "answer": "$\\frac{7\\pi}{3}$ সেমি"
        },
        "examExample": {
          "examTag": "DU / RU Admission",
          "problem": "২টা ১৫ মিনিটে ঘণ্টার কাঁটা ও মিনিটের কাঁটার মধ্যবর্তী কোণ কত ডিগ্রি?",
          "recognitionApproach": "ঘড়ির শর্টকাট সূত্র: $\\theta = |30H - 5.5M|$। এখানে $H = 2, M = 15$।",
          "stepByStepSolution": "১) $\\theta = |30(2) - 5.5(15)|$।\n২) $30 \\times 2 = 60$ এবং $5.5 \\times 15 = 82.5$।\n৩) $\\theta = |60 - 82.5| = |-22.5| = 22.5^\\circ = 22\\frac{1}{2}^\\circ$।",
          "whyItWorks": "মিনিটের কাঁটা প্রতি মিনিটে $6^circ$ এবং ঘণ্টার কাঁটা প্রতি মিনিটে $0.5^circ$ ঘোরে। তাদের আপেক্ষিক গতি $5.5^circ$/মিনিট।",
          "calcAvoidanceTrick": "$|60 - 82.5| = 22.5^\\circ$ মুখে মুখে হিসাব।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$s = r\\theta$ (rad)",
            "$A = \\frac{1}{2}r^2\\theta$",
            "ঘড়ির কোণ: $|30H - 5.5M|$"
          ],
          "importantConditions": [
            "$\\theta$ কে অবশ্যই রেডিয়ানে নিতে হবে।"
          ],
          "keyObservations": [
            "চাকা $n$ বার ঘুরলে দূরত্ব $S = 2\\pi r n$।"
          ],
          "recognitionTips": [
            "ঘড়ির কাঁটা দেখলেই $|30H - 5.5M|$।"
          ],
          "commonMistakes": [
            "$s = r\\theta$ তে ডিগ্রি মান বসানো।"
          ],
          "summary": "চাপ $s = r\\theta$ (রেডিয়ানে)। ঘড়ির কাঁটার কোণ $|30H - 5.5M|$।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "বৃত্তচাপ ও ঘড়ির কাঁটার কোণ নির্ণয়",
        "description": "বৃত্তচাপের দৈর্ঘ্য, চাকার ঘূর্ণন দূরত্ব এবং ঘড়ির কাঁটার মধ্যবর্তী কোণ।",
        "solvingStrategy": "১) কোণ রেডিয়ানে নিয়ে $s=r\\theta$ প্রয়োগ করুন। ২) ঘড়ির প্রশ্নে $|30H - 5.5M|$ ব্যবহার করুন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0768",
            "question": "একটি ত্রিভুজের দুটি কোণ যথাক্রমে $72^\\circ 53' 51''$ এবং $37^\\circ 6' 9''$ হলে তৃতীয় কোণটির মান রেডিয়ানে কত?\r\n[JU'18-19]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{\\pi}{18}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{5\\pi}{18}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{7\\pi}{18}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{11\\pi}{18}$"
              }
            ],
            "answer": "a",
            "explanation": "Sol$: x = 180^\\circ - 72^\\circ 53' 51'' - 37^\\circ 6' 9'' = 70^\\circ$\r\n$= \\frac{70\\pi}{180} = \\frac{7\\pi}{18}$\r\n\r\nএকাডেমিক এন্ড এডমিশন কেয়ার ১২৭ পরিবর্তনের প্রত্যয়ে নিভুল পথচলা...",
            "university": "JU",
            "year": "18-19",
            "topic": "T-01: কোণের একক পরিবর্তন সংক্রান্ত"
          },
          {
            "id": "math-q-0769",
            "question": "$\\sec x$ ফাংশনটির মৌলিক পর্যায় কত? [JU'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{\\pi}{2}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{\\pi}{3}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$2\\pi$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\pi$"
              }
            ],
            "answer": "c",
            "explanation": "",
            "university": "JU",
            "year": "24-25",
            "topic": "T-04: মৌলিক পর্যায় নির্ণয়"
          },
          {
            "id": "math-q-0770",
            "question": "টেনজেন্ট ফাংশনের মৌলিক পর্যায় কোনটি? [Agri. Guccho'19-20]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{\\pi}{2}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\pi$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$2\\pi$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{3\\pi}{2}$"
              }
            ],
            "answer": "b",
            "explanation": "Sol\": $\\tan \\theta$ এবং $\\cot \\theta$ এর মৌলিক পর্যায় = $\\pi$ এবং $\\sin \\theta, \\cos \\theta, \\sec \\theta, \\csc \\theta$ এর মৌলিক পর্যায় = $2\\pi$",
            "university": "Admission",
            "year": "",
            "topic": "T-04: মৌলিক পর্যায় নির্ণয়"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0771",
            "question": "$\\sin \\theta$ অনুপাতের নিয়মিত ব্যবধান কোনটি? [JU'17-18]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{\\pi}{2}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\pi$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$0$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$2\\pi$"
              }
            ],
            "answer": "d",
            "explanation": "",
            "university": "JU",
            "year": "17-18",
            "topic": "T-04: মৌলিক পর্যায় নির্ণয়",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "ঘড়ির কাঁটার মধ্যবর্তী কোণের শর্টকাটের প্রমাণ",
        "description": "কেন প্রতি মিনিটে ঘণ্টার কাঁটা $0.5^\\circ$ এবং মিনিটের কাঁটা $6^\\circ$ অগ্রসর হয়?",
        "promptQuery": "ঘড়ির কাঁটার মধ্যবর্তী কোণের সূত্র $|30H - 5.5M|$ এর পেছনের গাণিতিক যুক্তি প্রমাণসহ বুঝিয়ে দাও।"
      },
      {
        "title": "রেডিয়ান কেন একটি ধ্রুব কোণ?",
        "description": "বৃত্তের আকারের উপর নির্ভর না করে রেডিয়ান কেন ধ্রুবক থাকে তার জ্যামিতিক প্রমাণ।",
        "promptQuery": "প্রমাণ করো যে এক রেডিয়ান একটি ধ্রুব কোণ ($1 \\text{ rad} = \\frac{180^\\circ}{\\pi}$)।"
      },
      {
        "title": "চতুর্ভাগভিত্তিক সহযোগী কোণ রূপান্তরের জোড়-বিজোড় নিয়ম",
        "description": "$n\\cdot \\frac{\\pi}{2} \\pm \\theta$ এর ক্ষেত্রে $n$ জোড় বা বিজোড় হলে কী ঘটে?",
        "promptQuery": "ত্রিকোণমিতিক কোণ রূপান্তরের ক্ষেত্রে $n\\frac{\\pi}{2}$ এর জোড়-বিজোড় নিয়ম ও চিহ্নের ছক ব্যাখ্যা করো।"
      },
      {
        "title": "চাকার ঘূর্ণন ও আবর্তন সংখ্যা সংক্রান্ত সমস্যা",
        "description": "এক কিলোমিটার যেতে চাকার ঘূর্ণন সংখ্যা গণনার দ্রুত কৌশল।",
        "promptQuery": "গাড়ির চাকার ব্যাসার্ধ ও গতিবেগ হতে প্রতি মিনিটে ঘূর্ণন সংখ্যা নির্ণয়ের পদ্ধতি উদাহরণসহ দেখাও।"
      },
      {
        "title": "ত্রিকোণমিতিক অনুপাত অধ্যায়ের ভর্তি পরীক্ষা ফাঁদ",
        "description": "ডিগ্রি-রেডিয়ান বিভ্রান্তি এবং প্রবৃদ্ধ কোণের ভুল।",
        "promptQuery": "ত্রিকোণমিতির মৌলিক অনুপাত অধ্যায়ে ভর্তি পরীক্ষার শীর্ষ ৩টি ট্রিকি প্রশ্ন সমাধানসহ বিশ্লেষণ করো।"
      }
    ],
    "questionCount": 69
  },
  {
    "id": "ch-compound-angles",
    "paper": "First-Paper",
    "paperBn": "১ম পত্র",
    "chapterNum": 7,
    "nameBn": "সংযুক্ত ও যৌগিক কোণের ত্রিকোণমিতিক অনুপাত",
    "nameEn": "Trigonometric Ratios of Associated & Compound Angles",
    "rawName": "সংযুক্ত ও যৌগিক কোণের ত্রিকোণমিতিক অনুপাত",
    "summary": "এইচএসসি ১ম পত্রের অন্যতম বৃহৎ ত্রিকোণমিতি অধ্যায়। যৌগিক কোণ ($sin(Apm B)$), রূপান্তর সূত্র, গুণিতক কোণ ($2A, 3A$), এবং ত্রিভুজের সাইন-কোসাইন সূত্র থেকে প্রতিবছর বিশ্ববিদ্যালয় ভর্তি পরীক্ষায় বহু প্রশ্ন আসে।",
    "topics": [
      "যৌগিক কোণের অনুপাত ($sin(Apm B)$)",
      "গুণফল ও যোগফলের রূপান্তর সূত্র",
      "গুণিতক ও উপগুণিতক কোণ ($2A, A/2$)",
      "ত্রিভুজের সাইন ও কোসাইন সূত্র"
    ],
    "concepts": [
      {
        "id": "c-compound-01",
        "title": "গুণিতক কোণ ও রূপান্তর শর্টকাট (Multiple Angles & Fast Transformations)",
        "topic": "গুণিতক ও উপগুণিতক কোণ ($2A, A/2$)",
        "summary": "$cos 2A, sin 2A, \tan 2A$ এর রূপান্তর, বর্গ অপনয়ন এবং ক্যালকুলেশন শর্টকাট।",
        "intro": {
          "what": "গুণিতক কোণ হলো মূল কোণ $A$ এর পূর্ণসংখ্যক গুণিতক ($2A, 3A$ ইত্যাদি)। এর সূত্রাবলি ত্রিকোণমিতিক বর্গের ঘাত হ্রাস করতে এবং ইন্টিগ্রেশন ও ডিফারেন্সিয়েশনে সবচেয়ে বেশি ব্যবহৃত হয়।",
          "whyImportant": "$1 - cos 2A = 2sin^2 A$ এবং $1 + cos 2A = 2cos^2 A$ হলো পুরো ক্যালকুলাস ও ত্রিকোণমিতির সবচেয়ে বেশি ব্যবহৃত দুটি সূত্র।",
          "whereUsed": "সিগন্যাল প্রসেসিংয়ে ফ্রিকোয়েন্সি দ্বিগুণকরণ এবং অল্টারনেটিং কারেন্ট (AC) সার্কিটে পাওয়ার গণনায়।",
          "prerequisites": "যৌগিক কোণের সূত্রাবলি ($cos(A+B)$)।"
        },
        "easyExplanation": [
          "মনে রাখার সেরা ট্রিক: \"মাইনাসে সাইন, প্লাসে কস\"। অর্থাৎ $1 - cos 2A = 2sin^2 A$ (মাঝে মাইনাস থাকলে সাইন স্কয়ার) এবং $1 + cos 2A = 2cos^2 A$ (মাঝে প্লাস থাকলে কস স্কয়ার)।",
          "ভাগ করলে সরাসরি পাওয়া যায়: $\\frac{1 - \\cos 2A}{1 + \\cos 2A} = \\frac{2\\sin^2 A}{2\\cos^2 A} = \\tan^2 A$। এটি ভর্তি পরীক্ষার একাধিক অংকে সরাসরি অপশন মেলাতে সাহায্য করে।"
        ],
        "formulas": [
          {
            "latex": "1 - \\cos 2A = 2\\sin^2 A, \\quad 1 + \\cos 2A = 2\\cos^2 A",
            "name": "বর্গ রূপান্তরের গোল্ডেন সূত্র",
            "meaning": "কোণ দ্বিগুণ থেকে একে নেমে আসে এবং বর্গ তৈরি হয়।",
            "whenToUse": "বর্গমূল বা ভগ্নাংশ সরলীকরণে এবং ইন্টিগ্রেশনে।",
            "conditions": "যেকোনো কোণ $A$ এর জন্য সত্য।",
            "variables": "$A$: মূল কোণ।",
            "commonMistakes": "ডানপাশে ২ লিখতে ভুলে যাওয়া।"
          },
          {
            "latex": "\\sin 2A = 2\\sin A\\cos A = \\frac{2\\tan A}{1 + \\tan^2 A}",
            "name": "$\\sin 2A$ এর সূত্র",
            "meaning": "সাইন ও কসের গুণফল আকারে অথবা ট্যানের মাধ্যমে প্রকাশ।",
            "whenToUse": "সাইন ও কসের গুণফল থাকলে কোণ দ্বিগুণ করতে।",
            "conditions": "$A \\neq (2n+1)\\frac{\\pi}{2}$ ট্যানের রূপের জন্য।",
            "variables": "$A$: কোণ।",
            "commonMistakes": "ট্যানের সূত্রে হরে মাইনাস দেওয়া (হরে প্লাস থাকে)।"
          },
          {
            "latex": "\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}",
            "name": "$\\tan 2A$ এর সূত্র",
            "meaning": "ট্যানের কোণ দ্বিগুণ করার রূপান্তর।",
            "whenToUse": "ট্যান সংক্রান্ত সমীকরণ ও সরলীকরণে।",
            "conditions": "$\\tan^2 A \\neq 1$।",
            "variables": "$A$: কোণ।",
            "commonMistakes": "হরে প্লাস দেওয়া (প্লাস দিলে $\\sin 2A$ হয়)।"
          }
        ],
        "analysis": {
          "conditions": "উপগুণিতক কোণের ক্ষেত্রে কোণ অর্ধেক হয়ে যায়: $1 - \\cos A = 2\\sin^2(A/2)$।",
          "variations": "$\\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A = \\frac{1-\\tan^2 A}{1+\\tan^2 A}$।",
          "relationships": "ক্যালকুলাসে $\\int \\sin^2 x dx$ সরাসরি করা যায় না, তখন $\\frac{1-\\cos 2x}{2}$ রূপান্তর বাধ্যতামূলক।",
          "transformations": "$\\tan(45^\\circ + A) = \\frac{1+\\tan A}{1-\\tan A} = \\frac{\\cos A + \\sin A}{\\cos A - \\sin A}$।",
          "misunderstandings": "$\\sin 2A$ এর ট্যান রূপে হরে প্লাস, আর $\\tan 2A$ এর হরে মাইনাস—শিক্ষার্থীরা এই দুটি বিপরীত করে ফেলে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "ধারাবাহিক ত্রিকোণমিতিক গুণফল ($2^n$ শর্টকাট)",
            "recognition": "$\\cos 20^\\circ \\cos 40^\\circ \\cos 80^\\circ$ বা $\\sin 20^\\circ \\sin 40^\\circ \\sin 80^\\circ$ এর মান চাওয়া।",
            "requiredConcept": "$\\cos\\theta\\cos(60-\\theta)\\cos(60+\\theta) = \\frac{1}{4}\\cos 3\\theta$ এবং $\\sin$ এর ক্ষেত্রে $\\frac{1}{4}\\sin 3\\theta$।",
            "strategy": "সরাসরি $\\frac{1}{4}\\cos(3\\times 20^\\circ) = \\frac{1}{4}\\cos 60^\\circ = \\frac{1}{4} \\times \\frac{1}{2} = \\frac{1}{8}$।",
            "keySteps": [
              "$\\theta = 20^\\circ$ চিহ্নিত করা",
              "শর্টকাট সূত্রে বসানো",
              "মান বের করা"
            ],
            "commonTraps": "বড় করে ২ দিয়ে গুণ-ভাগ করে সময় নষ্ট করা।"
          }
        ],
        "easyExample": {
          "problem": "$\\frac{1 - \\cos 2A}{\\sin 2A}$ এর মান কত?",
          "solutionSteps": [
            "লবে সূত্র বসাই: $1 - \\cos 2A = 2\\sin^2 A$।",
            "হরে সূত্র বসাই: $\\sin 2A = 2\\sin A\\cos A$।",
            "ভগ্নাংশ: $\\frac{2\\sin^2 A}{2\\sin A\\cos A} = \\frac{\\sin A}{\\cos A} = \\tan A$।"
          ],
          "answer": "$\\tan A$"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "$\\cos 20^\\circ \\cos 40^\\circ \\cos 80^\\circ$ এর মান কত?",
          "recognitionApproach": "এটি স্ট্যান্ডার্ড $\\cos\\theta\\cos(60^\\circ-\\theta)\\cos(60^\\circ+\\theta)$ আকার যেখানে $\\theta = 20^\\circ$।",
          "stepByStepSolution": "১) শর্টকাট সূত্র: $\\cos\\theta \\cos(60^\\circ-\\theta) \\cos(60^\\circ+\\theta) = \\frac{1}{4}\\cos 3\\theta$।\n২) এখানে $\\theta = 20^\\circ$, তাই মান $= \\frac{1}{4}\\cos(3 \\times 20^\\circ) = \\frac{1}{4}\\cos 60^\\circ$।\n৩) আমরা জানি $\\cos 60^\\circ = \\frac{1}{2}$।\n৪) অতএব মান $= \\frac{1}{4} \\times \\frac{1}{2} = \\frac{1}{8}$।",
          "whyItWorks": "গুণিতক কোণ ও রূপান্তর সূত্রের মাধ্যমে তিনটি কসাইনের গুণফল সংকুচিত হয়ে একটি কসাইনে পরিণত হয়।",
          "calcAvoidanceTrick": "মনে রাখুন: ২০, ৪০, ৮০ কস থাকলে ১/৮; সাইন থাকলে $\\frac{\\sqrt{3}}{8}$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$1-\\cos 2A = 2\\sin^2 A$",
            "$1+\\cos 2A = 2\\cos^2 A$",
            "$\\cos\\theta\\cos(60-\\theta)\\cos(60+\\theta) = \\frac{1}{4}\\cos 3\\theta$"
          ],
          "importantConditions": [
            "মাইনাসে সাইন স্কয়ার, প্লাসে কস স্কয়ার।"
          ],
          "keyObservations": [
            "$\\tan(45^\\circ+A) = \\frac{\\cos A+\\sin A}{\\cos A-\\sin A}$।"
          ],
          "recognitionTips": [
            "২০, ৪০, ৮০ প্যাটার্ন দেখলেই $\\frac{1}{4}\\cos 3\\theta$।"
          ],
          "commonMistakes": [
            "$\\sin 2A$ আর $\\tan 2A$ এর ট্যান রূপের হর ওলটপালট করা।"
          ],
          "summary": "$1-\\cos 2A = 2\\sin^2 A$, $1+\\cos 2A = 2\\cos^2 A$। ২০-৪০-৮০ কস হলে মান ১/৮।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "গুণিতক কোণ ও রূপান্তর সংক্রান্ত সমস্যা",
        "description": "কোণ সংকোচন, বর্গ অপনয়ন ও ধারাবাহিক গুণফলের মান নির্ণয়।",
        "solvingStrategy": "১) বর্গ অপনয়নে $1\\pm\\cos 2A$ ব্যবহার করুন। ২) ২০-৪০-৮০ প্যাটার্নে $\\frac{1}{4}\\cos 3\\theta$ শর্টকাট প্রয়োগ করুন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0837",
            "question": "যদি $\\cos\\theta + \\sec\\theta = 2$ হয়, তবে $\\cos^{10}\\theta + \\sec^5\\theta$ এর মান হবে— [RU'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "2"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "-2"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "-1"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "1"
              }
            ],
            "answer": "a",
            "explanation": "**Solⁿ:** $\\cos\\theta + \\sec\\theta = 2 \\Rightarrow \\cos\\theta + \\frac{1}{\\cos\\theta} = 2$\r\n$\\Rightarrow \\cos^2\\theta - 2\\cos\\theta + 1 = 0$\r\n$\\Rightarrow (\\cos\\theta - 1)^2 = 0 \\Rightarrow \\cos\\theta = 1$ এবং $\\sec\\theta = 1$\r\n$\\therefore \\cos^{10}\\theta + \\sec^5\\theta = 1^{10} + 1^5 = 1 + 1 = 2$",
            "university": "RU",
            "year": "24-25",
            "topic": "Chapter 07: সংযুক্ত ও যৌগিক কোণের ত্রিকোণমিতিক অনুপাত"
          },
          {
            "id": "math-q-0838",
            "question": "$\\tan\\left(19\\frac{\\pi}{2} - \\theta\\right)$ এর মান কত? [COU'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{1}{\\sqrt{3}}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{\\sqrt{3}}{2}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{1}{2}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\sqrt{3}$"
              }
            ],
            "answer": "a",
            "explanation": "**Solⁿ:** $\\tan\\left(19\\frac{\\pi}{2} - \\theta\\right) = \\cot\\frac{\\pi}{6} = \\sqrt{3}$",
            "university": "COU",
            "year": "24-25",
            "topic": "Chapter 07: সংযুক্ত ও যৌগিক কোণের ত্রিকোণমিতিক অনুপাত"
          },
          {
            "id": "math-q-0839",
            "question": "$\\sin 150^\\circ$ এর মান কোনটি? [HSTU'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$-\\frac{1}{2}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{1}{2}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$-\\frac{\\sqrt{3}}{2}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{1}{\\sqrt{2}}$"
              }
            ],
            "answer": "a",
            "explanation": "**Solⁿ:** $\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$",
            "university": "HSTU",
            "year": "24-25",
            "topic": "Chapter 07: সংযুক্ত ও যৌগিক কোণের ত্রিকোণমিতিক অনুপাত"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0840",
            "question": "$x$ সূক্ষ্মকোণ ও $\\sin x = \\frac{3}{5}$ হলে, $\\cos x$ এর মান কত? [HSTU'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{5}{4}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{4}{3}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{5}{3}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{4}{5}$"
              }
            ],
            "answer": "a",
            "explanation": "**Solⁿ:** $x$ সূক্ষ্মকোণ হলে, $\\cos x > 0$\r\n$\\cos x = \\sqrt{1 - \\sin^2 x} = \\sqrt{1 - \\left(\\frac{3}{5}\\right)^2} = \\frac{4}{5}$",
            "university": "HSTU",
            "year": "24-25",
            "topic": "Chapter 07: সংযুক্ত ও যৌগিক কোণের ত্রিকোণমিতিক অনুপাত",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "$\\cos 20^\\circ \\cos 40^\\circ \\cos 80^\\circ = 1/8$ এর বিশদ প্রমাণ",
        "description": "কেন এই তিনটি কোণের গুণফল হুবহু ১/৮ হয় তার ধাপে ধাপে গাণিতিক প্রমাণ।",
        "promptQuery": "প্রমাণ করো যে $\\cos 20^\\circ \\cos 40^\\circ \\cos 80^\\circ = \\frac{1}{8}$ এবং সাধারণ সূত্রটি প্রতিপাদন করো।"
      },
      {
        "title": "ত্রিভুজের সাইন সূত্র ও পরিব্যাসার্ধ ($R$)",
        "description": "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$ এর জ্যামিতিক তাৎপর্য।",
        "promptQuery": "ত্রিভুজের সাইন সূত্রের প্রমাণ এবং কেন অনুপাতটি পরিবৃত্তের ব্যাসের ($2R$) সমান হয় তা ব্যাখ্যা করো।"
      },
      {
        "title": "ত্রিভুজের কোসাইন সূত্র ও বাহু-কোণ সম্পর্ক",
        "description": "বাহুগুলোর মাধ্যমে কোণ বের করার সূত্র এবং এর ভেক্টর প্রমাণ।",
        "promptQuery": "ত্রিভুজের কোসাইন সূত্র $\\cos A = \\frac{b^2+c^2-a^2}{2bc}$ এর ভেক্টর ডট গুণন প্রমাণ বুঝিয়ে দাও।"
      },
      {
        "title": "সংযুক্ত কোণ অধ্যায়ের শীর্ষ ভর্তি পরীক্ষা শর্টকাট",
        "description": "ডিগ্রি কোণ প্রতিস্থাপন করে অপশন টেস্টের কৌশল।",
        "promptQuery": "ত্রিকোণমিতিক অভেদ সংক্রান্ত প্রশ্নে বিশেষ কোণ বসিয়ে অপশন টেস্ট করার টেকনিক আলোচনা করো।"
      },
      {
        "title": "ত্রিকোণমিতির সাধারণ ৩টি মারাত্মক ভুল",
        "description": "চতুর্ভাগীয় চিহ্ন এবং বিপরীত ফাংশনের ডোমেন ভুল।",
        "promptQuery": "ত্রিকোণমিতির যৌগিক ও গুণিতক কোণের প্রশ্নে ভর্তি পরীক্ষায় ছাত্রছাত্রীদের সবচেয়ে বেশি হওয়া ৩টি ভুল আলোচনা করো।"
      }
    ],
    "questionCount": 142
  },
  {
    "id": "ch-functions",
    "paper": "First-Paper",
    "paperBn": "১ম পত্র",
    "chapterNum": 8,
    "nameBn": "ফাংশন ও ফাংশনের লেখচিত্র",
    "nameEn": "Functions & Graphs",
    "rawName": "ফাংশন ও ফাংশনের লেখচিত্র",
    "summary": "উচ্চতর গণিত ১ম পত্রের অন্যতম মৌলিক অধ্যায়। ডোমেন ও রেঞ্জ নির্ণয়, এক-এক ও সার্বিক ফাংশন যাচাই, বিপরীত ফাংশন ($f^{-1}$) নির্ণয়ের শর্টকাট এবং সংযোজিত ফাংশন ($fcirc g$) থেকে বিশ্ববিদ্যালয় পরীক্ষায় প্রচুর প্রশ্ন আসে।",
    "topics": [
      "ফাংশনের সংজ্ঞা ও ডোমেন-রেঞ্জ",
      "এক-এক ও সার্বিক ফাংশন",
      "বিপরীত ফাংশন ও শর্টকাট",
      "সংযোজিত ও পর্যায়বৃত্ত ফাংশন",
      "লেখচিত্রের রূপান্তর"
    ],
    "concepts": [
      {
        "id": "c-func-01",
        "title": "ডোমেন ও রেঞ্জ এবং বিপরীত ফাংশনের শর্টকাট (Domain, Range & Inverse Function)",
        "topic": "বিপরীত ফাংশন ও শর্টকাট",
        "summary": "ভগ্নাংশ ও বর্গমূলের ডোমেন-রেঞ্জ নির্ণয় এবং রৈখিক ভগ্নাংশের বিপরীত ফাংশন ৩ সেকেন্ডে বের করার টেকনিক।",
        "intro": {
          "what": "ডোমেন হলো স্বাধীন চলক $x$ এর সকল বাস্তব মানের সেট যার জন্য ফাংশন $f(x)$ বাস্তব ও সংজ্ঞায়িত হয়। রেঞ্জ হলো ডোমেনের অধীনে $f(x)$ এর সকল মানের সেট। বিপরীত ফাংশন হলো মূল ফাংশনের ইনপুট-আউটপুট অদলবদল।",
          "whyImportant": "রৈখিক ভগ্নাংশ $f(x) = \\frac{ax+b}{cx+d}$ এর ডোমেন, রেঞ্জ এবং ইনভার্স ফাংশন থেকে প্রতিবছর ভর্তি পরীক্ষায় অন্তত একটি প্রশ্ন নিশ্চিত আসে।",
          "whereUsed": "মেশিন লার্নিংয়ে অ্যাক্টিভেশন ফাংশন, ডাটা ট্রান্সফর্মেশন ও সিগন্যাল রিভার্সাল।",
          "prerequisites": "বাস্তব সংখ্যার ব্যবধি ও রৈখিক সমীকরণ সমাধান।"
        },
        "easyExplanation": [
          "ভগ্নাংশের ক্ষেত্রে হর কখনোই শূন্য হতে পারবে না ($cx+d \\neq 0$), তাই ডোমেন $= \\mathbb{R} - \\{-d/c\\}$।",
          "রৈখিক ভগ্নাংশের রেঞ্জ হলো $x$ এর সহগদ্বয়ের অনুপাত ব্যতীত বাকি সব বাস্তব সংখ্যা: রেঞ্জ $= \\mathbb{R} - \\{a/c\\}$।",
          "বিপরীত ফাংশনের ৩ সেকেন্ডের শর্টকাট: $f(x) = \\frac{ax+b}{cx+d}$ হলে এর বিপরীত ফাংশন হবে $f^{-1}(x) = \\frac{-dx+b}{cx-a}$। অর্থাৎ প্রধান কর্ণের সহগদ্বয় ($a$ ও $d$) স্থান বদল করবে এবং তাদের চিহ্ন পরিবর্তন হবে!"
        ],
        "formulas": [
          {
            "latex": "f(x) = \\frac{ax+b}{cx+d} \\implies D_f = \\mathbb{R} - \\left\\{-\\frac{d}{c}\\right\\}, \\quad R_f = \\mathbb{R} - \\left\\{\\frac{a}{c}\\right\\}",
            "name": "রৈখিক ভগ্নাংশের ডোমেন ও রেঞ্জ শর্টকাট",
            "meaning": "ডোমেনের জন্য হর $\\neq 0$, রেঞ্জের জন্য $x$ এর সহগ অনুপাত বাদ।",
            "whenToUse": "যেকোনো একঘাত ভগ্নাংশ ফাংশনের ডোমেন ও রেঞ্জ দ্রুত নির্ণয়ে।",
            "conditions": "$c \\neq 0$ এবং $ad - bc \\neq 0$।",
            "variables": "$a, b, c, d$: ধ্রুবক।",
            "commonMistakes": "রেঞ্জ বের করতে জটিল বিপরীত ফাংশন বের করার দীর্ঘ পদ্ধতি করা।"
          },
          {
            "latex": "f(x) = \\frac{ax+b}{cx+d} \\implies f^{-1}(x) = \\frac{-dx+b}{cx-a}",
            "name": "বিপরীত ফাংশন শর্টকাট",
            "meaning": "$a$ এবং $d$ নিজেদের স্থান ও চিহ্ন অদলবদল করে।",
            "whenToUse": "রৈখিক ভগ্নাংশের বিপরীত ফাংশন ৩ সেকেন্ডে বের করতে।",
            "conditions": "$f(x)$ এক-এক ও সার্বিক হতে হবে।",
            "variables": "$a, d$: কোণাকুণি প্রধান কর্ণের সহগ।",
            "commonMistakes": "$b$ ও $c$ এর চিহ্ন বদলানো (তাদের স্থান ও চিহ্ন অপরিবর্তিত থাকে)।"
          },
          {
            "latex": "f(x) = \\sqrt{a^2 - x^2} \\implies D_f = [-a, a], \\quad R_f = [0, a]",
            "name": "অর্ধবৃত্তাকার বর্গমূলের ডোমেন-রেঞ্জ",
            "meaning": "বর্গমূলের ভেতরের রাশি অঋণাত্মক হতে হবে এবং ফলাফল অঋণাত্মক।",
            "whenToUse": "$\\sqrt{a^2-x^2}$ আকারের ফাংশনে।",
            "conditions": "$a > 0$।",
            "variables": "$a$: ধ্রুবক।",
            "commonMistakes": "রেঞ্জে ঋণাত্মক মান অন্তর্ভুক্ত করা ($[-a, a]$ ভাবা)।"
          }
        ],
        "analysis": {
          "conditions": "বিপরীত ফাংশনের অস্তিত্বের একক শর্ত হলো ফাংশনটিকে অবশ্যই এক-এক এবং সার্বিক (Bijective) হতে হবে।",
          "variations": "যদি $f(x) = \\sqrt{x-3}$ হয়, তবে ডোমেন $[3, \\infty)$ এবং রেঞ্জ $[0, \\infty)$।",
          "relationships": "যেকোনো ফাংশনের ডোমেন হলো তার বিপরীত ফাংশনের রেঞ্জ: $D_f = R_{f^{-1}}$ এবং $R_f = D_{f^{-1}}$।",
          "transformations": "$f(f^{-1}(x)) = x$ এবং $f^{-1}(f(x)) = x$ (অভেদক ফাংশন)।",
          "misunderstandings": "$\\sqrt{9 - x^2}$ এর রেঞ্জ অনেকে $[-3, 3]$ লেখে, কিন্তু মূল বাস্তব চিহ্নের বর্গমূলের ফল কখনোই ঋণাত্মক হতে পারে না, তাই রেঞ্জ $[0, 3]$।"
        },
        "questionPatterns": [
          {
            "typeTitle": "রৈখিক ভগ্নাংশের বিপরীত ফাংশন নির্ণয়",
            "recognition": "প্রশ্নে $f(x) = \\frac{2x+1}{3x-4}$ দেওয়া থাকবে এবং $f^{-1}(x)$ জানতে চাইবে।",
            "requiredConcept": "বিপরীত ফাংশন শর্টকাট: $a$ ও $d$ এর স্থান ও চিহ্ন বদল।",
            "strategy": "সরাসরি শর্টকাট প্রয়োগ করুন: $2$ ও $-4$ স্থান ও চিহ্ন বদলে হবে $4$ ও $-2$।",
            "keySteps": [
              "$a$ ও $d$ চিহ্নিত করা",
              "স্থান ও চিহ্ন অদলবদল করা",
              "উত্তর মেলানো"
            ],
            "commonTraps": "চিহ্ন পরিবর্তনে ভুল করা।"
          }
        ],
        "easyExample": {
          "problem": "$f(x) = \\frac{2x+1}{3x-5}$ এর বিপরীত ফাংশন $f^{-1}(x)$ নির্ণয় করো।",
          "solutionSteps": [
            "এখানে $a = 2, b = 1, c = 3, d = -5$।",
            "শর্টকাট অনুসারে: $f^{-1}(x) = \\frac{-dx+b}{cx-a}$।",
            "$d = -5$ এর বিপরীত চিহ্ন হয়ে উপরে বসবে $+5x$।",
            "$a = 2$ এর বিপরীত চিহ্ন হয়ে নিচে বসবে $-2$।",
            "অতএব, $f^{-1}(x) = \\frac{5x+1}{3x-2}$।"
          ],
          "answer": "$f^{-1}(x) = \\frac{5x+1}{3x-2}$"
        },
        "examExample": {
          "examTag": "BUET / DU / GST Admission",
          "problem": "$f(x) = \\sqrt{16 - x^2}$ ফাংশনটির ডোমেন ও রেঞ্জ কত?",
          "recognitionApproach": "বর্গমূলের ভেতর ঋণাত্মক হতে পারবে না, তাই $16 - x^2 \\ge 0$।",
          "stepByStepSolution": "১) ডোমেন: $16 - x^2 \\ge 0 \\implies x^2 \\le 16 \\implies -4 \\le x \\le 4$। অতএব $D_f = [-4, 4]$।\n২) রেঞ্জ: $x = \\pm 4$ হলে মান সর্বনিম্ন $0$। $x = 0$ হলে মান সর্বোচ্চ $\\sqrt{16} = 4$।\n৩) বর্গমূলের মান সর্বদা অঋণাত্মক, তাই $R_f = [0, 4]$।",
          "whyItWorks": "এটি মূলত একটি অর্ধবৃত্তের সমীকরণ $x^2 + y^2 = 16$ যেখানে $y \\ge 0$।",
          "calcAvoidanceTrick": "$\\sqrt{a^2-x^2}$ দেখলেই ডোমেন $[-a, a]$, রেঞ্জ $[0, a]$ মুখস্থ উত্তর।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$\\frac{ax+b}{cx+d} \\implies f^{-1}(x) = \\frac{-dx+b}{cx-a}$",
            "ডোমেন: $\\mathbb{R}-\\{-d/c\\}$",
            "রেঞ্জ: $\\mathbb{R}-\\{a/c\\}$",
            "$\\sqrt{a^2-x^2} \\implies [0, a]$"
          ],
          "importantConditions": [
            "বর্গমূলের ভেতরের মান $\\ge 0$ হতে হবে।"
          ],
          "keyObservations": [
            "$D_f = R_{f^{-1}}$ এবং $R_f = D_{f^{-1}}$।"
          ],
          "recognitionTips": [
            "একঘাত ভগ্নাংশে $a$ ও $d$ এর স্থান-চিহ্ন বদলাও।"
          ],
          "commonMistakes": [
            "বর্গমূলের রেঞ্জে ঋণাত্মক মান দেওয়া।"
          ],
          "summary": "রৈখিক ভগ্নাংশের ডোমেন হর শূন্য বাদ, রেঞ্জ সহগ অনুপাত বাদ, ইনভার্সে কর্ণ স্থান ও চিহ্ন বদল।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "ডোমেন ও রেঞ্জ নির্ণয় সংক্রান্ত সমস্যা",
        "description": "ভগ্নাংশ, বর্গমূল ও লগারিদম ফাংশনের ডোমেন ও রেঞ্জ নির্ণয়।",
        "solvingStrategy": "১) হরের মান $\\neq 0$ ও বর্গমূল $\\ge 0$ শর্ত বসান। ২) রৈখিক ভগ্নাংশে সহগ অনুপাত বাদ দিয়ে রেঞ্জ নিন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0979",
            "question": "$f(x) = \\frac{2x+1}{2x-1}$ হলে, $\\frac{f(x)+1}{f(x)-1}$ এর মান কত? [BUP'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$x$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$2x$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$1$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$2$"
              }
            ],
            "answer": "a",
            "explanation": "Solⁿ: $f(x) = \\frac{2x+1}{2x-1}$\r\n$\\Rightarrow \\frac{f(x)+1}{f(x)-1} = \\frac{2x+1+2x-1}{2x-1-2x+1}$ [যোজন-বিয়োজন]\r\n$= \\frac{4x}{2} = 2x$",
            "university": "BUP",
            "year": "24-25",
            "topic": "T-01: সরাসরি ফাংশনের মান নির্ণয় সম্পর্কিত সমস্যা"
          },
          {
            "id": "math-q-0980",
            "question": "যদি $f(x) = 4^x$ হয়, তবে $f(x + 1) - f(x)$ এর মান কত হবে? [CU'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$2f(x)$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$4f(x)$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$3f(x)$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$4$"
              }
            ],
            "answer": "a",
            "explanation": "Solⁿ: $f(x) = 4^x$ হলে, $f(x+1) - f(x)$\r\n$= 4^{x+1} - 4^x = 4^x(4 - 1) = 3 \\cdot 4^x = 3f(x)$",
            "university": "CU",
            "year": "24-25",
            "topic": "T-01: সরাসরি ফাংশনের মান নির্ণয় সম্পর্কিত সমস্যা"
          },
          {
            "id": "math-q-0981",
            "question": "$f(x) = x + \\frac{1}{x}$ হলে, $f(x) - f\\left(\\frac{1}{x}\\right)$ এর মান কত? [RU'21-22]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$1$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{1}{x^2}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{1}{x}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$0$"
              }
            ],
            "answer": "a",
            "explanation": "Solⁿ: $f(x) = x + \\frac{1}{x}$ ... ... (i)\r\n$f\\left(\\frac{1}{x}\\right) = \\frac{1}{x} + x$ ... (ii)\r\n(i) - (ii) $\\Rightarrow f(x) - f\\left(\\frac{1}{x}\\right) = 0$",
            "university": "RU",
            "year": "21-22",
            "topic": "T-01: সরাসরি ফাংশনের মান নির্ণয় সম্পর্কিত সমস্যা"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0982",
            "question": "যদি $f(x) = \\log\\left(\\frac{x+1}{x-1}\\right)$ হয়, তবে $f\\left(\\frac{1}{x}\\right) =$ কত?\r\n[CU' 21-22]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\log\\frac{1+x}{1-x}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\log\\frac{x+1}{x+2}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\log\\frac{x+1}{x-1}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\log\\frac{1-x}{1+x}$"
              }
            ],
            "answer": "a",
            "explanation": "Sol$^n$: $f\\left(\\frac{1}{x}\\right) = \\log\\left(\\frac{\\frac{1}{x}+1}{\\frac{1}{x}-1}\\right) = \\log\\left(\\frac{1+x}{1-x}\\right)$",
            "university": "CU",
            "year": "21-22",
            "topic": "T-01: সরাসরি ফাংশনের মান নির্ণয় সম্পর্কিত সমস্যা",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "বিপরীত ফাংশন ও সংযোজিত ফাংশন ($f\\circ g$)",
        "description": "বিপরীত ফাংশন নির্ণয় ও ফাংশনের সংযোজন সংক্রান্ত সমস্যা।",
        "solvingStrategy": "১) রৈখিক ভগ্নাংশে $a$ ও $d$ এর স্থান ও চিহ্ন পরিবর্তন করুন। ২) $f(g(x))$ এ ভেতরের ফাংশন আগে বসান।",
        "startIndex": 5,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-0984",
            "question": "যদি $f(x) = x^2 - x$ হয়, তবে $f(x+1) = ?$ [JU'18-19]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$f(x)$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$f(-x)$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$2f(x)$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$1$"
              }
            ],
            "answer": "a",
            "explanation": "Sol$^n$: $f(x) = x^2 - x$\r\n$f(x+1) = (x+1)^2 - (x+1) = x^2 + 2x + 1 - x - 1 = x^2 + x = f(-x)$",
            "university": "JU",
            "year": "18-19",
            "topic": "T-01: সরাসরি ফাংশনের মান নির্ণয় সম্পর্কিত সমস্যা"
          },
          {
            "id": "math-q-0985",
            "question": "যদি $f(x) = \\frac{3x+4}{x-5}$ হয়, তবে $f\\left(\\frac{5}{3}\\right) = ?$\r\n[JU'18-19]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{13}{2}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$-\\frac{13}{2}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$-\\frac{15}{14}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{13}{2}$"
              }
            ],
            "answer": "a",
            "explanation": "Sol$^n$: $f\\left(\\frac{5}{3}\\right) = \\frac{3\\left(\\frac{5}{3}\\right)+4}{\\frac{5}{3}-5} = -\\frac{15}{14}$",
            "university": "JU",
            "year": "18-19",
            "topic": "T-01: সরাসরি ফাংশনের মান নির্ণয় সম্পর্কিত সমস্যা"
          },
          {
            "id": "math-q-0986",
            "question": "$f(x) = x - \\tan x$ হচ্ছে একটি— [RU'17-18]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "Odd function"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "Even function"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "Imaginary function"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "Complex function"
              }
            ],
            "answer": "a",
            "explanation": "Sol$^n$: $f(x) = -f(x)$ হলে, তাকে odd বা অযুগ্ম ফাংশন বলে।",
            "university": "RU",
            "year": "17-18",
            "topic": "T-01: সরাসরি ফাংশনের মান নির্ণয় সম্পর্কিত সমস্যা"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-0987",
            "question": "$y = f(x) = \\frac{5x+1}{4x-1}$ হলে, $x$ এর মাধ্যমে $f(y)$ এর মান কি হবে? [RU'16-17]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$x$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$2x$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{1}{x}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$1+x$"
              }
            ],
            "answer": "a",
            "explanation": "Sol$^n$: $f(x) = \\frac{5x+1}{4x-1}$\r\n$\\therefore f(y) = \\frac{5y+1}{4y-1} = \\frac{5.\\frac{5x+1}{4x-1}+1}{4.\\frac{5x+1}{4x-1}-1} = \\frac{\\frac{25x+5+4x-1}{4x-1}}{\\frac{20x+4-4x+1}{4x-1}} = \\frac{29x+4}{16x+5}$",
            "university": "RU",
            "year": "16-17",
            "topic": "T-01: সরাসরি ফাংশনের মান নির্ণয় সম্পর্কিত সমস্যা",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "রৈখিক ভগ্নাংশের ইনভার্স শর্টকাটের বীজগণিতীয় প্রমাণ",
        "description": "$y = \\frac{ax+b}{cx+d}$ ধরে $x$ এর মান বের করে কীভাবে শর্টকাটটি তৈরি হলো?",
        "promptQuery": "রৈখিক ভগ্নাংশের বিপরীত ফাংশন সূত্র $f^{-1}(x) = \\frac{-dx+b}{cx-a}$ প্রতিপাদন করো।"
      },
      {
        "title": "এক-এক ফাংশন চেনার অনুভূমিক রেখা পরীক্ষা (Horizontal Line Test)",
        "description": "লেখচিত্র দেখে কীভাবে বুঝবেন ফাংশনটি এক-এক কিনা?",
        "promptQuery": "এক-এক ফাংশন চেনার অনুভূমিক রেখা টেস্ট এবং ক্যালকুলাসের ক্রমবর্ধমান শর্ত ($f'(x)>0$) ব্যাখ্যা করো।"
      },
      {
        "title": "পর্যায়বৃত্ত ফাংশন ও এর পর্যায়কাল নির্ণয়",
        "description": "$\\sin(ax+b)$ এবং $\\tan(ax+b)$ এর পর্যায়কাল কত এবং কেন?",
        "promptQuery": "পর্যায়বৃত্ত ফাংশনের সংজ্ঞা এবং $\\sin ax$ ও $\\tan ax$ এর পর্যায়কাল নির্ণয়ের নিয়ম দেখাও।"
      },
      {
        "title": "ফাংশনের লেখচিত্র রূপান্তর (Shift, Scale, Reflect)",
        "description": "$f(x)$ জানা থাকলে $f(x-a), f(-x), -f(x)$ কীভাবে দ্রুত আঁকা যায়?",
        "promptQuery": "ফাংশনের লেখচিত্রের স্থানান্তর (Translation) ও প্রতিফলন (Reflection) নিয়মসমূহ সহজ উদাহরণসহ বুঝিয়ে দাও।"
      },
      {
        "title": "ফাংশন অধ্যায়ের শীর্ষ ভর্তি পরীক্ষা ফাঁদ",
        "description": "ডোমেন-রেঞ্জের ব্র্যাকেট ভুল ($($ vs $[$) এবং বিপরীত ফাংশনের অস্তিত্ব।",
        "promptQuery": "ফাংশন অধ্যায়ের ভর্তি পরীক্ষায় বারবার ভুল হওয়া শীর্ষ ৩টি প্রশ্ন ও কনসেপচুয়াল ফাঁদ আলোচনা করো।"
      }
    ],
    "questionCount": 140
  },
  {
    "id": "ch-differentiation",
    "paper": "First-Paper",
    "paperBn": "১ম পত্র",
    "chapterNum": 9,
    "nameBn": "অন্তরীকরণ",
    "nameEn": "Differentiation",
    "rawName": "অন্তরীকরণ",
    "summary": "উচ্চতর গণিত ১ম পত্রের অন্যতম বৃহৎ ক্যালকুলাস অধ্যায়। লিমিট ও লা হস্পিতালের নিয়ম, প্রমাণ অন্তরজ, চেইন রুল, স্পর্শক-অভিলম্বের সমীকরণ এবং গুরুমান-লঘুমান থেকে বোর্ড ও ভর্তি পরীক্ষায় সর্বোচ্চ সংখ্যক প্রশ্ন আসে।",
    "topics": [
      "সীমা (Limits) ও লা হস্পিতাল নিয়ম",
      "মূল নিয়মে অন্তরজ ও প্রমাণ সূত্র",
      "চেইন রুল ও অব্যক্ত ফাংশন",
      "স্পর্শক ও অভিলম্বের সমীকরণ",
      "ফাংশনের বৃদ্ধি-হ্রাস ও গুরুমান-লঘুমান"
    ],
    "concepts": [
      {
        "id": "c-diff-01",
        "title": "লিমিট ও লা হস্পিতালের নিয়ম (Limits & L'Hôpital's Rule)",
        "topic": "সীমা (Limits) ও লা হস্পিতাল নিয়ম",
        "summary": "অনির্ণেয় আকার ($0/0$ বা $\\infty/\\infty$), লা হস্পিতালের নিয়ম প্রয়োগ এবং স্ট্যান্ডার্ড লিমিট শর্টকাট।",
        "intro": {
          "what": "লিমিট হলো চলক কোনো নির্দিষ্ট মানের দিকে ধাবিত হলে ফাংশনের মান কোন সীমার দিকে অগ্রসর হয় তা নির্ধারণ। যদি সরাসরি মান বসালে অনির্ণেয় আকার ($\frac{0}{0}$ বা $\frac{infty}{infty}$) আসে, তবে লা হস্পিতালের নিয়ম অনুসারে লব ও হরকে আলাদাভাবে অন্তরীকরণ করে লিমিট বের করা যায়।",
          "whyImportant": "ভর্তি পরীক্ষার লিমিট সংক্রান্ত প্রায় ৯৫% প্রশ্ন লা হস্পিতালের নিয়ম প্রয়োগ করে মাত্র ১৫-২০ সেকেন্ডে সমাধান করা যায়।",
          "whereUsed": "তাত্ক্ষণিক বেগ ও ত্বরণ পরিমাপে, অপটিমাইজেশনে এবং সার্কিটের ট্রানজিয়েন্ট রেসপন্সে।",
          "prerequisites": "মৌলিক অন্তরজ সূত্র ($x^n, sin x, e^x, ln x$)।"
        },
        "easyExplanation": [
          "যদি $lim_{x \to a} \frac{f(x)}{g(x)}$ এর মান সরাসরি বসালে $\frac{0}{0}$ বা $\frac{infty}{infty}$ আসে, তবে ভগ্নাংশের ভাগ বিধি নয়—বরং লবকে আলাদা অন্তরীকরণ ($f'(x)$) এবং হরকে আলাদা অন্তরীকরণ ($g'(x)$) করুন।",
          "এরপর পুনরায় লিমিটের মান বসান। যদি আবারও $\frac{0}{0}$ আসে, তবে অনির্ণেয় আকার দূর না হওয়া পর্যন্ত পুনরায় অন্তরীকরণ চালিয়ে যান।"
        ],
        "formulas": [
          {
            "latex": "\\lim_{x \to a} \\frac{f(x)}{g(x)} = \\lim_{x \to a} \\frac{f'(x)}{g'(x)} \\quad \\left(\\text{যদি } \\frac{0}{0} \\text{ বা } \\frac{\\infty}{\\infty} \\text{ হয়}\\right)",
            "name": "লা হস্পিতালের উপপাদ্য (L'Hôpital's Rule)",
            "meaning": "অনির্ণেয় আকারে লব ও হরকে পৃথকভাবে অন্তরীকরণ করার নিয়ম।",
            "whenToUse": "সরাসরি মান বসিয়ে $0/0$ বা $\\infty/\\infty$ পাওয়া গেলে।",
            "conditions": "অবশ্যই $0/0$ বা $\\infty/\\infty$ হতে হবে (অন্য আকারে সরাসরি প্রযোজ্য নয়)।",
            "variables": "$f'(x), g'(x)$: প্রথম অন্তরজ।",
            "commonMistakes": "লব ও হরের ভাগের সূত্র ($u/v$ মেথড) প্রয়োগ করে ফেলা।"
          },
          {
            "latex": "\\lim_{x \to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}, \\quad \\lim_{x \to 0} \\frac{\\tan ax}{bx} = \\frac{a}{b}, \\quad \\lim_{x \to 0} \\frac{\\sin ax}{\\tan bx} = \\frac{a}{b}",
            "name": "ত্রিকোণমিতিক লিমিট শর্টকাট",
            "meaning": "$x \\to 0$ হলে সাইন বা ট্যানের কোণের সহগের অনুপাতই সরাসরি লিমিট।",
            "whenToUse": "ত্রিকোণমিতিক রৈখিক লিমিটে ১ সেকেন্ডে উত্তর দাগাতে।",
            "conditions": "$x \\to 0$ হতে হবে।",
            "variables": "$a, b$: কোণ ও হরের সহগ।",
            "commonMistakes": "$x \\to \\infty$ থাকলে এই সূত্র প্রয়োগ করা।"
          },
          {
            "latex": "\\lim_{x \to 0} \\frac{1 - \\cos ax}{x^2} = \\frac{a^2}{2}",
            "name": "কসাইন লিমিট শর্টকাট",
            "meaning": "$1 - \\cos ax$ এর নিচে $x^2$ থাকলে সহগের বর্গের অর্ধেকই উত্তর।",
            "whenToUse": "$1 - \\cos ax$ যুক্ত লিমিট প্রশ্নে সরাসরি।",
            "conditions": "$x \\to 0$ এবং হরে $x^2$ বা সমমানের পদ।",
            "variables": "$a$: কসাইনের সহগ।",
            "commonMistakes": "নিচে ২ দিতে ভুলে যাওয়া।"
          }
        ],
        "analysis": {
          "conditions": "লা হস্পিতাল প্রয়োগের আগে নিশ্চিত হতে হবে যে আকারটি সত্যিই $\\frac{0}{0}$ বা $\\frac{\\infty}{\\infty}$। যদি সরাসরি নির্দিষ্ট মান আসে তবে অন্তরীকরণ করলে ভুল উত্তর আসবে।",
          "variations": "$0 \\times \\infty$ আকার থাকলে $0 / (1/\\infty) = 0/0$ আকারে রূপান্তর করে প্রয়োগ করতে হয়।",
          "relationships": "$1^\\infty$ আকারের ক্ষেত্রে: $\\lim_{x \\to a} [f(x)]^{g(x)} = e^{\\lim_{x \\to a} g(x)[f(x) - 1]}$।",
          "transformations": "$\\lim_{x \\to \\infty} \\left(1 + \\frac{k}{x}\\right)^x = e^k$।",
          "misunderstandings": "শিক্ষার্থীরা ভুল করে কোশেন্ট রুল $\\frac{v u' - u v'}{v^2}$ করতে গিয়ে সময় অপচয় করে, অথচ লা হস্পিতালে লব আলাদা ও হর আলাদা অন্তরীকরণ হয়।"
        },
        "questionPatterns": [
          {
            "typeTitle": "অনির্ণেয় আকারের লিমিট সমাধান (L'Hôpital Technique)",
            "recognition": "সীমা $x \\to 0$ বা $x \\to a$ দেওয়া থাকবে এবং সরাসরি বসালে $0/0$ আসবে।",
            "requiredConcept": "লব ও হরের পৃথক অন্তরীকরণ।",
            "strategy": "১) $0/0$ যাচাই করুন। ২) লবকে $x$ এর সাপেক্ষে ও হরকে $x$ এর সাপেক্ষে অন্তরীকরণ করুন। ৩) মান বসান।",
            "keySteps": [
              "আকার যাচাই ($0/0$)",
              "পৃথক অন্তরীকরণ",
              "মান প্রতিস্থাপন"
            ],
            "commonTraps": "অন্তরীকরণে চেইন রুলের ভুল করা।"
          }
        ],
        "easyExample": {
          "problem": "$\\lim_{x \to 0} \\frac{\\sin 5x}{3x}$ এর মান কত?",
          "solutionSteps": [
            "$x = 0$ বসালে $\\frac{\\sin 0}{0} = \\frac{0}{0}$ (অনির্ণেয় আকার)।",
            "লা হস্পিতাল প্রয়োগ করে পাই: লবের অন্তরজ $5\\cos 5x$, হরের অন্তরজ $3$।",
            "$\\lim_{x \\to 0} \\frac{5\\cos 5x}{3} = \\frac{5\\cos 0}{3} = \\frac{5(1)}{3} = \\frac{5}{3}$।"
          ],
          "answer": "$\\frac{5}{3}$"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "$\\lim_{x \to 0} \\frac{1 - \\cos 4x}{x^2}$ এর মান কত?",
          "recognitionApproach": "$x = 0$ বসালে $\\frac{1 - 1}{0} = \\frac{0}{0}$। শর্টকাট সূত্র: $\\frac{a^2}{2}$ যেখানে $a = 4$।",
          "stepByStepSolution": "১) লা হস্পিতাল দিয়ে: লবকে অন্তরীকরণ করলে $0 - (-\\sin 4x \\cdot 4) = 4\\sin 4x$, হরকে অন্তরীকরণ করলে $2x$।\n২) আকার এখনও $0/0$, তাই ২য় বার লা হস্পিতাল: লবকে অন্তরীকরণ করলে $4(\\cos 4x \\cdot 4) = 16\\cos 4x$, হরের অন্তরীকরণ $2$।\n৩) এখন $x = 0$ বসিয়ে পাই: $\\frac{16\\cos 0}{2} = \\frac{16(1)}{2} = 8$।",
          "whyItWorks": "টেইলর সিরিজ বা লা হস্পিতালের দুই ধাপের অন্তরীকরণ থেকে এই সীমা নিশ্চিত হয়।",
          "calcAvoidanceTrick": "শর্টকাট সূত্র: $\\frac{a^2}{2} = \\frac{4^2}{2} = \\frac{16}{2} = 8$ (২ সেকেন্ডে সমাধান)।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$\\frac{f'(x)}{g'(x)}$ ($0/0$ বা $\\infty/\\infty$ তে)",
            "$\\lim_{x\\to 0}\\frac{\\sin ax}{bx} = \\frac{a}{b}$",
            "$\\lim_{x\\to 0}\\frac{1-\\cos ax}{x^2} = \\frac{a^2}{2}$",
            "$\\lim_{x\\to\\infty}(1+k/x)^x = e^k$"
          ],
          "importantConditions": [
            "অবশ্যই $0/0$ বা $\\infty/\\infty$ হতে হবে।"
          ],
          "keyObservations": [
            "লব আলাদা, হর আলাদা অন্তরীকরণ—ভাগ সূত্র নয়।"
          ],
          "recognitionTips": [
            "লিমিট দেখেই আগে $0/0$ কিনা দেখে লা হস্পিতাল করো।"
          ],
          "commonMistakes": [
            "কসাইন লিমিটে স্কয়ার না করে $a/2$ লেখা।"
          ],
          "summary": "অনির্ণেয় আকারে লব-হর আলাদা অন্তরীকরণ করো। $1-\\cos ax / x^2 = a^2/2$।"
        }
      },
      {
        "id": "c-diff-02",
        "title": "ফাংশনের গুরুমান ও লঘুমান (Maxima & Minima)",
        "topic": "ফাংশনের বৃদ্ধি-হ্রাস ও গুরুমান-লঘুমান",
        "summary": "প্রথম অন্তরজ শূন্য ($f'(x)=0$) ধরে চরম বিন্দু এবং দ্বিতীয় অন্তরজ দ্বারা সর্বোচ্চ/সর্বনিম্ন মান নির্ধারণ।",
        "intro": {
          "what": "একটি ফাংশন যে বিন্দুতে বৃদ্ধি পাওয়া থেকে হ্রাস পেতে শুরু করে সেখানে সর্বোচ্চ বা গুরুমান থাকে ($f'(x)=0, f''(x)<0$)। যে বিন্দুতে হ্রাস থেকে বৃদ্ধিতে রূপ নেয় সেখানে সর্বনিম্ন বা লঘুমান থাকে ($f'(x)=0, f''(x)>0$)।",
          "whyImportant": "ভর্তি পরীক্ষায় সর্বোচ্চ বা সর্বনিম্ন মান নির্ণয়ের প্রশ্ন ইঞ্জিনিয়ারিং ও ভার্সিটিতে নিশ্চিতভাবে আসে।",
          "whereUsed": "ব্যবসায় মুনাফা সর্বোচ্চকরণ, ইঞ্জিনিয়ারিংয়ে শক্তি অপচয় সর্বনিম্নকরণ ও পদার্থবিজ্ঞানে সাম্যাবস্থা।",
          "prerequisites": "প্রথম ও দ্বিতীয় মাত্রার অন্তরজ নির্ণয় ($f'(x), f''(x)$)।"
        },
        "easyExplanation": [
          "চরম বিন্দুতে (পাহাড়ের চূড়ায় বা উপত্যকার তলদেশে) স্পর্শকটি ভূমির সমান্তরাল হয়, তাই তার ঢাল শূন্য: $f'(x) = 0$। এখান থেকে সম্ভাব্য বিন্দুগুলো ($x$) পাওয়া যায়।",
          "কোন বিন্দুতে কী আছে তা চিনতে ২য় অন্তরজ $f''(x)$ এ মান বসান: যদি ঋণাত্মক ($<0$) হয় তবে পাহাড়ের চূড়া অর্থাৎ গুরুমান (Maximum)। যদি ধনাত্মক ($>0$) হয় তবে তলদেশ অর্থাৎ লঘুমান (Minimum)। মনে রাখবেন: উল্টো নিয়ম (নেগেটিভে ম্যাক্সিমাম, পজিটিভে মিনিমাম)।"
        ],
        "formulas": [
          {
            "latex": "f'(x) = 0 \\implies x = c \\quad (\\text{চরম বিন্দু বা Stationary Points})",
            "name": "চরম মানের প্রয়োজনীয় শর্ত",
            "meaning": "যেসব বিন্দুতে ফাংশনের ঢাল শূন্য হয়।",
            "whenToUse": "গুরুমান বা লঘুমান নির্ণয়ের প্রথম ধাপে।",
            "conditions": "$f(x)$ অন্তরীকরণযোগ্য হতে হবে।",
            "variables": "$c$: চরম মান বিন্দু।",
            "commonMistakes": "$f'(x)=0$ করে যে $x$ বের হয় তাকেই চূড়ান্ত উত্তর মনে করা (সেটি বিন্দু, মান নয়)।"
          },
          {
            "latex": "f''(c) < 0 \\implies \\text{গুরুমান (Maximum)}, \\quad f''(c) > 0 \\implies \\text{লঘুমান (Minimum)}",
            "name": "চরম মানের পর্যাপ্ত শর্ত (২য় অন্তরজ পরীক্ষা)",
            "meaning": "বক্রতার দিক দেখে সর্বোচ্চ না সর্বনিম্ন নির্ধারণ।",
            "whenToUse": "কোন বিন্দুতে গুরুমান আর কোনটিতে লঘুমান তা নিশ্চিত হতে।",
            "conditions": "$f''(c) \\neq 0$।",
            "variables": "$f''(c)$: দ্বিতীয় অন্তরজের মান।",
            "commonMistakes": "$f''(c) < 0$ কে লঘুমান মনে করা।"
          }
        ],
        "analysis": {
          "conditions": "যদি $f''(c) = 0$ হয়, তবে ২য় অন্তরজ পরীক্ষা ব্যর্থ হয়। তখন ৩য় অন্তরজ দেখে অনমনীয় বিন্দু (Point of Inflection) পরীক্ষা করতে হয়।",
          "variations": "চরম মান বের করতে প্রাপ্ত $x = c$ কে অবশ্যই মূল ফাংশন $f(x)$ এ বসাতে হবে।",
          "relationships": "দ্বিঘাত ফাংশন $f(x) = ax^2 + bx + c$ এর ক্ষেত্রে চরম মান বিন্দু $x = -\\frac{b}{2a}$। যদি $a > 0$ হয় তবে সর্বনিম্ন মান থাকে, $a < 0$ হলে সর্বোচ্চ মান থাকে।",
          "transformations": "$a\\sin x + b\\cos x$ এর সর্বোচ্চ মান $\\sqrt{a^2+b^2}$ এবং সর্বনিম্ন মান $-\\sqrt{a^2+b^2}$।",
          "misunderstandings": "ছাত্রছাত্রীরা প্রায়ই $x$ এর মানকেই গুরুমান হিসেবে লিখে আসে, অথচ মূল ফাংশন $f(x)$ এ বসিয়ে যে মান পাওয়া যায় সেটিই গুরুমান।"
        },
        "questionPatterns": [
          {
            "typeTitle": "ফাংশনের গুরুমান বা লঘুমান নির্ণয়",
            "recognition": "একটি সমীকরণ $f(x)$ দেওয়া থাকবে এবং তার সর্বোচ্চ বা সর্বনিম্ন মান কত জানতে চাইবে।",
            "requiredConcept": "$f'(x)=0$ সমাধান ও মূল ফাংশনে মান বসানো।",
            "strategy": "১) $f'(x) = 0$ করে $x$ বের করুন। ২) $x$ এর মান $f(x)$ এ বসিয়ে মান বের করুন।",
            "keySteps": [
              "$f'(x)$ বের করা",
              "শূন্যের সমান করে $x$ পাওয়া",
              "$f(x)$ এ বসিয়ে মান পাওয়া"
            ],
            "commonTraps": "$x$ এর মানকেই উত্তর ভেবে অপশন দাগানো।"
          }
        ],
        "easyExample": {
          "problem": "$f(x) = x^2 - 4x + 7$ ফাংশনটির সর্বনিম্ন মান কত?",
          "solutionSteps": [
            "$f'(x) = 2x - 4$।",
            "চরম মানের জন্য: $f'(x) = 0 \\implies 2x - 4 = 0 \\implies x = 2$।",
            "$f''(x) = 2 > 0$, সুতরাং $x = 2$ বিন্দুতে লঘুমান (সর্বনিম্ন মান) বিদ্যমান।",
            "সর্বনিম্ন মান $= f(2) = (2)^2 - 4(2) + 7 = 4 - 8 + 7 = 3$।"
          ],
          "answer": "$3$"
        },
        "examExample": {
          "examTag": "DU / RU Admission",
          "problem": "$f(x) = x + \\frac{1}{x}$ ফাংশনটির লঘুমান কত?",
          "recognitionApproach": "ফাংশনটিকে অন্তরীকরণ করে শূন্য বসিয়ে চরম বিন্দু বের করতে হবে।",
          "stepByStepSolution": "১) $f'(x) = 1 - \\frac{1}{x^2}$।\n২) $f'(x) = 0 \\implies 1 - \\frac{1}{x^2} = 0 \\implies x^2 = 1 \\implies x = \\pm 1$।\n৩) ২য় অন্তরজ: $f''(x) = \\frac{2}{x^3}$।\n৪) $x = 1$ হলে $f''(1) = 2 > 0$ (লঘুমান বিদ্যমান)।\n৫) অতএব লঘুমান $= f(1) = 1 + \\frac{1}{1} = 2$। (লক্ষ্য করুন: $x = -1$ এ গুরুমান $= -2$)।",
          "whyItWorks": "এখানে লঘুমান ($2$) গুরুমানের ($-2$) চেয়ে বড়—যা বিচ্ছিন্ন ডোমেনের ফাংশনে সম্পূর্ণ স্বাভাবিক।",
          "calcAvoidanceTrick": "আমরা জানি $x + 1/x \\ge 2$ (AM-GM অসমতা অনুসারে), সুতরাং ধনাত্মক শাখার সর্বনিম্ন মান সরাসরি $2$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$f'(x) = 0$",
            "$f''(x) < 0 \\implies$ গুরুমান",
            "$f''(x) > 0 \\implies$ লঘুমান",
            "$a\\sin x + b\\cos x \\implies \\pm\\sqrt{a^2+b^2}$"
          ],
          "importantConditions": [
            "চরম মান বের করতে $x$ কে মূল $f(x)$ এ বসাতে হবে।"
          ],
          "keyObservations": [
            "লঘুমান কখনো গুরুমানের চেয়ে বড় হতে পারে ($x+1/x$ এর ক্ষেত্রে)।"
          ],
          "recognitionTips": [
            "সর্বোচ্চ/সর্বনিম্ন মানেই প্রথম অন্তরজ = ০।"
          ],
          "commonMistakes": [
            "$x$ এর মানকেই গুরুমান হিসেবে দাগানো।"
          ],
          "summary": "$f'(x)=0$ থেকে বিন্দু পাও, মূল ফাংশনে বসিয়ে মান পাও। $f''<0$ গুরুমান, $f''>0$ লঘুমান।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "সীমা ও লা হস্পিতালের নিয়ম প্রয়োগ",
        "description": "অনির্ণেয় আকারের লিমিট, লা হস্পিতালের অন্তরীকরণ এবং ত্রিকোণমিতিক শর্টকাট।",
        "solvingStrategy": "১) $0/0$ নিশ্চিত করে লব ও হরকে আলাদা অন্তরীকরণ করুন। ২) $1-\\cos ax / x^2 = a^2/2$ শর্টকাট প্রয়োগ করুন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-1119",
            "question": "$\\lim_{x \\to 0} \\frac{e^x}{x} = ? \\quad [RU '24-25]$",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$1$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$0$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$2$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$-1$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: \\lim_{x \\to 0} \\frac{e^x}{x} = \\frac{e^0}{0} = \\frac{1}{0} = \\infty = \\text{লিমিট নেই।}$$\n\r\n$\\text{L.H.L} = \\lim_{x \\to 0^-} \\frac{e^x}{x} = -\\infty$\r\n\r\n$\\text{R.H.L} = \\lim_{x \\to 0^+} \\frac{e^x}{x} = +\\infty$\r\n\r\n$\\text{L.H.L} \\neq \\text{R.H.L}$\r\n\r\n$\\therefore x = 0$ বিন্দুতে $\\frac{e^x}{x}$ এর লিমিট বিদ্যমান নেই।",
            "university": "RU",
            "year": "24-25",
            "topic": "Chapter 09: অন্তরীকরণ"
          },
          {
            "id": "math-q-1120",
            "question": "যদি $f(x) = \\begin{cases} x^2, & x > 0 \\\\ 1, & x = 0 \\\\ x, & x < 0 \\end{cases}$ হয়, তবে $\\lim_{x \\to 0} f(x)$ এর মান কত? $\\quad [SUST '19-20]$",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$-1$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$-2$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$0$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$1$\r\n(e) $2 \\quad (c)$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: \\lim_{x \\to 0^-} f(x) = \\lim_{x \\to 0^-} x = 0$$\n\r\n$\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^+} x^2 = 0$\r\n\r\n$\\therefore \\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^-} f(x) = 0 = \\lim_{x \\to 0} f(x)$",
            "university": "SUST",
            "year": "19-20",
            "topic": "Chapter 09: অন্তরীকরণ"
          },
          {
            "id": "math-q-1121",
            "question": "$f(x) = \\sqrt{1 - x}$ হলে, $\\lim_{x \\to 1^+} f(x) = ?$ $\\quad [JU '10-11]$",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$0$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$1$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$-1$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "কোনটিই নয় $\\quad (d)$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: f(x) = \\sqrt{1 - x}$ [ধরি, $x = 1 + h$, যেখানে, $h \\to 0^+$]$\n\r\n$\\therefore \\lim_{x \\to 1^+} f(x) = \\lim_{h \\to 0^+} \\sqrt{1 - (1 + h)}$\r\n\r\n$= \\lim_{h \\to 0^+} \\sqrt{-h} = \\sqrt{-h} = \\text{অসংজ্ঞায়িত।}$",
            "university": "JU",
            "year": "10-11",
            "topic": "Chapter 09: অন্তরীকরণ"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-1122",
            "question": "$y = \\cot x$ ফাংশনটি কোন বিন্দুতে বিচ্ছিন্ন? $\\quad [JU '17-18]$",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\pi$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{\\pi}{2}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{2\\pi}{3}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{3\\pi}{2}$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: x = \\pi$ হলে, $\\cot x = \\cot \\pi$ অসংজ্ঞায়িত।$\n\r\n$\\lim_{x \\to \\pi^-} \\cot x = -\\infty$, $\\lim_{x \\to \\pi^+} \\cot x = +\\infty \\quad \\therefore x = \\pi$ বিন্দুতে $\\cot x$ বিচ্ছিন্ন।",
            "university": "JU",
            "year": "17-18",
            "topic": "Chapter 09: অন্তরীকরণ",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "গুরুমান ও লঘুমান এবং স্পর্শক-অভিলম্ব",
        "description": "ফাংশনের চরম মান নির্ণয় এবং বক্ররেখার নির্দিষ্ট বিন্দুতে স্পর্শকের ঢাল ও সমীকরণ।",
        "solvingStrategy": "১) $f'(x)=0$ করে $x$ বের করুন ও $f(x)$ এ বসিয়ে মান পান। ২) স্পর্শকের ঢাল $m = \\left.\\frac{dy}{dx}\\right|_{(x_1, y_1)}$।",
        "startIndex": 10,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-1129",
            "question": "$\\lim_{x \\to 1} \\frac{2x^3 - (2k + 1)x^2 + 2x + k}{x - 1} = -6$ হলে, $k$-এর মান কত?\r\n[DU'22-23]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$1$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$-1$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$3$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$-\\frac{1}{2}$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n$: $\\lim_{x \\to 1} \\frac{2x^3 - (2k + 1)x^2 + 2x + k}{x - 1} = -6$$\n$\\Rightarrow \\lim_{x \\to 1} \\frac{\\{2x^3 - (2k + 1)x^2 + 2x + k\\}}{\\lim_{x \\to 1} (x - 1)} = -6$\r\n$\\Rightarrow \\lim_{x \\to 1} \\{2x^3 - (2k + 1)x^2 + 2x + k\\} = -6 \\times \\lim_{x \\to 1} (x - 1) = -6(1 - 1)$\r\n$\\Rightarrow 2 - (2k + 1) + 2 + k = 0$\r\n$\\Rightarrow 2 - 2k - 1 + 2 + k = 0 \\Rightarrow 3 - k = 0 \\Rightarrow k = 3$",
            "university": "DU",
            "year": "22-23",
            "topic": "Chapter 09: অন্তরীকরণ"
          },
          {
            "id": "math-q-1130",
            "question": "$\\lim_{x \\to 0} \\frac{x}{2 - \\sqrt{4 + x}}$ এর মান কত? [RU'22-23]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$-2$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$-1$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$-3$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$-4$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n$: $\\lim_{x \\to 0} \\frac{x}{2 - \\sqrt{4 + x}}$; $\\left[\\frac{0}{0} \\text{ form}\\right] = \\lim_{x \\to 0} \\frac{-1}{-\\frac{1}{2\\sqrt{4 + x}}} = -4",
            "university": "RU",
            "year": "22-23",
            "topic": "Chapter 09: অন্তরীকরণ"
          },
          {
            "id": "math-q-1131",
            "question": "$\\lim_{h \\to 0} \\frac{\\ln(2 + h) - \\ln 2}{h}$ এর মান কোনটি? [CU'21-22, 20-21]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\sqrt{e}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{1}{2}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$e^2$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{1}{3}$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n$: $\\lim_{h \\to 0} \\frac{\\ln(2 + h) - \\ln 2}{h} = \\lim_{h \\to 0} \\frac{\\ln\\left(\\frac{2 + h}{2}\\right)}{h}$$\n$= \\lim_{h \\to 0} \\frac{\\ln\\left(1 + \\frac{h}{2}\\right)}{h} = \\frac{1}{2} \\lim_{h \\to 0} \\frac{\\ln\\left(1 + \\frac{h}{2}\\right)}{\\frac{h}{2}} = \\frac{1}{2} \\cdot 1 = \\frac{1}{2}$\r\n\r\n$$\\left[\\because \\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1\\right]$$\r\n\r\nShortcut: L'Hôpital rule অনুযায়ী,\r\n$\\lim_{h \\to 0} \\frac{\\frac{1}{2 + h}}{1} = \\frac{1}{2 + 0} = \\frac{1}{2}$",
            "university": "Admission",
            "year": "",
            "topic": "Chapter 09: অন্তরীকরণ"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-1132",
            "question": "$\\lim_{x \\to 0} \\frac{1 - \\cos x}{\\sin^2 2x}$ এর মান হবে -\r\n[DU'20-21]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{1}{4}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{1}{8}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{1}{2}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$1$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n$: $\\lim_{x \\to 0} \\frac{1 - \\cos x}{\\sin^2 2x} \\left[\\frac{0}{0}\\right]$;$\n$= \\lim_{x \\to 0} \\frac{0 + \\sin x}{2 \\sin 2x \\cos 2x}$ [L'Hôpital's rule]\r\n$= \\frac{1}{4} \\left(\\lim_{x \\to 0} \\frac{\\sin x}{x} \\cdot \\frac{2x}{\\sin 2x} \\times \\frac{1}{2}\\right) \\left(\\lim_{x \\to 0} \\frac{1}{\\cos 2x}\\right)$\r\n$= \\frac{1}{4} \\times \\frac{1}{2} \\times 1 = \\frac{1}{8}$",
            "university": "DU",
            "year": "20-21",
            "topic": "Chapter 09: অন্তরীকরণ",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "লা হস্পিতাল নিয়ম কখন ব্যর্থ হয়?",
        "description": "অবিরাম আবর্তনশীল ফাংশন (যেমন $\\sin x / x$ যখন $x\\to\\infty$) এর ক্ষেত্রে বিকল্প উপায়।",
        "promptQuery": "লা হস্পিতালের নিয়ম কোন কোন ক্ষেত্রে ব্যর্থ হয় এবং তখন স্যান্ডউইচ উপপাদ্য কীভাবে প্রয়োগ করতে হয়?"
      },
      {
        "title": "$x + 1/x$ এর লঘুমান কেন গুরুমানের চেয়ে বড়?",
        "description": "স্থানীয় (Local) বনাম পরম (Absolute) চরম মানের নিখুঁত চিত্রভিত্তিক ব্যাখ্যা।",
        "promptQuery": "$f(x) = x + 1/x$ ফাংশনের লঘুমান ($2$) কেন গুরুমানের ($-2$) চেয়ে বড় হয় তা লেখচিত্রের সাহায্যে বুঝিয়ে দাও।"
      },
      {
        "title": "অব্যক্ত ফাংশনের দ্রুত অন্তরীকরণ শর্টকাট",
        "description": "$\\frac{dy}{dx} = -\\frac{f_x}{f_y}$ (আংশিক অন্তরীকরণ পদ্ধতি) এর ম্যাজিক ট্রিক।",
        "promptQuery": "অব্যক্ত ফাংশনের ক্ষেত্রে আংশিক অন্তরীকরণ শর্টকাট $\\frac{dy}{dx} = -\\frac{\\partial f/\\partial x}{\\partial f/\\partial y}$ এর প্রমাণ ও ব্যবহার দেখাও।"
      },
      {
        "title": "স্পর্শক ও অভিলম্বের সমীকরণ নির্ণয়ের সহজ পদ্ধতি",
        "description": "বক্ররেখার ঢাল $m = dy/dx$ থেকে এক লাইনে স্পর্শক সমীকরণ গঠন।",
        "promptQuery": "বক্ররেখার কোনো বিন্দুতে স্পর্শক ও অভিলম্বের সমীকরণ গঠনের ধাপসমূহ উদাহরণসহ ব্যাখ্যা করো।"
      },
      {
        "title": "অন্তরীকরণ অধ্যায়ের শীর্ষ ভর্তি পরীক্ষা ফাঁদ",
        "description": "চেইন রুলের ঘাত ভুল, পরামিতিক অন্তরজের দ্বিতীয় অন্তরজ ($d^2y/dx^2$) এর সাধারণ ভুল।",
        "promptQuery": "প্যারামেট্রিক ফাংশনের দ্বিতীয় অন্তরজ নির্ণয়ে ছাত্রছাত্রীদের সাধারণ ভুল এবং ভর্তি পরীক্ষার ফাঁদ আলোচনা করো।"
      }
    ],
    "questionCount": 328
  },
  {
    "id": "ch-integration",
    "paper": "First-Paper",
    "paperBn": "১ম পত্র",
    "chapterNum": 10,
    "nameBn": "যোগজীকরণ",
    "nameEn": "Integration",
    "rawName": "যোগজীকরণ",
    "summary": "উচ্চতর গণিত ১ম পত্রের সমাপনী ও সর্বাধিক মার্কসের ক্যালকুলাস অধ্যায়। প্রতিস্থাপন পদ্ধতি, অংশায়ন ($int u v dx$), বিশেষ আদর্শ যোগজের শর্টকাট, নির্দিষ্ট যোগজের ধর্মাবলি এবং ক্ষেত্রফল নির্ণয় থেকে প্রতি বছর বুয়েট ও ঢাবিতে একাধিক প্রশ্ন আসে।",
    "topics": [
      "অনির্দিষ্ট যোগজ ও প্রতিস্থাপন",
      "অংশায়ন পদ্ধতি ($int u v dx$)",
      "বিশেষ আদর্শ ভগ্নাংশ ও ত্রিকোণমিতিক শর্টকাট",
      "নির্দিষ্ট যোগজের ধর্মাবলি",
      "ক্ষেত্রফল নির্ণয়"
    ],
    "concepts": [
      {
        "id": "c-int-01",
        "title": "প্রতিস্থাপন পদ্ধতি ও শীর্ষ যোগজ শর্টকাট (Substitution & Standard Shortcuts)",
        "topic": "অনির্দিষ্ট যোগজ ও প্রতিস্থাপন",
        "summary": "হরকে অন্তরীকরণ করলে লব পাওয়ার সূত্র ($ln|f(x)|$), $e^x[f(x)+f'(x)]$ এবং দ্রুত প্রতিস্থাপন কৌশল।",
        "intro": {
          "what": "যোগজীকরণ হলো অন্তরীকরণের বিপরীত প্রক্রিয়া। প্রতিস্থাপন পদ্ধতি হলো জটিল চলককে নতুন চলকে ($z$) রূপান্তর করে যোগজকে আদর্শ সূত্রে নামিয়ে আনা।",
          "whyImportant": "ভর্তি পরীক্ষার ৫০% যোগজের প্রশ্ন সরাসরি দুটি আদর্শ শর্টকাট—$int \frac{f'(x)}{f(x)} dx = ln|f(x)|$ এবং $int e^x [f(x) + f'(x)] dx = e^x f(x)$ দিয়ে সমাধান হয়।",
          "whereUsed": "পদার্থবিজ্ঞানে কাজ ও বিভব শক্তি নির্ণয়, সেন্টার অব মাস গণনা ও সম্ভাব্যতা ঘনত্ব ফাংশনে।",
          "prerequisites": "মৌলিক অন্তরজ ও সমাকলন সূত্রাবলী।"
        },
        "easyExplanation": [
          "শর্টকাট ১: যদি কোনো ভগ্নাংশের হরের রাশিটিকে অন্তরীকরণ করলে হুবহু লব পাওয়া যায়, তবে কোনো প্রতিস্থাপন না করেই সরাসরি উত্তর হবে $ln|\\text{হর}| + c$। যেমন: $int \frac{2x}{x^2+1} dx = ln(x^2+1) + c$।",
          "শর্টকাট ২: যদি হরে বর্গমূল থাকে এবং ভেতরের রাশিকে অন্তরীকরণ করলে লব পাওয়া যায়, তবে উত্তর হবে $2sqrt{\\text{হর}} + c$। যেমন: $int \frac{f'(x)}{sqrt{f(x)}} dx = 2sqrt{f(x)} + c$।",
          "শর্টকাট ৩: $e^x$ এর সাথে ব্র্যাকেটে একটি ফাংশন এবং তার অন্তরজ যোগাকারে থাকলে উত্তর সোজা $e^x f(x) + c$।"
        ],
        "formulas": [
          {
            "latex": "\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + c",
            "name": "লগারিদমিক যোগজ শর্টকাট",
            "meaning": "হরের অন্তরজ লবে বিদ্যমান থাকলে উত্তর লন অব হর।",
            "whenToUse": "যেকোনো ভগ্নাংশ যোগজে যেখানে হরের অন্তরজ লবে মিলে যায়।",
            "conditions": "$f(x) \\neq 0$।",
            "variables": "$f(x)$: হরের ফাংশন, $f'(x)$: লবের অন্তরজ।",
            "commonMistakes": "সহগ ব্যালান্স না করে সরাসরি লন লেখা।"
          },
          {
            "latex": "\\int \\frac{f'(x)}{\\sqrt{f(x)}} dx = 2\\sqrt{f(x)} + c",
            "name": "বর্গমূল ভগ্নাংশ যোগজ শর্টকাট",
            "meaning": "বর্গমূলের ভেতরের রাশির অন্তরজ লবে থাকলে উত্তর ২ ইনটু রুট হর।",
            "whenToUse": "হরে রুটযুক্ত ফাংশন থাকলে।",
            "conditions": "$f(x) > 0$।",
            "variables": "$f(x)$: রুটের ভেতরের রাশি।",
            "commonMistakes": "সামনে ২ গুণ দিতে ভুলে যাওয়া।"
          },
          {
            "latex": "\\int e^x [f(x) + f'(x)] dx = e^x f(x) + c",
            "name": "এক্সপোনেনশিয়াল যোগজ শর্টকাট",
            "meaning": "$e^x$ এর সাথে ফাংশন ও তার ডেরিভেটিভের যোগফল থাকলে সরাসরি গুণফল।",
            "whenToUse": "$e^x$ যুক্ত ব্র্যাকেটের রাশিতে।",
            "conditions": "$e$ এর পাওয়ার কেবল $x$ হতে হবে (বা $e^{kx}$ হলে $k$ ব্যালান্স করতে হবে)।",
            "variables": "$f(x)$: মূল ফাংশন, $f'(x)$: তার অন্তরজ।",
            "commonMistakes": "কোনটি $f(x)$ আর কোনটি $f'(x)$ তা উল্টে ফেলা।"
          }
        ],
        "analysis": {
          "conditions": "যদি হরের অন্তরজ লবের সাথে ধ্রুবকের দিক দিয়ে অমিল থাকে (যেমন $x$ আছে কিন্তু $2x$ দরকার), তবে বাইরে $\\frac{1}{2}$ দিয়ে ভেতরে ২ গুণ করে ব্যালান্স করতে হয়।",
          "variations": "অংশায়ন পদ্ধতি (Integration by Parts): $\\int u v dx = u \\int v dx - \\int \\left[\\frac{du}{dx} \\int v dx\\right] dx$। এখানে $u$ নির্বাচনে LIATE নিয়ম প্রযোজ্য।",
          "relationships": "নির্দিষ্ট যোগজে প্রতিস্থাপন করলে লিমিটের মানও নতুন চলকে পরিবর্তন করতে হয়।",
          "transformations": "$\\int \\tan x dx = \\ln|\\sec x| + c = -\\ln|\\cos x| + c$।",
          "misunderstandings": "অনির্দিষ্ট যোগজে ধ্রুবক $+c$ লিখতে ভুলে যাওয়া।"
        },
        "questionPatterns": [
          {
            "typeTitle": "$e^x [f(x) + f'(x)]$ আকারের যোগজ",
            "recognition": "প্রশ্নে $e^x$ থাকবে এবং ব্র্যাকেটে দুটি পদের যোগফল থাকবে (যেমন $e^x(\\tan x + \\sec^2 x)$ বা $e^x(\\frac{1}{x} - \\frac{1}{x^2})$)।",
            "requiredConcept": "$\\int e^x [f(x) + f'(x)] dx = e^x f(x) + c$।",
            "strategy": "ফাংশন $f(x)$ চিহ্নিত করুন এবং সরাসরি $e^x f(x) + c$ দাগান।",
            "keySteps": [
              "কোনটি $f(x)$ তা নিশ্চিত করা",
              "$f'(x)$ মেলানো",
              "সরাসরি উত্তর লেখা"
            ],
            "commonTraps": "অংশায়ন পদ্ধতি করতে গিয়ে পৃষ্ঠা ভরানো।"
          }
        ],
        "easyExample": {
          "problem": "$\\int \\frac{2x + 3}{x^2 + 3x - 5} dx$ এর মান কত?",
          "solutionSteps": [
            "হরের রাশিটিকে ধরি: $f(x) = x^2 + 3x - 5$।",
            "এর অন্তরজ: $f'(x) = 2x + 3$, যা হুবহু লবে বিদ্যমান!",
            "অতএব শর্টকাট সূত্র অনুসারে: $\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)| + c$।",
            "উত্তর $= \\ln|x^2 + 3x - 5| + c$।"
          ],
          "answer": "$\\ln|x^2 + 3x - 5| + c$"
        },
        "examExample": {
          "examTag": "BUET / DU / GST Admission",
          "problem": "$\\int e^x \\left(\\frac{1}{x} - \\frac{1}{x^2}\\right) dx$ এর মান কত?",
          "recognitionApproach": "এখানে $e^x$ আছে। যদি $f(x) = \\frac{1}{x}$ হয়, তবে $f'(x) = -\\frac{1}{x^2}$।",
          "stepByStepSolution": "১) ব্র্যাকেটের ভেতরের রাশিটি হলো: $\\frac{1}{x} + \\left(-\\frac{1}{x^2}\\right) = f(x) + f'(x)$।\n২) আমরা জানি: $\\int e^x [f(x) + f'(x)] dx = e^x f(x) + c$।\n৩) অতএব যোগজের মান $= e^x \\cdot \\frac{1}{x} + c = \\frac{e^x}{x} + c$।",
          "whyItWorks": "ইউভি ডিফারেনশিয়েশন $\\frac{d}{dx}[e^x f(x)] = e^x f(x) + e^x f'(x)$ এর বিপরীত প্রক্রিয়াই হলো এই সূত্র।",
          "calcAvoidanceTrick": "কোনো খাতা-কলম ছাড়াই সরাসরি মুখে মুখে উত্তর $\\frac{e^x}{x} + c$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$\\int \\frac{f'(x)}{f(x)} dx = \\ln|f(x)|+c$",
            "$\\int \\frac{f'(x)}{\\sqrt{f(x)}} dx = 2\\sqrt{f(x)}+c$",
            "$\\int e^x[f+f']dx = e^x f(x)+c$"
          ],
          "importantConditions": [
            "ধ্রুবক ব্যালান্স করতে ভুলবেন না।"
          ],
          "keyObservations": [
            "অনির্দিষ্ট যোগজে $+c$ বাধ্যতামূলক।"
          ],
          "recognitionTips": [
            "লবে হরের ডেরিভেটিভ থাকলে লন হর।"
          ],
          "commonMistakes": [
            "চিহ্ন ভুল করে $f'(x)$ এর সাথে মিল না করা।"
          ],
          "summary": "লবে হরের অন্তরজ থাকলে $\\ln|\\text{হর}|$, রুটে থাকলে $2\\sqrt{\\text{হর}}$, $e^x$ এ থাকলে $e^x f(x)$।"
        }
      },
      {
        "id": "c-int-02",
        "title": "নির্দিষ্ট যোগজের কিং প্রপার্টি ও ক্ষেত্রফল (King's Property & Area)",
        "topic": "নির্দিষ্ট যোগজের ধর্মাবলি ও ক্ষেত্রফল",
        "summary": "কিং প্রপার্টি ($int_a^b f(x)dx = int_a^b f(a+b-x)dx$), সিমেট্রিক ইন্টিগ্রাল শর্টকাট এবং বক্ররেখার ক্ষেত্রফল।",
        "intro": {
          "what": "নির্দিষ্ট যোগজ হলো সীমার ($a$ থেকে $b$) মধ্যে সমাকলন যা বক্ররেখা ও অক্ষের মধ্যবর্তী মোট ক্ষেত্রফল প্রকাশ করে। ক্যালকুলাসের ফান্ডামেন্টাল উপপাদ্য: $int_a^b f(x) dx = F(b) - F(a)$।",
          "whyImportant": "ইঞ্জিনিয়ারিং ও ভার্সিটি ভর্তি পরীক্ষায় নির্দিষ্ট যোগজের সিমেট্রিক শর্টকাট ($int_0^{pi/2} \frac{sin^n x}{sin^n x + cos^n x} dx = \frac{pi}{4}$) এবং পরাবৃত্তের ক্ষেত্রফল ($16/3 ab$) প্রতিবছর আসে।",
          "whereUsed": "সিভিল ও মেকানিক্যাল ইঞ্জিনিয়ারিংয়ে ভরকেন্দ্র ও মোমেন্ট অব ইনার্শিয়া এবং সম্ভাব্যতা তত্ত্বে।",
          "prerequisites": "নির্দিষ্ট যোগজের সীমা বসানোর নিয়ম ও ত্রিভুজমিতিক প্রতিসমতা।"
        },
        "easyExplanation": [
          "কিং প্রপার্টি (King's Property): $int_a^b f(x) dx = int_a^b f(a+b-x) dx$। অর্থাৎ চলক $x$ এর স্থলে (উচ্চসীমা + নিম্নসীমা - $x$) বসালে যোগজের মানের কোনো পরিবর্তন হয় না।",
          "এই নিয়মের সেরা ম্যাজিক শর্টকাট: $int_a^b \frac{f(x)}{f(x) + f(a+b-x)} dx = \frac{b - a}{2}$। অর্থাৎ উত্তর সর্বদা সীমার বিয়োগফলের অর্ধেক! যেমন $0$ থেকে $pi/2$ হলে উত্তর সরাসরি $\frac{pi/2 - 0}{2} = \frac{pi}{4}$।",
          "ক্ষেত্রফল শর্টকাট: $y^2 = 4ax$ এবং $x^2 = 4by$ পরাবৃত্তদ্বয় দ্বারা আবদ্ধ ক্ষেত্রফল $= \frac{16ab}{3}$ বর্গ একক।"
        ],
        "formulas": [
          {
            "latex": "\\int_a^b f(x) dx = \\int_a^b f(a+b-x) dx \\quad (\\text{King's Property})",
            "name": "নির্দিষ্ট যোগজের কিং প্রপার্টি",
            "meaning": "সীমার যোগফল থেকে $x$ বিয়োগ করে বসালে যোগজ অপরিবর্তিত থাকে।",
            "whenToUse": "জটিল ত্রিকোণমিতিক নির্দিষ্ট যোগজে যা সাধারণ নিয়মে করা যায় না।",
            "conditions": "ফাংশনটি $[a, b]$ ব্যবধিতে অবিচ্ছিন্ন হতে হবে।",
            "variables": "$a$: নিম্নসীমা, $b$: উচ্চসীমা।",
            "commonMistakes": "সীমা পরিবর্তন করে ফেলা (সীমা একই থাকে)।"
          },
          {
            "latex": "\\int_0^{\\pi/2} \\frac{\\sin^n x}{\\sin^n x + \\cos^n x} dx = \\frac{\\pi}{4}",
            "name": "সিমেট্রিক ত্রিকোণমিতিক শর্টকাট",
            "meaning": "$n$ এর যেকোনো মানের জন্য উত্তর সর্বদা $\\pi/4$।",
            "whenToUse": "পাওয়ার যাই থাকুক না কেন ($n = 1, 2, 3/2, 2024$ ইত্যাদি)।",
            "conditions": "সীমা $0$ থেকে $\\pi/2$ হতে হবে।",
            "variables": "$n$: যেকোনো বাস্তব সংখ্যা।",
            "commonMistakes": "বড় ইন্টিগ্রেশন করতে যাওয়া।"
          },
          {
            "latex": "\\text{Area} = \\frac{16ab}{3} \\quad (y^2 = 4ax \\text{ ও } x^2 = 4by \\text{ দ্বারা আবদ্ধ})",
            "name": "দুই পরাবৃত্তের মধ্যবর্তী ক্ষেত্রফল শর্টকাট",
            "meaning": "দুটি পরাবৃত্ত দ্বারা আবদ্ধ অঞ্চলের ক্ষেত্রফল।",
            "whenToUse": "পরস্পর বিপরীতমুখী পরাবৃত্তের আবদ্ধ ক্ষেত্রফল বের করতে।",
            "conditions": "উভয়ের শীর্ষ মূলবিন্দুতে হতে হবে।",
            "variables": "$a, b$: পরাবৃত্তদ্বয়ের ফোকাস দূরত্বের ধ্রুবক।",
            "commonMistakes": "$4a$ কে সরাসরি $a$ ধরে হিসাব করা।"
          }
        ],
        "analysis": {
          "conditions": "বিজোড় ফাংশনের প্রতিসম যোগজ: যদি $f(-x) = -f(x)$ হয়, তবে $\\int_{-a}^a f(x) dx = 0$। এটি ভর্তি পরীক্ষার অন্যতম সেরা ৫ সেকেন্ডের ট্রিক।",
          "variations": "জোড় ফাংশনের ক্ষেত্রে: যদি $f(-x) = f(x)$ হয়, তবে $\\int_{-a}^a f(x) dx = 2\\int_0^a f(x) dx$।",
          "relationships": "উপবৃত্ত $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ এর ক্ষেত্রফল $= \\pi ab$। বৃত্তের ক্ষেত্রে $a = b = r$ হলে $\\pi r^2$।",
          "transformations": "পরস্পর সীমা উল্টালে চিহ্ন মাইনাস হয়: $\\int_a^b f(x) dx = -\\int_b^a f(x) dx$।",
          "misunderstandings": "ক্ষেত্রফল কখনো ঋণাত্মক হতে পারে না। যদি কার্ভ $x$-অক্ষের নিচে থাকে তবে পরমমান নিতে হবে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "সিমেট্রিক কোণের নির্দিষ্ট যোগজ ($pi/4$ শর্টকাট)",
            "recognition": "সীমা $0$ থেকে $\\pi/2$ থাকবে এবং ফাংশন $\\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}}$ বা সমমানের থাকবে।",
            "requiredConcept": "কিং প্রপার্টি ও $\\frac{b-a}{2}$ কৌশল।",
            "strategy": "সরাসরি $\\frac{\\pi/2 - 0}{2} = \\frac{\\pi}{4}$ দাগান।",
            "keySteps": [
              "সীমা যাচাই ($0$ to $\\pi/2$)",
              "সিমেট্রি নিশ্চিত করা",
              "উত্তর $\\pi/4$ লেখা"
            ],
            "commonTraps": "অযথা বড় প্রতিস্থাপন করতে যাওয়া।"
          }
        ],
        "easyExample": {
          "problem": "$\\int_0^{\\pi/2} \\frac{\\sin^3 x}{\\sin^3 x + \\cos^3 x} dx$ এর মান কত?",
          "solutionSteps": [
            "ধরি $I = \\int_0^{\\pi/2} \\frac{\\sin^3 x}{\\sin^3 x + \\cos^3 x} dx$ ... (১)",
            "কিং প্রপার্টি প্রয়োগ করে $x$ এর স্থলে $(\\pi/2 - x)$ বসাই:",
            "$I = \\int_0^{\\pi/2} \\frac{\\sin^3(\\pi/2-x)}{\\sin^3(\\pi/2-x) + \\cos^3(\\pi/2-x)} dx = \\int_0^{\\pi/2} \\frac{\\cos^3 x}{\\cos^3 x + \\sin^3 x} dx$ ... (২)",
            "(১) ও (২) যোগ করি: $2I = \\int_0^{\\pi/2} \\frac{\\sin^3 x + \\cos^3 x}{\\sin^3 x + \\cos^3 x} dx = \\int_0^{\\pi/2} 1 dx = [x]_0^{\\pi/2} = \\frac{\\pi}{2}$।",
            "অতএব $I = \\frac{\\pi}{4}$।"
          ],
          "answer": "$\\frac{\\pi}{4}$"
        },
        "examExample": {
          "examTag": "BUET Admission Exam",
          "problem": "$y^2 = 4x$ এবং $x^2 = 4y$ পরাবৃত্তদ্বয় দ্বারা সীমাবদ্ধ অঞ্চলের ক্ষেত্রফল কত বর্গ একক?",
          "recognitionApproach": "দুটি আদর্শ পরাবৃত্ত $y^2 = 4ax$ এবং $x^2 = 4by$ এর ক্ষেত্রফল সূত্র: $\\frac{16ab}{3}$।",
          "stepByStepSolution": "১) $y^2 = 4(1)x \\implies a = 1$।\n২) $x^2 = 4(1)y \\implies b = 1$।\n৩) আবদ্ধ ক্ষেত্রফল $= \\frac{16ab}{3} = \\frac{16 \\times 1 \\times 1}{3} = \\frac{16}{3}$ বর্গ একক।",
          "whyItWorks": "ইন্টিগ্রেশন $\\int_0^4 (2\\sqrt{x} - \\frac{x^2}{4}) dx = \\left[\\frac{4}{3}x^{3/2} - \\frac{x^3}{12}\\right]_0^4 = \\frac{32}{3} - \\frac{16}{3} = \\frac{16}{3}$ এর শর্টকাট রূপ।",
          "calcAvoidanceTrick": "সরাসরি শর্টকাট $\\frac{16ab}{3} = \\frac{16(1)(1)}{3} = \\frac{16}{3}$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$\\int_a^b f(x)dx = \\int_a^b f(a+b-x)dx$",
            "$\\int_0^{\\pi/2}\\frac{\\sin^n x}{\\sin^n x+\\cos^n x}dx = \\frac{\\pi}{4}$",
            "বিজোড় ফাংশনে $\\int_{-a}^a f(x)dx = 0$",
            "পরাবৃত্তের ক্ষেত্রফল: $\\frac{16ab}{3}$"
          ],
          "importantConditions": [
            "বিজোড় ফাংশনের জন্য সীমার মান প্রতিসম ($-a$ থেকে $a$) হতে হবে।"
          ],
          "keyObservations": [
            "উপবৃত্তের ক্ষেত্রফল $\\pi ab$।"
          ],
          "recognitionTips": [
            "$-a$ থেকে $a$ লিমিট দেখলে আগে চেক করো ফাংশন অড কিনা।"
          ],
          "commonMistakes": [
            "পরাবৃত্তের সহগ থেকে $a, b$ বের করতে ভুল করা।"
          ],
          "summary": "কিং প্রপার্টিতে মান অপরিবর্তিত থাকে। সিমেট্রিক কস-সাইন ফলে $\\pi/4$, অড ফাংশনে ০, পরাবৃত্তে ১৬/৩ $ab$।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "প্রতিস্থাপন ও আদর্শ যোগজ শর্টকাট",
        "description": "হরের ডেরিভেটিভ লবে থাকা, রুটযুক্ত হর এবং $e^x[f+f']$ এর সমস্যাবলি।",
        "solvingStrategy": "১) হরের ডেরিভেটিভ পরীক্ষা করে $\\ln|f(x)|$ বা $2\\sqrt{f(x)}$ প্রয়োগ করুন। ২) $e^x$ থাকলে ফাংশন ও অন্তরজ মেলান।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-1447",
            "question": "$\\int_{0}^{2} \\frac{dx}{\\sqrt{4x+1}}$ এর মান নির্ণয় কর। [RU'20-21]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{3}{2}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$6$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{2}{3}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$9$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: \\int_{0}^{2} \\frac{dx}{\\sqrt{4x+1}} = \\left[ \\frac{1}{2} 2\\sqrt{4x+1} \\right]_{0}^{2} \\quad \\left[ \\because \\int \\frac{dx}{\\sqrt{x}} = 2\\sqrt{x} + c \\right]$$\r\n$$= \\frac{1}{2} \\{ \\sqrt{4 \\times 2 + 1} - \\sqrt{4 \\times 0 + 1} \\} = \\frac{1}{2} (3 - 1) = 1$$\r\nসুতারং, সঠিক উত্তর নেই।\r\nবিকল্প: ধরি, $z = 4x + 1 \\Rightarrow dz = 4dx \\Rightarrow \\frac{dz}{4} = dx$\r\n$x = 0, z = 1; x = 2, z = 9$\r\n$$\\int_{0}^{2} \\frac{dx}{\\sqrt{4x+1}} = \\frac{1}{4} \\int_{1}^{9} \\frac{dz}{\\sqrt{z}} = \\frac{1}{4} [2\\sqrt{z}]_{1}^{9} = \\frac{1}{2} (\\sqrt{9} - \\sqrt{1})$$\r\n$$= \\frac{1}{2} (3 - 1) = 1",
            "university": "RU",
            "year": "20-21",
            "topic": "Chapter 10: যোগজীকরণ"
          },
          {
            "id": "math-q-1448",
            "question": "$\\int_{0}^{1} e^{(1-2x)} dx$ এর মান কত? [RU'19-20]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$e - 1$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{e - 1}{2}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{e}{2}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$-\\frac{e}{2}$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: \\int_{0}^{1} e^{1-2x} dx = \\left[ \\frac{e^{1-2x}}{-2} \\right]_{0}^{1} = -\\frac{1}{2} \\left[ e^{1-2x} \\right]_{0}^{1}$$\r\n$$\\left[ \\because \\int e^{x} dx = e^{x} + c \\right] = -\\frac{1}{2} [e^{0} - e] = \\frac{e - 1}{2}$|$",
            "university": "RU",
            "year": "19-20",
            "topic": "Chapter 10: যোগজীকরণ"
          },
          {
            "id": "math-q-1449",
            "question": "$\\int \\sqrt{e^x} dx = ?$ [DU'18-19]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{2}{3} (e^x)^{\\frac{3}{2}} + c$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{1}{2} \\sqrt{e^x} + c$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$2e^{\\frac{x}{2}} + c$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$e^{\\frac{x}{2}} + c$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: \\int \\sqrt{e^x} dx = \\int e^{\\frac{x}{2}} dx = \\frac{e^{\\frac{x}{2}}}{\\frac{1}{2}} + c = 2e^{\\frac{x}{2}} + c",
            "university": "DU",
            "year": "18-19",
            "topic": "Chapter 10: যোগজীকরণ"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-1450",
            "question": "$X = \\int_{0}^{4} \\sqrt{2x+1} dx$ হলে, $X$ এর মান কত? [JU'18-19]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{26}{5}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{26}{3}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{3}{26}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$26$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: X = \\int_{0}^{4} \\sqrt{2x+1} dx = \\left[ \\frac{(2x+1)^{\\frac{1}{2}+1}}{2(\\frac{1}{2}+1)} \\right]_{0}^{4}$$\r\n$$= \\frac{1}{2} \\times \\frac{2}{3} \\left( 9^{\\frac{3}{2}} - 1^{\\frac{3}{2}} \\right) = \\frac{1}{3} (27 - 1) = \\frac{26}{3}",
            "university": "JU",
            "year": "18-19",
            "topic": "Chapter 10: যোগজীকরণ",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "নির্দিষ্ট যোগজ ও ক্ষেত্রফল নির্ণয়",
        "description": "কিং প্রপার্টি, প্রতিসম সীমার যোগজ এবং পরাবৃত্ত ও রেখা দ্বারা আবদ্ধ ক্ষেত্রফল।",
        "solvingStrategy": "১) ০ থেকে $\\pi/2$ সিমেট্রিক যোগজে উত্তর $\\pi/4$। ২) পরাবৃত্তের আবদ্ধ ক্ষেত্রফলে $\\frac{16ab}{3}$ ব্যবহার করুন।",
        "startIndex": 10,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-1457",
            "question": "$\\int x^9 e^{x^{10}} dx = ? \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\text{[JU'19-20]}$",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$-\\frac{1}{10} e^{x^{10}} + c$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$-\\frac{1}{10} e^{x^{10}} + c$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{1}{10} e^{x^{10}} + c$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{1}{10} e^{x^{10}} + c$ \\quad \\quad \\quad \\quad \\textcircled{d}"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: \\int x^9 e^{x^{10}} dx = \\frac{1}{10} \\int e^{x^{10}} d(x^{10}) = \\frac{1}{10} e^{x^{10}} + c",
            "university": "JU",
            "year": "19-20",
            "topic": "T-02: যোগজীকরণে প্রতিস্থাপন পদ্ধতির ব্যবহার"
          },
          {
            "id": "math-q-1458",
            "question": "$\\int_{0}^{1} \\frac{\\tan^{-1} x}{1+x^2} dx$ এর মান কোনটি? \\text{[JU'19-20; CU'16-17]}",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{\\pi^2}{32}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{\\pi^2}{16}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{\\pi^2}{32}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{\\pi^2}{16}$ \\quad \\textcircled{c}"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: \\int_{0}^{1} \\frac{\\tan^{-1} x}{1+x^2} dx = \\int_{0}^{1} \\tan^{-1} x \\, d(\\tan^{-1} x)$$\n$= \\left[ \\frac{(\\tan^{-1} x)^{1+1}}{1+1} \\right]_{0}^{1} = \\frac{1}{2} \\left\\{\\tan^{-1}(1) - \\tan^{-1}(0)\\right\\}^2 = \\frac{\\pi^2}{32}$",
            "university": "Admission",
            "year": "",
            "topic": "T-02: যোগজীকরণে প্রতিস্থাপন পদ্ধতির ব্যবহার"
          },
          {
            "id": "math-q-1459",
            "question": "$\\int_{\\pi/2}^{\\pi} (1+\\sin x)^2 \\cos x \\, dx = ?$ \\quad \\quad \\quad \\quad \\text{[JU'19-20]}",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$-\\frac{7}{3}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{7}{3}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{1}{2}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$-\\frac{1}{2}$ \\quad \\textcircled{a}"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: \\int_{\\pi/2}^{\\pi} (1+\\sin x)^2 \\cos x \\, dx$$\n$= \\int_{\\pi/2}^{\\pi} (1+\\sin x)^2 d(1+\\sin x) = \\frac{1}{3} \\left[(1+\\sin x)^3\\right]_{\\pi/2}^{\\pi}$\r\n$= \\frac{1}{3} \\left[(1+\\sin \\pi)^3 - (1+\\sin \\frac{\\pi}{2})^3\\right]$\r\n$= \\frac{1}{3} (1-8) = -\\frac{7}{3}$",
            "university": "JU",
            "year": "19-20",
            "topic": "T-02: যোগজীকরণে প্রতিস্থাপন পদ্ধতির ব্যবহার"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-1460",
            "question": "$\\int \\frac{\\tan(\\sin^{-1} x)}{\\sqrt{1-x^2}} dx = ?$ \\quad \\quad \\quad \\quad \\quad \\quad \\text{[DU'18-19]}",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\sec^2(\\sin^{-1} x) + c$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\sec(\\sin^{-1} x) + c$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\ln|\\sec(\\sin^{-1} x)| + c$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\ln|\\tan(\\sin^{-1} x)| + c$ \\quad \\textcircled{c}"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n: \\int \\tan(\\sin^{-1} x) \\, d(\\sin^{-1} x)$$\n$= \\ln |\\sec(\\sin^{-1} x)| + c$",
            "university": "DU",
            "year": "18-19",
            "topic": "T-02: যোগজীকরণে প্রতিস্থাপন পদ্ধতির ব্যবহার",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "নির্দিষ্ট যোগজের কিং প্রপার্টির প্রমাণ ও প্রয়োগ",
        "description": "$\\int_a^b f(x)dx = \\int_a^b f(a+b-x)dx$ উপপাদ্যটি কীভাবে প্রতিস্থাপন দিয়ে সহজে প্রমাণিত হয়?",
        "promptQuery": "নির্দিষ্ট যোগজের কিং প্রপার্টি প্রমাণ করো এবং এর সাহায্যে জটিল ত্রিকোণমিতিক যোগজ সমাধানের ৩টি উদাহরণ দাও।"
      },
      {
        "title": "দুই পরাবৃত্তের মধ্যবর্তী ক্ষেত্রফলের শর্টকাট প্রমাণ",
        "description": "$y^2 = 4ax$ ও $x^2 = 4by$ এর আবদ্ধ ক্ষেত্রফল কেন সর্বদা $\\frac{16ab}{3}$ হয়?",
        "promptQuery": "দুটি পরাবৃত্ত দ্বারা আবদ্ধ অঞ্চলের ক্ষেত্রফল $\\frac{16ab}{3}$ সমাকলন পদ্ধতির সাহায্যে প্রমাণ করো।"
      },
      {
        "title": "অংশায়ন পদ্ধতিতে LIATE নিয়মের বৈজ্ঞানিক কারণ",
        "description": "কেন Logarithm ও Inverse Trigonometry কে প্রথম ফাংশন ($u$) ধরা হয়?",
        "promptQuery": "ইন্টিগ্রেশন বাই পার্টস পদ্ধতিতে LIATE ক্রমের পেছনের যৌক্তিক কারণ ব্যাখ্যা করো।"
      },
      {
        "title": "উপবৃত্তের ক্ষেত্রফল $\\pi ab$ এর সমাকলন প্রমাণ",
        "description": "বৃত্তের $\\pi r^2$ এর সাথে উপবৃত্তের ক্ষেত্রফলের জ্যামিতিক সাদৃশ্য।",
        "promptQuery": "যোগজীকরণের সাহায্যে প্রমাণ করো যে $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ উপবৃত্তের ক্ষেত্রফল $\\pi ab$।"
      },
      {
        "title": "যোগজীকরণ অধ্যায়ের শীর্ষ ভর্তি পরীক্ষা ফাঁদ",
        "description": "নির্দিষ্ট যোগজে সীমা পরিবর্তন না করা এবং মডুলাস ফাংশনের ইন্টিগ্রেশনের ভুল।",
        "promptQuery": "যোগজীকরণের ভর্তি পরীক্ষায় সবচেয়ে বেশি ভুল হওয়া ৩টি ট্রিকি প্রশ্ন সমাধানসহ বিশ্লেষণ করো।"
      }
    ],
    "questionCount": 206
  },
  {
    "id": "ch-real-numbers",
    "paper": "Second-Paper",
    "paperBn": "২য় পত্র",
    "chapterNum": 1,
    "nameBn": "বাস্তব সংখ্যা ও অসমতা",
    "nameEn": "Real Numbers & Inequalities",
    "rawName": "বাস্তব সংখ্যা ও অসমতা",
    "summary": "উচ্চতর গণিত ২য় পত্রের সূচনা অধ্যায়। পরমমানযুক্ত অসমতার সমাধান, ব্যবধি প্রকাশ, সুপ্রিয়াম ও ইনফিমাম এবং চিহ্ন সারণি পদ্ধতি থেকে এইচএসসি ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষায় প্রতিবছর প্রশ্ন আসে।",
    "topics": [
      "বাস্তব সংখ্যার স্বীকার্য ও বৈশিষ্ট্য",
      "সুপ্রিয়াম ও ইনফিমাম",
      "পরমমান ও অসমতার সমাধান",
      "ভগ্নাংশ ও দ্বিঘাত অসমতা"
    ],
    "concepts": [
      {
        "id": "c-real-01",
        "title": "পরমমান অসমতা ও ব্যবধি রূপান্তর (Absolute Value Inequalities & Intervals)",
        "topic": "পরমমান ও অসমতার সমাধান",
        "summary": "$|x| < a$ এবং $|x| > a$ এর মৌলিক রূপান্তর, ঋণাত্মক সংখ্যা দ্বারা গুণের নিয়ম এবং ব্যবধি প্রকাশ।",
        "intro": {
          "what": "পরমমান $|x|$ হলো সংখ্যারেখায় মূলবিন্দু থেকে $x$ এর অঋণাত্মক দূরত্ব। $|x| < a$ প্রকাশ করে $-a < x < a$ এবং $|x| > a$ প্রকাশ করে $x > a$ অথবা $x < -a$।",
          "whyImportant": "ভর্তি পরীক্ষায় \"পরমমান চিহ্ন ব্যতীত প্রকাশ করো\" বা \"পরমমান চিহ্নের সাহায্যে প্রকাশ করো\" প্রশ্নটি প্রতিবছর নিশ্চিত আসে।",
          "whereUsed": "ইরর অ্যানালাইসিস, সহনশীলতা সীমা (Tolerance Limits) ও ক্যালকুলাসে লিমিটের $\\epsilon - \\delta$ সংজ্ঞায়।",
          "prerequisites": "সংখ্যারেখা ও বীজগণিতীয় অসমতার ধারণা।"
        },
        "easyExplanation": [
          "শর্টকাট ১ (স্যান্ডউইচ বা ভেতরের অঞ্চল): $|X| < a$ থাকলে রাশিটি $-a$ এবং $+a$ এর মাঝে স্যান্ডউইচ হয়ে যায়: $-a < X < a$।",
          "শর্টকাট ২ (বাইরের অঞ্চল): $|X| > a$ থাকলে রাশিটি চরম দুই প্রান্তে ছিটকে যায়: হয় $X > a$ অথবা $X < -a$।",
          "পরমমান চিহ্নের সাহায্যে প্রকাশের ম্যাজিক ট্রিক: যদি $a < x < b$ থাকে, তবে গড় $m = \\frac{a+b}{2}$ এবং বিস্তার $d = \\frac{b-a}{2}$। তখন পরমমান রূপটি হবে $|x - m| < d$!"
        ],
        "formulas": [
          {
            "latex": "|X| < a \\iff -a < X < a \\quad (a > 0)",
            "name": "ক্ষুদ্রতর পরমমান অসমতা",
            "meaning": "দূরত্ব $a$ এর চেয়ে কম হলে তা একটি সীমাবদ্ধ অন্তর্বর্তী অঞ্চল।",
            "whenToUse": "$|ax+b| < c$ জাতীয় অসমতা সমাধান করতে।",
            "conditions": "$a > 0$ হতে হবে।",
            "variables": "$X$: বীজগাণিতিক রাশি, $a$: ধনাত্মক বাস্তব সংখ্যা।",
            "commonMistakes": "$-a < X$ এবং $X < a$ কে পৃথকভাবে না দেখে গুলিয়ে ফেলা।"
          },
          {
            "latex": "|X| > a \\iff X > a \\text{ অথবা } X < -a \\quad (a > 0)",
            "name": "বৃহত্তর পরমমান অসমতা",
            "meaning": "দূরত্ব $a$ এর চেয়ে বেশি হলে দুটি বিচ্ছিন্ন অঞ্চল।",
            "whenToUse": "$|ax+b| > c$ আকারের অসমতায়।",
            "conditions": "$a > 0$।",
            "variables": "$X$: বীজগাণিতিক রাশি, $a$: ধনাত্মক ধ্রুবক।",
            "commonMistakes": "মাঝে \"এবং\" লেখা (\"এবং\" হবে না, \"অথবা\" হবে কারণ দুটি আলাদা অঞ্চল)।"
          },
          {
            "latex": "a < x < b \\iff \\left|x - \\frac{a+b}{2}\\right| < \\frac{b-a}{2}",
            "name": "পরমমানে রূপান্তরের কেন্দ্র-ব্যাসার্ধ শর্টকাট",
            "meaning": "যেকোনো সীমাবদ্ধ ব্যবধিকে সরাসরি পরমমান চিহ্নে প্রকাশ।",
            "whenToUse": "সাধারণ ব্যবধি থেকে পরমমান চিহ্নে এক লাইনে যেতে।",
            "conditions": "$a < b$।",
            "variables": "$\\frac{a+b}{2}$: ব্যবধির মধ্যবিন্দু, $\\frac{b-a}{2}$: ব্যবধির অর্ধ-দৈর্ঘ্য।",
            "commonMistakes": "গড় ও দূরত্বের সূত্রে প্লাস-মাইনাস গোলমাল করা।"
          }
        ],
        "analysis": {
          "conditions": "অসমতার উভয় পক্ষকে ঋণাত্মক সংখ্যা দ্বারা গুণ বা ভাগ করলে অসমতার দিক উল্টে যায় ($<$ হয়ে যায় $>$)।",
          "variations": "যদি ভগ্নাংশ অসমতা $\\frac{1}{|2x-3|} > 5$ থাকে, তবে ব্যস্তকরণ করলে চিহ্ন উল্টে যায়: $|2x-3| < \\frac{1}{5}$ এবং শর্ত $2x-3 \\neq 0$ বজায় থাকে।",
          "relationships": "সুপ্রিয়াম (Supremum) হলো কোনো সেটের ক্ষুদ্রতম ঊর্ধ্বসীমা (LUB) এবং ইনফিমাম (Infimum) হলো বৃহত্তম নিম্নসীমা (GLB)।",
          "transformations": "$|a + b| \\le |a| + |b|$ (ত্রিভুজ অসমতা)।",
          "misunderstandings": "ব্যস্তকরণ করার পর যে বিন্দুতে হর শূন্য হয় ($x = 3/2$) তাকে সমাধান সেটে রেখে দেওয়া।"
        },
        "questionPatterns": [
          {
            "typeTitle": "পরমমান চিহ্নে প্রকাশ করার সমস্যা",
            "recognition": "প্রশ্নে একটি ব্যবধি যেমন $-1 < x < 5$ দেওয়া থাকবে এবং পরমমান চিহ্নে রূপান্তর করতে বলবে।",
            "requiredConcept": "মধ্যবিন্দু ও অর্ধ-দূরত্ব শর্টকাট: $|x - m| < d$।",
            "strategy": "১) গড় $m = \\frac{a+b}{2}$ বের করুন। ২) বিস্তার $d = \\frac{b-a}{2}$ বের করুন। ৩) $|x - m| < d$ লিখুন।",
            "keySteps": [
              "গড় বের করা",
              "অর্ধ-দূরত্ব বের করা",
              "সূত্রে বসানো"
            ],
            "commonTraps": "চিহ্নে ভুল করা।"
          }
        ],
        "easyExample": {
          "problem": "অসমতাটি সমাধান করো: $|2x - 3| < 5$",
          "solutionSteps": [
            "পরমমানের সূত্র অনুসারে: $-5 < 2x - 3 < 5$।",
            "প্রতিটি অংশে $3$ যোগ করি: $-5 + 3 < 2x < 5 + 3 \\implies -2 < 2x < 8$।",
            "পুরো অসমতাকে $2$ দিয়ে ভাগ করি: $-1 < x < 4$।",
            "ব্যবধি আকারে সমাধান: $(-1, 4)$।"
          ],
          "answer": "$-1 < x < 4$ বা $(-1, 4)$"
        },
        "examExample": {
          "examTag": "DU / RU / GST Admission",
          "problem": "$-3 < x < 7$ অসমতাটিকে পরমমান চিহ্নের সাহায্যে প্রকাশ করো।",
          "recognitionApproach": "এটি একটি সাধারণ সীমাবদ্ধ অসমতা $a < x < b$ যেখানে $a = -3, b = 7$।",
          "stepByStepSolution": "১) ব্যবধির মধ্যবিন্দু (গড়): $m = \\frac{-3 + 7}{2} = \\frac{4}{2} = 2$।\n২) ব্যবধির অর্ধ-দূরত্ব: $d = \\frac{7 - (-3)}{2} = \\frac{10}{2} = 5$।\n৩) শর্টকাট সূত্র: $|x - m| < d$।\n৪) অতএব পরমমান রূপ: $|x - 2| < 5$।",
          "whyItWorks": "মধ্যবিন্দু ২ থেকে $x$ এর দূরত্ব ৫ এর কম—এটি নির্দেশ করে $x$ এর মান $-3$ থেকে $7$ এর মধ্যে থাকবে।",
          "calcAvoidanceTrick": "গড় $2$, দূরত্ব $5$ $\\implies |x - 2| < 5$ মুখে মুখে ৩ সেকেন্ডে উত্তর।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$|X| < a \\iff -a < X < a$",
            "$|X| > a \\iff X > a \\text{ or } X < -a$",
            "$a < x < b \\iff |x - \\frac{a+b}{2}| < \\frac{b-a}{2}$"
          ],
          "importantConditions": [
            "ঋণাত্মক দিয়ে গুণ/ভাগ করলে অসমতার দিক উল্টে যায়।"
          ],
          "keyObservations": [
            "সুপ্রিয়াম সেটের ভেতরে থাকতেও পারে, নাও থাকতে পারে ($S = (0, 1)$ এর সুপ্রিয়াম ১)।"
          ],
          "recognitionTips": [
            "পরমমান চিহ্নে প্রকাশে মধ্যবিন্দু বিয়োগ করে দূরত্ব ডানে বসাও।"
          ],
          "commonMistakes": [
            "ভগ্নাংশে হর শূন্য হওয়ার বিন্দু বাদ না দেওয়া।"
          ],
          "summary": "ভেতরে থাকলে স্যান্ডউইচ, বাইরে থাকলে ছিটকে যাওয়া। পরমমানে রূপান্তরে $|x - \\text{গড়}| < \\text{দূরত্ব}$।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "পরমমান অসমতার সমাধান ও রূপান্তর",
        "description": "পরমমানযুক্ত অসমতা সমাধান, সংখ্যারেখা ব্যবধি এবং পরমমান চিহ্নে প্রকাশ।",
        "solvingStrategy": "১) $|X|<a$ থাকলে $-a<X<a$ করে $x$ আলাদা করুন। ২) ব্যবধি থেকে পরমমানে $|x-m|<d$ শর্টকাট প্রয়োগ করুন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-1653",
            "question": "$\\frac{2\\sqrt{625}}{\\sqrt{100}}$ সংখ্যাটি- [JU'19-20]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "মূলদ"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "অমূলদ"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "জটিল"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "কোনোটিই নয়"
              }
            ],
            "answer": "a",
            "explanation": "",
            "university": "JU",
            "year": "19-20",
            "topic": "T-01: সংখ্যার প্রকৃতি সনাক্তকরণ"
          },
          {
            "id": "math-q-1654",
            "question": "$\\log_{10} 0$ এর মান কত? [JnU'13-14]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "0"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "অসংজ্ঞায়িত"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "0.5"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "1\r\n(b)\r\n\r\nউত্তরাস একাডেমিক এন্ড এডমিশন কেয়ার $\\qquad\\qquad\\qquad$ ২৫৫ $\\qquad\\qquad\\qquad$ পরিবর্তনের প্রত্যয়ে নিরন্তর পথচলা..."
              }
            ],
            "answer": "a",
            "explanation": "",
            "university": "JnU",
            "year": "13-14",
            "topic": "T-01: সংখ্যার প্রকৃতি সনাক্তকরণ"
          },
          {
            "id": "math-q-1655",
            "question": "$|3-\\frac{1}{x}|<\\frac{1}{2}$ অসমতার সমাধান সেট-\r\n[JnU'25-26; DU'18-19]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{2}{7}<x<\\frac{2}{5}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{-2}{7}<x<\\frac{-2}{5}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{1}{8}<x<\\frac{1}{7}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{1}{7}>x>\\frac{2}{5}$"
              }
            ],
            "answer": "a",
            "explanation": "Sol$^n$: $|3-\\frac{1}{x}|<\\frac{1}{2} \\Rightarrow |\\frac{1}{x}-3|<\\frac{1}{2}$ [$\\because |m-n|=|n-m|$]\r\n$\\Rightarrow -\\frac{1}{2}<\\frac{1}{x}-3<\\frac{1}{2} \\Rightarrow 3-\\frac{1}{2}<\\frac{1}{x}<3+\\frac{1}{2}$\r\n$\\Rightarrow \\frac{5}{2}<\\frac{1}{x}<\\frac{7}{2} \\Rightarrow \\frac{2}{5}>x>\\frac{2}{7}$ অর্থাৎ, $\\frac{2}{7}<x<\\frac{2}{5}$",
            "university": "Admission",
            "year": "",
            "topic": "T-02: পরমমান সংক্রান্ত অসমতায় \"<\" বা \"\\le\" চিহ্ন থাকলে"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-1656",
            "question": "$0<|x-1|\\le 2$ অসমতার সমাধান সেট কোনটি?\r\n[RU'25-26]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$(-1,3]$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$[-1,3]$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$(-1,1)\\cup(1,3)$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$[-1,1)\\cup[1,3]$"
              }
            ],
            "answer": "a",
            "explanation": "Sol$^n$: $x-1 \\le 2$ অথবা $x-1\\ge -2$\r\n$\\Rightarrow x\\le 3$ অথবা $x\\ge -1$\r\nএবং\r\n$x-1>0$ অথবা $x-1<0$\r\n$x>1$ অথবা $x<1$\r\n$\\therefore$ সমাধান $[-1,1)\\cup(1,3]$",
            "university": "RU",
            "year": "25-26",
            "topic": "T-02: পরমমান সংক্রান্ত অসমতায় \"<\" বা \"\\le\" চিহ্ন থাকলে",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "সুপ্রিয়াম ও ইনফিমামের গভীর গাণিতিক অর্থ",
        "description": "সর্বোচ্চ মান (Maximum) এবং সুপ্রিয়াম (Supremum) এর সূক্ষ্ম পার্থক্য কী?",
        "promptQuery": "বাস্তব সংখ্যায় সুপ্রিয়াম ও ইনফিমামের সংজ্ঞা এবং খোলা ব্যবধি $(a, b)$ তে কেন এদের চরম মান থাকে না তা বুঝিয়ে দাও।"
      },
      {
        "title": "অসমতায় ঋণাত্মক দিয়ে গুণ করলে কেন দিক উল্টায়?",
        "description": "সংখ্যারেখার প্রতিফলন ও ক্রমস্বীকার্যের সাহায্যে সহজ প্রমাণ।",
        "promptQuery": "অসমতায় ঋণাত্মক সংখ্যা দ্বারা গুণ বা ভাগ করলে কেন অসমতার দিক পরিবর্তিত হয় তার গাণিতিক ভিত্তি প্রমাণ করো।"
      },
      {
        "title": "ত্রিভুজ অসমতা $|a+b| \\le |a|+|b|$ এর প্রমাণ",
        "description": "বীজগণিতীয় প্রমাণ এবং কখন সমতা ($|a+b|=|a|+|b|$) বজায় থাকে?",
        "promptQuery": "বাস্তব সংখ্যার ত্রিভুজ অসমতা প্রমাণ করো এবং কোন শর্তে সমতা প্রতিষ্ঠিত হয় তা ব্যাখ্যা করো।"
      },
      {
        "title": "চিহ্ন সারণি (Wavy Curve / Sign Chart) মেথড",
        "description": "দ্বিঘাত ও উচ্চঘাতের অসমতা ১০ সেকেন্ডে সমাধানের সেরা পদ্ধতি।",
        "promptQuery": "বহুপদী ও মূলদ ভগ্নাংশের অসমতা সমাধানে Wavy Curve Method বা চিহ্ন সারণি কৌশল উদাহরণসহ দেখাও।"
      },
      {
        "title": "বাস্তব সংখ্যা অধ্যায়ের শীর্ষ ভর্তি পরীক্ষা ফাঁদ",
        "description": "ভগ্নাংশ ব্যস্তকরণের সময় ডোমেন লঙ্ঘন এবং সুপ্রিয়ামের সাধারণ বিভ্রান্তি।",
        "promptQuery": "বাস্তব সংখ্যা ও অসমতা অধ্যায়ের ভর্তি পরীক্ষায় ছাত্রছাত্রীদের সবচেয়ে বেশি হওয়া ৩টি সাধারণ ভুল আলোচনা করো।"
      }
    ],
    "questionCount": 92
  },
  {
    "id": "ch-linear-prog",
    "paper": "Second-Paper",
    "paperBn": "২য় পত্র",
    "chapterNum": 2,
    "nameBn": "যোগাশ্রয়ী প্রোগ্রাম",
    "nameEn": "Linear Programming",
    "rawName": "যোগাশ্রয়ী প্রোগ্রাম",
    "summary": "উচ্চতর গণিত ২য় পত্রের লিনিয়ার প্রোগ্রামিং অধ্যায়। উদ্দেশ্যমূলক অপেক্ষক ($Z = ax+by$), সীমাবদ্ধতা অসমতা, সমাধান এলাকা (Feasible Region) এবং শীর্ষবিন্দু পদ্ধতিতে সর্বোচ্চ বা সর্বনিম্ন মান নির্ণয়।",
    "topics": [
      "উদ্দেশ্যমূলক অপেক্ষক ও সীমাবদ্ধতা",
      "অসমতার সমাধান এলাকা (Feasible Region)",
      "প্রান্তীয় বিন্দু পদ্ধতি (Corner Point Method)",
      "সর্বোচ্চ ও সর্বনিম্ন মান নির্ণয়"
    ],
    "concepts": [
      {
        "id": "c-lp-01",
        "title": "সমাধান এলাকা ও প্রান্তীয় বিন্দু পদ্ধতি (Feasible Region & Corner Point Method)",
        "topic": "প্রান্তীয় বিন্দু পদ্ধতি (Corner Point Method)",
        "summary": "সীমাবদ্ধতা অসমতার ছেদবিন্দু নির্ণয় এবং উদ্দেশ্যমূলক অপেক্ষকে মান বসিয়ে চরম মান নির্ধারণ।",
        "intro": {
          "what": "যোগাশ্রয়ী প্রোগ্রামিং হলো সীমিত সম্পদের অধীনে রৈখিক শর্তাবলী মেনে কোনো লক্ষ্য বা উদ্দেশ্যমূলক অপেক্ষক $Z = ax + by$ এর সর্বোচ্চ বা সর্বনিম্ন মান বের করার গাণিতিক কৌশল।",
          "whyImportant": "ভর্তি পরীক্ষায় ৩-৪টি অসমতা দিয়ে $Z$ এর সর্বোচ্চ বা সর্বনিম্ন মান বের করার প্রশ্ন আসে যা প্রান্তীয় বিন্দু দিয়ে ২ মিনিটে নির্ভুল করা যায়।",
          "whereUsed": "শিল্প কারখানায় উৎপাদন পরিকল্পনা, পরিবহন লজিস্টিকস ও পোর্টফোলিও অপটিমাইজেশন।",
          "prerequisites": "সরলরেখার লেখচিত্র ও যুগপৎ সমীকরণ সমাধান।"
        },
        "easyExplanation": [
          "মৌলিক উপপাদ্য: সমাধান এলাকা যদি সীমাবদ্ধ (Bounded) হয়, তবে উদ্দেশ্যমূলক অপেক্ষক $Z$ এর সর্বোচ্চ ও সর্বনিম্ন মান সর্বদা সমাধান এলাকার শীর্ষবিন্দুগুলোতে (Corner Points) অবস্থান করবে!",
          "কাজের ধাপ: ১) অসমতাগুলোকে সমীকরণ ধরে রেখাগুলোর ছেদবিন্দু ও অক্ষের ছেদবিন্দুগুলো বের করুন। ২) সমাধান এলাকার শীর্ষবিন্দুগুলো ($x, y$) চিহ্নিত করুন। ৩) প্রতিটি শীর্ষবিন্দুর মান $Z$ এ বসান। সবচেয়ে বড় মানটিই সর্বোচ্চ মান, সবচেয়ে ছোটটিই সর্বনিম্ন মান।"
        ],
        "formulas": [
          {
            "latex": "Z = ax + by \\quad (\\text{উদ্দেশ্যমূলক অপেক্ষক বা Objective Function})",
            "name": "উদ্দেশ্যমূলক অপেক্ষক",
            "meaning": "যে অপেক্ষকের মানকে সর্বোচ্চ (মুনাফা) বা সর্বনিম্ন (ব্যয়) করতে হয়।",
            "whenToUse": "সর্বোচ্চ/সর্বনিম্ন মান নির্ণয়ে শীর্ষবিন্দুগুলো প্রতিস্থাপনে।",
            "conditions": "$x \\ge 0, y \\ge 0$ (অঋণাত্মক শর্ত সাধারণত সর্বদা থাকে)।",
            "variables": "$x, y$: সিদ্ধান্ত চলক (Decision variables), $a, b$: সহগ।",
            "commonMistakes": "অঋণাত্মক শর্ত বিবেচনা না করে ঋণাত্মক চতুর্ভাগে যাওয়া।"
          },
          {
            "latex": "Z_{\\max} = \\max\\{Z(P_1), Z(P_2), \\dots, Z(P_n)\\}",
            "name": "প্রান্তীয় বিন্দু অপটিমাইজেশন নীতি",
            "meaning": "শীর্ষবিন্দুগুলোতে প্রাপ্ত $Z$ এর মানের মধ্যে সর্বোচ্চটিই চূড়ান্ত সর্বোচ্চ।",
            "whenToUse": "সমাধান এলাকার সকল কোণিক বিন্দু পাওয়ার পর।",
            "conditions": "সমাধান এলাকা সীমাবদ্ধ হতে হবে।",
            "variables": "$P_1, P_2, \\dots$: সমাধান এলাকার কোণিক শীর্ষবিন্দুসমূহ।",
            "commonMistakes": "কোনো একটি শীর্ষবিন্দু বাদ দিয়ে হিসাব করা।"
          }
        ],
        "analysis": {
          "conditions": "যদি সমাধান এলাকা অসমাবদ্ধ (Unbounded) হয়, তবে সর্বোচ্চ মান নাও থাকতে পারে।",
          "variations": "যদি দুটি ভিন্ন শীর্ষবিন্দুতে $Z$ এর মান একই এবং সর্বোচ্চ হয়, তবে ঐ বিন্দুদ্বয়ের সংযোগকারী রেখাংশের প্রতিটি বিন্দুতেই সর্বোচ্চ মান পাওয়া যাবে (Infinite Solutions)।",
          "relationships": "অর্থনীতিতে লাভ-লোকসান বিশ্লেষণের ব্রেক-ইভেন পয়েন্টের সাথে এর গভীর মিল রয়েছে।",
          "transformations": "অসমতা $\\le$ হলে মূলবিন্দুর দিকে সমাধান এলাকা হয় (যদি ধ্রুবক ধনাত্মক হয়), আর $\\ge$ হলে মূলবিন্দুর বিপরীত দিকে।",
          "misunderstandings": "শীর্ষবিন্দু না বের করে অনেকে এলাকার ভেতরের কোনো র্যান্ডম বিন্দু নিয়ে মান বের করার ভুল করে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "উদ্দেশ্যমূলক অপেক্ষকের চরম মান নির্ণয়",
            "recognition": "প্রশ্নে $Z = 3x + 4y$ দেওয়া থাকবে এবং শর্ত $x+y \\le 4, x \\ge 0, y \\ge 0$ ইত্যাদি থাকবে।",
            "requiredConcept": "শীর্ষবিন্দু বের করে $Z$ এ মান বসানো।",
            "strategy": "১) অক্ষীয় ছেদবিন্দু ও রেখাগুলোর ছেদবিন্দু বের করুন। ২) শীর্ষবিন্দুগুলো ছকে লিখে $Z$ এর মান বের করুন।",
            "keySteps": [
              "শীর্ষবিন্দু চিহ্নিতকরণ",
              "$Z$ এর মান গণনা",
              "সর্বোচ্চ/সর্বনিম্ন নির্ধারণ"
            ],
            "commonTraps": "মূলবিন্দু $(0, 0)$ শীর্ষবিন্দু হিসেবে ধরতে ভুলে যাওয়া।"
          }
        ],
        "easyExample": {
          "problem": "সীমাবদ্ধতা: $x + y \\le 4, x \\ge 0, y \\ge 0$ এর সাপেক্ষে $Z = 2x + 3y$ এর সর্বোচ্চ মান কত?",
          "solutionSteps": [
            "অসমতাগুলোর সমাধান এলাকা ১ম চতুর্ভাগে অবস্থিত একটি ত্রিভুজ।",
            "এর শীর্ষবিন্দুগুলো হলো: $O(0, 0)$, $A(4, 0)$, এবং $B(0, 4)$।",
            "প্রতিটি বিন্দুতে $Z$ এর মান বের করি:",
            "$Z(0, 0) = 2(0) + 3(0) = 0$",
            "$Z(4, 0) = 2(4) + 3(0) = 8$",
            "$Z(0, 4) = 2(0) + 3(4) = 12$",
            "অতএব $Z$ এর সর্বোচ্চ মান $12$ (বিন্দু $(0, 4)$ এ)।"
          ],
          "answer": "$Z_{\\max} = 12$"
        },
        "examExample": {
          "examTag": "DU / RU Admission",
          "problem": "শর্তাবলি: $x + 2y \\le 10, 2x + y \\le 10, x \\ge 0, y \\ge 0$ এর সাপেক্ষে $Z = 3x + 4y$ এর সর্বোচ্চ মান কত?",
          "recognitionApproach": "দুটি রেখার ছেদবিন্দু ও অক্ষের ছেদবিন্দুগুলো বের করে শীর্ষবিন্দু পদ্ধতিতে মান নির্ণয়।",
          "stepByStepSolution": "১) রেখা ১: $x + 2y = 10 \\implies (10, 0)$ ও $(0, 5)$।\n২) রেখা ২: $2x + y = 10 \\implies (5, 0)$ ও $(0, 10)$।\n৩) রেখাদ্বয়ের ছেদবিন্দু: বিয়োগ ও অপনয়ন করে পাই $x = 10/3, y = 10/3$ (বা $x=10/3$)। সমাধান এলাকায় কার্যকর শীর্ষবিন্দুসমূহ: $(0, 0), (5, 0), (10/3, 10/3), (0, 5)$।\n৪) মান পরীক্ষা:\n$Z(0, 0) = 0$\n$Z(5, 0) = 3(5) + 0 = 15$\n$Z(0, 5) = 0 + 4(5) = 20$\n$Z(10/3, 10/3) = 3(10/3) + 4(10/3) = 70/3 \\approx 23.33$।\n৫) সর্বোচ্চ মান $= 70/3 = 23\\frac{1}{3}$।",
          "whyItWorks": "উভয় সীমাবদ্ধতার সমন্বিত প্রভাবে ছেদবিন্দুই সবচেয়ে দূরবর্তী কার্যকরী প্রান্তীয় বিন্দু।",
          "calcAvoidanceTrick": "ছেদবিন্দুর প্রতিসমতা দেখেই $70/3$ সবচেয়ে বড় হওয়ার সম্ভাবনা যাচাই করা।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$Z = ax + by$",
            "শীর্ষবিন্দুতেই চরম মান থাকে",
            "অঋণাত্মক শর্ত: $x \\ge 0, y \\ge 0$"
          ],
          "importantConditions": [
            "সমাধান এলাকা অবশ্যই সকল অসমতাকে একসাথে সিদ্ধ করতে হবে।"
          ],
          "keyObservations": [
            "দুটি বিন্দুতে সর্বোচ্চ হলে সংযোগকারী রেখার সব বিন্দুতেই সর্বোচ্চ।"
          ],
          "recognitionTips": [
            "সবগুলো শীর্ষবিন্দুর মান ঝটপট ছকে বের করে তুলনা করো।"
          ],
          "commonMistakes": [
            "ছেদবিন্দু না বের করে কেবল অক্ষীয় বিন্দু পরীক্ষা করা।"
          ],
          "summary": "শীর্ষবিন্দুতেই সমাধান। ছেদবিন্দু ও অক্ষীয় বিন্দু বের করে $Z$ এ বসিয়ে তুলনা করো।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "যোগাশ্রয়ী প্রোগ্রামের সর্বোচ্চ ও সর্বনিম্ন মান",
        "description": "সীমাবদ্ধতা অসমতা হতে শীর্ষবিন্দু বের করে উদ্দেশ্যমূলক অপেক্ষকের চরম মান নির্ধারণ।",
        "solvingStrategy": "১) রেখাগুলোর অক্ষীয় ছেদবিন্দু ও পারস্পরিক ছেদবিন্দু বের করুন। ২) শীর্ষবিন্দুগুলো $Z$ এ বসিয়ে সর্বোচ্চ/সর্বনিম্ন নিন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-1745",
            "question": "নিচের অসমতাগুলো পরমমান চিহ্নের সাহায্যে প্রকাশ কর:\r\n(i) $-1 < 2x - 3 < 5$\r\n(ii) $-2 < 3 - x < 8$",
            "options": [],
            "answer": "",
            "explanation": "",
            "university": "Admission",
            "year": "",
            "topic": "Chapter 02: যোগাশ্রয়ী প্রোগ্রাম"
          },
          {
            "id": "math-q-1746",
            "question": "$|x - 5| > 4$; অসমতাটি সমাধান কর এবং সংখ্যা রেখায় দেখাও।",
            "options": [],
            "answer": "",
            "explanation": "",
            "university": "Admission",
            "year": "",
            "topic": "Chapter 02: যোগাশ্রয়ী প্রোগ্রাম"
          },
          {
            "id": "math-q-1747",
            "question": "প্রমাণ কর যে, যেকোনো বিজোড় সংখ্যার বর্গ বিজোড় সংখ্যা।",
            "options": [],
            "answer": "",
            "explanation": "",
            "university": "Admission",
            "year": "",
            "topic": "Chapter 02: যোগাশ্রয়ী প্রোগ্রাম"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-1748",
            "question": "$x$-এর মান কত হলে, $\\frac{x + 2}{|x + 1|}$ এর মান বাস্তব হবে? [Ans: $\\mathbb{R} - \\{-1\\}$]",
            "options": [],
            "answer": "",
            "explanation": "",
            "university": "Admission",
            "year": "",
            "topic": "Chapter 02: যোগাশ্রয়ী প্রোগ্রাম",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "কেন চরম মান কেবল শীর্ষবিন্দুতেই থাকে?",
        "description": "রৈখিক অপেক্ষকের ঢাল ও সমাধান এলাকার উত্তলতার (Convexity) জ্যামিতিক প্রমাণ।",
        "promptQuery": "যোগাশ্রয়ী প্রোগ্রামে উদ্দেশ্যমূলক অপেক্ষকের সর্বোচ্চ বা সর্বনিম্ন মান কেন সমাধান এলাকার শীর্ষবিন্দুতেই থাকে তার গাণিতিক প্রমাণ বুঝিয়ে দাও।"
      },
      {
        "title": "অসীম সংখ্যক সমাধান (Multiple Optimal Solutions) কখন হয়?",
        "description": "উদ্দেশ্যমূলক অপেক্ষকের ঢাল কোনো সীমাবদ্ধতা রেখার ঢালের সমান হলে কী ঘটে?",
        "promptQuery": "যোগাশ্রয়ী প্রোগ্রামে একাধিক বা অসীম সংখ্যক সর্বোচ্চ সমাধান থাকার শর্ত উদাহরণসহ ব্যাখ্যা করো।"
      },
      {
        "title": "অসমাবদ্ধ সমাধান এলাকা (Unbounded Region) এর বিশ্লেষণ",
        "description": "যখন সমাধান এলাকা অসীম পর্যন্ত বিস্তৃত থাকে তখন কীভাবে সর্বোচ্চ বা সর্বনিম্ন মান যাচাই করবেন?",
        "promptQuery": "অসমাবদ্ধ সমাধান এলাকার ক্ষেত্রে যোগাশ্রয়ী প্রোগ্রামের সমাধান প্রক্রিয়া আলোচনা করো।"
      },
      {
        "title": "বাস্তব জীবনের অপটিমাইজেশন সমস্যা গঠন",
        "description": "কথার অংক থেকে চলক, উদ্দেশ্যমূলক অপেক্ষক ও সীমাবদ্ধতা সমীকরণ লেখার নিয়ম।",
        "promptQuery": "শিল্প কারখানার লাভ সর্বোচ্চকরণের একটি বাস্তব কথার অংক থেকে যোগাশ্রয়ী মডেল গঠনের ধাপসমূহ দেখাও।"
      },
      {
        "title": "যোগাশ্রয়ী প্রোগ্রাম অধ্যায়ের শীর্ষ ভর্তি পরীক্ষা শর্টকাট",
        "description": "চিত্র না এঁকেই কীভাবে দ্রুত শীর্ষবিন্দুগুলো খুঁজে বের করবেন।",
        "promptQuery": "ভর্তি পরীক্ষার এমসিকিউতে গ্রাফ না এঁকে দ্রুত যোগাশ্রয়ী প্রোগ্রামের সমাধান বের করার শর্টকাট টেকনিক আলোচনা করো।"
      }
    ],
    "questionCount": 22
  },
  {
    "id": "ch-complex",
    "paper": "Second-Paper",
    "paperBn": "২য় পত্র",
    "chapterNum": 3,
    "nameBn": "জটিল সংখ্যা",
    "nameEn": "Complex Numbers",
    "rawName": "জটিল সংখ্যা",
    "summary": "উচ্চতর গণিত ২য় পত্রের অত্যন্ত সমৃদ্ধ ও গুরুত্বপূর্ণ অধ্যায়। কাল্পনিক একক $i$ এর ঘাত, মডুলাস ও মুখ্য আর্গুমেন্ট, এককের ঘনমূল ($omega$) এর ধর্মাবলি, ডিময়ভারের উপপাদ্য এবং জটিল সংখ্যার সঞ্চারপথ থেকে ইঞ্জিনিয়ারিং ও ভার্সিটিতে প্রতিবছর বহু প্রশ্ন আসে।",
    "topics": [
      "কাল্পনিক একক $i$ ও অনুবন্ধী জটিল সংখ্যা",
      "মডুলাস ও মুখ্য আর্গুমেন্ট নির্ণয়",
      "এককের কাল্পনিক ঘনমূল ($omega$)",
      "ডিময়ভারের উপপাদ্য ও বর্গমূল/ঘনমূল",
      "জটিল সংখ্যার সঞ্চারপথ ও জ্যামিতি"
    ],
    "concepts": [
      {
        "id": "c-complex-01",
        "title": "মডুলাস, মুখ্য আর্গুমেন্ট ও পোলার আকার (Modulus, Principal Argument & Polar Form)",
        "topic": "মডুলাস ও মুখ্য আর্গুমেন্ট নির্ণয়",
        "summary": "জটিল সংখ্যার পরম মান, চতুর্ভাগভিত্তিক মুখ্য আর্গুমেন্ট ($-pi < \theta le pi$) এবং অয়লারের সূত্র।",
        "intro": {
          "what": "জটিল সংখ্যা $z = x + iy$ এর মডুলাস হলো মূলবিন্দু হতে তার দূরত্ব $|z| = sqrt{x^2 + y^2}$। মুখ্য আর্গুমেন্ট হলো ধনাত্মক বাস্তব অক্ষের সাথে উৎপন্ন কোণ যা $(-\\pi, \\pi]$ ব্যবধিতে সীমাবদ্ধ থাকে।",
          "whyImportant": "ভর্তি পরীক্ষায় আর্গুমেন্ট নির্ণয়ের প্রশ্নে প্রায় ৭০% শিক্ষার্থী চতুর্ভাগীয় চিহ্ন ভুলের কারণে নেগেটিভ মার্ক পায়।",
          "whereUsed": "ইলেকট্রিক্যাল ইঞ্জিনিয়ারিংয়ে AC সার্কিট বিশ্লেষণ (ফেজর ডায়াগ্রাম), কোয়ান্টাম ওয়েভ ফাংশন ও সিগন্যাল প্রসেসিংয়ে ফুরিয়ার রূপান্তরে।",
          "prerequisites": "পিথাগোরাসের উপপাদ্য ও চতুর্ভাগীয় কোণ।"
        },
        "easyExplanation": [
          "মডুলাস বের করা একদম সহজ: রিয়েল পার্টের বর্গ প্লাস ইমাজিনারি পার্টের বর্গের যোগফলের বর্গমূল ($|z| = \\sqrt{x^2+y^2}$)। এতে কখনোই $i$ আসবে না!",
          "মুখ্য আর্গুমেন্ট $\\theta$ এর চতুর্ভাগীয় নিয়ম: ১) ১ম চতুর্ভাগ ($x>0, y>0$): $\\theta = \\tan^{-1}|y/x|$। ২) ২য় চতুর্ভাগ ($x<0, y>0$): $\\theta = \\pi - \\tan^{-1}|y/x|$। ৩) ৩য় চতুর্ভাগ ($x<0, y<0$): $\\theta = -\\pi + \\tan^{-1}|y/x|$। ৪) ৪র্থ চতুর্ভাগ ($x>0, y<0$): $\\theta = -\\tan^{-1}|y/x|$।"
        ],
        "formulas": [
          {
            "latex": "|z| = \\sqrt{x^2 + y^2}, \\quad z\\bar{z} = |z|^2",
            "name": "মডুলাসের সূত্র ও অনুবন্ধী সম্পর্ক",
            "meaning": "জটিল সংখ্যার মান এবং কোনো জটিল সংখ্যার সাথে তার অনুবন্ধী গুণ করলে মডুলাসের বর্গ পাওয়া যায়।",
            "whenToUse": "মান বের করতে এবং ভগ্নাংশের হর থেকে $i$ মুক্ত করতে।",
            "conditions": "$x, y \\in \\mathbb{R}$।",
            "variables": "$x$: বাস্তব অংশ, $y$: কাল্পনিক অংশ।",
            "commonMistakes": "বর্গ করার সময় $i$ রেখে $x^2 - y^2$ লিখে ফেলা।"
          },
          {
            "latex": "\\theta \\in (-\\pi, \\pi] \\quad (\\text{মুখ্য আর্গুমেন্টের ব্যবধি})",
            "name": "মুখ্য আর্গুমেন্ট (Principal Argument)",
            "meaning": "আর্গুমেন্টের মান সর্বদা $-\\pi$ থেকে $+\\pi$ এর মধ্যে হতে হবে।",
            "whenToUse": "প্রশ্নে মুখ্য আর্গুমেন্ট চাওয়া হলে।",
            "conditions": "$-\\pi < \\theta \\le \\pi$।",
            "variables": "$\\theta$: আর্গুমেন্ট কোণ।",
            "commonMistakes": "$180^\\circ$ এর বেশি কোণ রেখে দেওয়া (যেমন $240^\\circ$ না লিখে $-120^\\circ$ লিখতে হয়)।"
          },
          {
            "latex": "z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}",
            "name": "পোলার ও অয়লারের আকার (Euler's Form)",
            "meaning": "জটিল সংখ্যার কোণ ও দূরত্বের মাধ্যমে প্রকাশ।",
            "whenToUse": "জটিল সংখ্যার গুণ, ভাগ ও উচ্চঘাত নির্ণয়ে।",
            "conditions": "$r = |z|, \\theta = \\text{Arg}(z)$।",
            "variables": "$r$: মডুলাস, $\\theta$: আর্গুমেন্ট।",
            "commonMistakes": "রেডিয়ানের জায়গায় ডিগ্রি রাখা অয়লার সূত্রে।"
          }
        ],
        "analysis": {
          "conditions": "গুণফলের মডুলাস ও আর্গুমেন্ট: $|z_1 z_2| = |z_1||z_2|$ এবং $\\text{Arg}(z_1 z_2) = \\text{Arg}(z_1) + \\text{Arg}(z_2)$ (প্রয়োজনে $2\\pi$ সমন্বয়)।",
          "variations": "ভাগফলের ক্ষেত্রে: $|z_1 / z_2| = |z_1| / |z_2|$ এবং $\\text{Arg}(z_1 / z_2) = \\text{Arg}(z_1) - \\text{Arg}(z_2)$।",
          "relationships": "বিশুদ্ধ কাল্পনিক সংখ্যার আর্গুমেন্ট: ধনাত্মক কাল্পনিক হলে $+\\pi/2$, ঋণাত্মক কাল্পনিক হলে $-\\pi/2$।",
          "transformations": "$i = e^{i\\pi/2}, -1 = e^{i\\pi}, -i = e^{-i\\pi/2}$।",
          "misunderstandings": "$-1 - i\\sqrt{3}$ এর আর্গুমেন্ট অনেকে $240^\\circ$ লেখে, কিন্তু মুখ্য আর্গুমেন্টে এটি $-120^\\circ$ বা $-2\\pi/3$।"
        },
        "questionPatterns": [
          {
            "typeTitle": "জটিল সংখ্যার মুখ্য আর্গুমেন্ট নির্ণয়",
            "recognition": "প্রশ্নে একটি জটিল সংখ্যা যেমন $-1 - i$ বা $-\\sqrt{3} + i$ দেওয়া থাকবে এবং আর্গুমেন্ট জানতে চাইবে।",
            "requiredConcept": "চতুর্ভাগভিত্তিক কোণ সমন্বয়।",
            "strategy": "১) বাস্তব ও কাল্পনিক অংশের চিহ্ন দেখে চতুর্ভাগ নির্ধারণ করুন। ২) সূক্ষ্মকোণ $\\alpha = \\tan^{-1}|y/x|$ বের করুন। ৩) চতুর্ভাগের সূত্রে $\\theta$ নির্ধারণ করুন।",
            "keySteps": [
              "চতুর্ভাগ চিহ্নিত করা",
              "$\\alpha$ বের করা",
              "মুখ্য আর্গুমেন্ট লেখা"
            ],
            "commonTraps": "৩য় চতুর্ভাগে $\\pi + \\alpha$ লিখে ফেলা (মুখ্য আর্গুমেন্টে $-\\pi + \\alpha$ হবে)।"
          }
        ],
        "easyExample": {
          "problem": "$z = -1 + i\\sqrt{3}$ জটিল সংখ্যাটির মডুলাস ও মুখ্য আর্গুমেন্ট নির্ণয় করো।",
          "solutionSteps": [
            "বাস্তব অংশ $x = -1$, কাল্পনিক অংশ $y = \\sqrt{3}$।",
            "মডুলাস: $|z| = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$।",
            "যেহেতু $x < 0, y > 0$, বিন্দুটি ২য় চতুর্ভাগে অবস্থিত।",
            "সূক্ষ্মকোণ $\\alpha = \\tan^{-1}\\left|\\frac{\\sqrt{3}}{-1}\\right| = \\tan^{-1}(\\sqrt{3}) = \\frac{\\pi}{3}$ (বা $60^\\circ$)।",
            "২য় চতুর্ভাগে মুখ্য আর্গুমেন্ট $\\theta = \\pi - \\alpha = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$ (বা $120^\\circ$)।"
          ],
          "answer": "মডুলাস: $2$, মুখ্য আর্গুমেন্ট: $\\frac{2\\pi}{3}$"
        },
        "examExample": {
          "examTag": "BUET / DU / GST Admission",
          "problem": "$z = -1 - i$ হলে এর মুখ্য আর্গুমেন্ট কত?",
          "recognitionApproach": "$x = -1 < 0$ এবং $y = -1 < 0$, সুতরাং এটি ৩য় চতুর্ভাগে অবস্থিত।",
          "stepByStepSolution": "১) সূক্ষ্মকোণ $\\alpha = \\tan^{-1}\\left|\\frac{-1}{-1}\\right| = \\tan^{-1}(1) = \\frac{\\pi}{4}$।\n২) ৩য় চতুর্ভাগে মুখ্য আর্গুমেন্টের সূত্র: $\\theta = -\\pi + \\alpha$।\n৩) $\\theta = -\\pi + \\frac{\\pi}{4} = -\\frac{3\\pi}{4}$ (বা $-135^\\circ$)।",
          "whyItWorks": "মুখ্য আর্গুমেন্টের ব্যবধি $(-\\pi, \\pi]$ বজায় রাখতে ৩য় চতুর্ভাগে ঘড়ির কাঁটার দিকে কোণ পরিমাপ করা হয়।",
          "calcAvoidanceTrick": "৩য় চতুর্ভাগে মান সর্বদা ঋণাত্মক এবং $-90^circ$ থেকে $-180^circ$ এর মধ্যে, সরাসরি $-135^circ$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$|z| = \\sqrt{x^2+y^2}$",
            "১ম: $\\alpha$, ২য়: $\\pi-\\alpha$, ৩য়: $-\\pi+\\alpha$, ৪র্থ: $-\\alpha$",
            "$|z_1 z_2| = |z_1||z_2|$",
            "$\\text{Arg}(z_1 z_2) = \\text{Arg}(z_1) + \\text{Arg}(z_2)$"
          ],
          "importantConditions": [
            "মুখ্য আর্গুমেন্ট অবশ্যই $-\\pi < \\theta \\le \\pi$ এর মধ্যে থাকবে।"
          ],
          "keyObservations": [
            "$z\\bar{z} = |z|^2$ সর্বদা অঋণাত্মক বাস্তব সংখ্যা।"
          ],
          "recognitionTips": [
            "চিহ্ন দেখেই চতুর্ভাগ ঠিক করো, অন্ধভাবে ট্যান ইনভার্স করো না।"
          ],
          "commonMistakes": [
            "৩য় চতুর্ভাগে প্লাস কোণ ($225^\\circ$) লিখে ফেলা।"
          ],
          "summary": "মডুলাস মূলবিন্দুর দূরত্ব। মুখ্য আর্গুমেন্ট $-\\pi$ থেকে $\\pi$ এর মধ্যে চতুর্ভাগ অনুযায়ী নির্ণয়।"
        }
      },
      {
        "id": "c-complex-02",
        "title": "এককের ঘনমূল ও ওমেগার বৈশিষ্ট্য (Cube Roots of Unity & Omega)",
        "topic": "এককের কাল্পনিক ঘনমূল ($omega$)",
        "summary": "$1, \\omega, \\omega^2$ এর সম্পর্ক, ঘাত হ্রাসকরণ ($omega^3 = 1$), এবং চক্রক্রমিক বীজগাণিতিক সরলীকরণ।",
        "intro": {
          "what": "১ এর তিনটি ঘনমূল হলো $1, \\omega, \\omega^2$ যেখানে $\\omega = \\frac{-1+i\\sqrt{3}}{2}$ এবং $\\omega^2 = \\frac{-1-i\\sqrt{3}}{2}$। এদের সমষ্টি শূন্য ($1 + \\omega + \\omega^2 = 0$) এবং গুণফল এক ($\\omega^3 = 1$)।",
          "whyImportant": "ভর্তি পরীক্ষার বীজগণিত অংশের সবচেয়ে কমন ও উচ্চফলনশীল টপিক। প্রায় প্রতি বছর ওমেগার ঘাত ও ধারা থেকে প্রশ্ন থাকে।",
          "whereUsed": "ত্রি-দশা বিদ্যুৎ ব্যবস্থা (Three-phase electric power system) ও প্রতিসম উপাদান বিশ্লেষণে।",
          "prerequisites": "দ্বিঘাত সমীকরণ ও কাল্পনিক একক $i$।"
        },
        "easyExplanation": [
          "ওমেগা হলো একটি ৩-পর্যায়ের চক্র (Periodicity of 3)। ওমেগার যেকোনো বিশাল ঘাত থাকলে তাকে ৩ দিয়ে ভাগ করুন, ভাগশেষ যা থাকবে তাই হবে নতুন ঘাত! যেমন: $\\omega^{100} = \\omega^{3 \\times 33 + 1} = \\omega^1 = \\omega$। যদি ভাগশেষ ০ হয় তবে মান ১।",
          "গোল্ডেন যোগফল সূত্র: $1 + \\omega + \\omega^2 = 0$। এর থেকে পাই: $1 + \\omega = -\\omega^2$, $1 + \\omega^2 = -\\omega$, এবং $\\omega + \\omega^2 = -1$। যেকোনো জায়গায় দুটি পেলে তৃতীয়টির বিপরীত চিহ্ন দিয়ে প্রতিস্থাপন করুন!"
        ],
        "formulas": [
          {
            "latex": "1 + \\omega + \\omega^2 = 0, \\quad \\omega^3 = 1",
            "name": "এককের ঘনমূলের গোল্ডেন সূত্রদ্বয়",
            "meaning": "তিনটি ঘনমূলের যোগফল শূন্য এবং ঘনফল এক।",
            "whenToUse": "ওমেগা যুক্ত যেকোনো রাশি সরলীকরণে।",
            "conditions": "$\\omega$ হলো ১ এর একটি কাল্পনিক ঘনমূল।",
            "variables": "$\\omega = \\frac{-1+i\\sqrt{3}}{2}, \\omega^2 = \\frac{-1-i\\sqrt{3}}{2}$।",
            "commonMistakes": "$\\omega^3 = -1$ মনে করা ($i^2 = -1$ কিন্তু $\\omega^3 = 1$)।"
          },
          {
            "latex": "\\omega^{3n} = 1, \\quad \\omega^{3n+1} = \\omega, \\quad \\omega^{3n+2} = \\omega^2",
            "name": "ওমেগার ঘাত হ্রাসের নিয়ম",
            "meaning": "ঘাতকে ৩ দিয়ে ভাগ করে ভাগশেষ নেওয়ার নিয়ম।",
            "whenToUse": "ওমেগার বড় ঘাতের মান নির্ণয়ে।",
            "conditions": "$n$ যেকোনো পূর্ণসংখ্যা।",
            "variables": "$n$: পূর্ণসংখ্যা।",
            "commonMistakes": "৪ দিয়ে ভাগ করা ($i$ এর জন্য ৪ দিয়ে ভাগ করতে হয়, $\\omega$ এর জন্য ৩ দিয়ে ভাগ)।"
          },
          {
            "latex": "a^3 + b^3 + c^3 - 3abc = (a+b+c)(a + b\\omega + c\\omega^2)(a + b\\omega^2 + c\\omega)",
            "name": "ওমেগা উৎপাদক সূত্র",
            "meaning": "উৎপাদকে বিশ্লেষণ ও জটিল বীজগণিতীয় প্রতিসম রূপ।",
            "whenToUse": "উচ্চতর ইঞ্জিনিয়ারিং ভর্তি পরীক্ষায় বীজগণিতীয় প্রমাণে।",
            "conditions": "বাস্তব বা জটিল যেকোনো রাশির জন্য প্রযোজ্য।",
            "variables": "$a, b, c$: পদসমূহ।",
            "commonMistakes": "ওমেগার ঘাতের বণ্টন ভুল করা।"
          }
        ],
        "analysis": {
          "conditions": "$\\omega$ এর মডুলাস ১: $|\\omega| = |\\omega^2| = 1$। অর্থাৎ তিনটি মূলই আর্গন্ড চিত্রে একক ব্যাসার্ধের বৃত্তের উপর $120^\\circ$ কোণে অবস্থিত।",
          "variations": "এককের ঘনমূল তিনটি একটি সমবাহু ত্রিভুজের শীর্ষবিন্দু গঠন করে।",
          "relationships": "$\\bar{\\omega} = \\omega^2$ এবং $\\frac{1}{\\omega} = \\omega^2$। অর্থাৎ ওমেগার অনুবন্ধীই হলো তার বর্গ এবং তার বিপরীত সংখ্যা!",
          "transformations": "যেকোনো তিনটি ক্রমিক ঘাতের যোগফল শূন্য: $\\omega^n + \\omega^{n+1} + \\omega^{n+2} = 0$।",
          "misunderstandings": "$i$ এবং $\\omega$ এর ঘাত নিয়ন্ত্রণের পার্থক্য না বোঝা ($i$ ৪ চক্রের, $\\omega$ ৩ চক্রের)।"
        },
        "questionPatterns": [
          {
            "typeTitle": "ওমেগা সরলীকরণ ও ব্র্যাকেট প্রতিস্থাপন",
            "recognition": "প্রশ্নে $(1 - \\omega + \\omega^2)^n$ বা $(1 + \\omega - \\omega^2)^n$ থাকবে।",
            "requiredConcept": "$1 + \\omega^2 = -\\omega$ প্রতিস্থাপন।",
            "strategy": "১) $1 + \\omega^2$ এর জায়গায় $-\\omega$ বসান। ২) ব্র্যাকেটের ভেতর $-2\\omega$ তৈরি করুন। ৩) ঘাত বিশ্লেষণ করে মান বের করুন।",
            "keySteps": [
              "গোল্ডেন সূত্র প্রয়োগ",
              "সমজাতীয় পদ একত্রিত করা",
              "ঘাত প্রয়োগ"
            ],
            "commonTraps": "চিহ্নের মাইনাস ভুলে যাওয়া।"
          }
        ],
        "easyExample": {
          "problem": "$\\omega^{2024} + \\omega^{2025} + \\omega^{2026}$ এর মান কত?",
          "solutionSteps": [
            "আমরা জানি যেকোনো তিনটি ক্রমিক ঘাতের যোগফল শূন্য হয়: $\\omega^n + \\omega^{n+1} + \\omega^{n+2} = \\omega^n(1 + \\omega + \\omega^2) = \\omega^n(0) = 0$।",
            "এখানে ঘাত তিনটি ২০২৪, ২০২৫, ২০২৬ যা তিনটি ক্রমিক সংখ্যা।",
            "অতএব সরাসরি মান $= 0$।"
          ],
          "answer": "$0$"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "$(1 - \\omega + \\omega^2)^4 + (1 + \\omega - \\omega^2)^4$ এর মান কত?",
          "recognitionApproach": "$1 + \\omega + \\omega^2 = 0$ সূত্র ব্যবহার করে দুটি পদকে একটি পদে রূপান্তর করতে হবে।",
          "stepByStepSolution": "১) প্রথম ব্র্যাকেটে: $1 + \\omega^2 = -\\omega$, সুতরাং $(1 + \\omega^2 - \\omega)^4 = (-\\omega - \\omega)^4 = (-2\\omega)^4 = 16\\omega^4 = 16\\omega$।\n২) দ্বিতীয় ব্র্যাকেটে: $1 + \\omega = -\\omega^2$, সুতরাং $(1 + \\omega - \\omega^2)^4 = (-\\omega^2 - \\omega^2)^4 = (-2\\omega^2)^4 = 16\\omega^8 = 16\\omega^2$।\n৩) যোগফল $= 16\\omega + 16\\omega^2 = 16(\\omega + \\omega^2)$।\n৪) আমরা জানি $\\omega + \\omega^2 = -1$।\n৫) অতএব মান $= 16(-1) = -16$।",
          "whyItWorks": "ওমেগার গোল্ডেন প্রতিস্থাপন দ্বি-পদীয় রাশিকে এক-পদীয় রাশিতে রূপান্তর করে দ্রুত সমাধান নিশ্চিত করে।",
          "calcAvoidanceTrick": "$(-2\\omega)^4 + (-2\\omega^2)^4 = 16(\\omega + \\omega^2) = 16(-1) = -16$ মুখে মুখে হিসাব।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$1+\\omega+\\omega^2=0$",
            "$\\omega^3=1$",
            "$\\omega^{3n+r}=\\omega^r$",
            "$\\omega+\\omega^2=-1$",
            "$\\frac{1}{\\omega}=\\omega^2$"
          ],
          "importantConditions": [
            "ওমেগার ঘাত কমাতে ৩ দিয়ে ভাগ করতে হয়।"
          ],
          "keyObservations": [
            "যেকোনো ৩টি ক্রমিক ঘাতের যোগফল শূন্য।"
          ],
          "recognitionTips": [
            "ব্র্যাকেটে দুটি পদ দেখলে তৃতীয়টি দিয়ে প্রতিস্থাপন করো।"
          ],
          "commonMistakes": [
            "$\\omega^3 = -1$ লিখে ফেলা।"
          ],
          "summary": "$1+\\omega+\\omega^2=0$ এবং $\\omega^3=1$। ওমেগা ৩-চক্রীয়। ঘনমূল তিনটি সমবাহু ত্রিভুজ গঠন করে।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "মডুলাস ও মুখ্য আর্গুমেন্ট নির্ণয়",
        "description": "জটিল সংখ্যার পরম মান এবং চতুর্ভাগভিত্তিক মুখ্য আর্গুমেন্ট পরিমাপ।",
        "solvingStrategy": "১) চতুর্ভাগ দেখে নির্দিষ্ট কোণের সূত্র প্রয়োগ করুন ($-\\pi < \\theta \\le \\pi$)।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-1767",
            "question": "$\\frac{1}{1+i}$ কে $A+iB$ আকারে প্রকাশ করলে $B$ এর মান কত হবে? [CU'23-24]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{1}{2}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$-\\frac{1}{2}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$1$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$-1$"
              }
            ],
            "answer": "a",
            "explanation": "**Solⁿ:** $\\frac{1}{1+i} = \\frac{1-i}{(1+i)(1-i)} = \\frac{1-i}{1^2-i^2} = \\frac{1-i}{1+1} = \\frac{1}{2} - \\frac{1}{2}i$\r\n\r\n$\\therefore B = -\\frac{1}{2}$",
            "university": "CU",
            "year": "23-24",
            "topic": "T-01: A+iB আকারে প্রকাশ"
          },
          {
            "id": "math-q-1768",
            "question": "যদি $\\frac{2+3i}{2-i} = A+iB$ এবং $A$ ও $B$ বাস্তব সংখ্যা হয় তবে $B$ এর মান কত? [JU'22-23; Agri'19-20]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{3}{5}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{4}{5}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{7}{5}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{8}{5}$"
              }
            ],
            "answer": "a",
            "explanation": "**Solⁿ:** $\\frac{2+3i}{2-i} = A+iB \\Rightarrow \\frac{(2+3i)(2+i)}{(2-i)(2+i)} = A+iB$\r\n\r\n$\\Rightarrow \\frac{4+6i+2i+3i^2}{2^2-i^2} = A+iB \\Rightarrow \\frac{4+8i-3}{4+1} = A+iB$\r\n\r\n$\\Rightarrow \\frac{1}{5} + \\frac{8}{5}i = A+iB \\therefore B = \\frac{8}{5}$",
            "university": "Admission",
            "year": "",
            "topic": "T-01: A+iB আকারে প্রকাশ"
          },
          {
            "id": "math-q-1769",
            "question": "$z = \\frac{(-4+3i)}{i}$ এর কাল্পনিক অংশ- [DU'18-19]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$3$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$4$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$-4$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$-3$"
              }
            ],
            "answer": "a",
            "explanation": "**Solⁿ:** $z = \\frac{-4+3i}{i} = -\\frac{4}{i} + 3 = -\\frac{4i}{i^2} + 3$\r\n\r\n$= -\\frac{4i}{-1} + 3 = 4i + 3$\r\n\r\n$\\therefore$ কাল্পনিক অংশ = $4$",
            "university": "DU",
            "year": "18-19",
            "topic": "T-01: A+iB আকারে প্রকাশ"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-1770",
            "question": "যদি $z_1 = 1+i$ এবং $z_2 = 1-i$ হয়, তাহলে $z_1 z_2$ এর মান হবে- [CU'14-19]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "জটিল সংখ্যা"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "বাস্তব সংখ্যা"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "অবাস্তব সংখ্যা"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "কাল্পনিক সংখ্যা"
              }
            ],
            "answer": "a",
            "explanation": "**Solⁿ:** $z_1 z_2 = (1+i)(1-i) = 1 - i^2$\r\n\r\n$= 1+1 = 2$ অর্থাৎ, বাস্তব সংখ্যা।",
            "university": "CU",
            "year": "14-19",
            "topic": "T-01: A+iB আকারে প্রকাশ",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "এককের ঘনমূল ও ওমেগার সরলীকরণ",
        "description": "ওমেগার ঘাত হ্রাসকরণ এবং ধারা ও ব্র্যাকেট প্রতিস্থাপন সমস্যা।",
        "solvingStrategy": "১) ঘাতকে ৩ দিয়ে ভাগ করে ভাগশেষ নিন। ২) $1+\\omega=-\\omega^2$ জাতীয় প্রতিস্থাপন করুন।",
        "startIndex": 5,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-1772",
            "question": "$(3\\sqrt{3} - 3i)(-3\\sqrt{3} + 9i)$ এর মডুলাস = ? \r\n[GST'22-23]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$54\\sqrt{3}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$27\\sqrt{3}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$36\\sqrt{3}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$45\\sqrt{3}$"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": $z_1 = 3\\sqrt{3} - 3i$ এর মডুলাস,\r\n$r_1 = \\sqrt{(3\\sqrt{3})^2 + (-3)^2} = 6$\r\n$z_2 = -3\\sqrt{3} + 9i$ এর মডুলাস,\r\n$r_2 = \\sqrt{(-3\\sqrt{3})^2 + 9^2} = 6\\sqrt{3}$\r\n$\\therefore z_1z_2$ এর মডুলাস, $r_1r_2 = 6 \\times 6\\sqrt{3} = 36\\sqrt{3}$",
            "university": "GST",
            "year": "22-23",
            "topic": "T-02: জটিল সংখ্যার মডুলাস ও আর্জিউমেন্ট সংক্রান্ত"
          },
          {
            "id": "math-q-1773",
            "question": "$\\frac{1 + \\sqrt{3}i}{\\sqrt{3} + i}$ এর আর্গুমেন্ট কত? [RU'22-23]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$60^{\\circ}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\tan^{-1}3$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$30^{\\circ}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$45^{\\circ}$"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": $z = \\frac{1+\\sqrt{3}i}{\\sqrt{3}+i} = \\frac{(1+\\sqrt{3}i)(\\sqrt{3}-i)}{(\\sqrt{3}+i)(\\sqrt{3}-i)} = \\frac{\\sqrt{3}-i+3i+\\sqrt{3}}{3+1}$\r\n$= \\frac{2\\sqrt{3}+2i}{4} = \\frac{1}{2}(\\sqrt{3}+i)$ (প্রথম চতুর্ভাগ)\r\n$\\therefore \\arg(z) = \\tan^{-1}\\frac{1}{\\sqrt{3}} = \\tan^{-1}\\frac{1}{\\sqrt{3}} = 30^{\\circ}$\r\n\r\nবিকল্প: $\\arg\\left(\\frac{1+\\sqrt{3}i}{\\sqrt{3}+i}\\right) = \\arg(1+\\sqrt{3}i) - \\arg(\\sqrt{3}+i)$\r\n$= 60^{\\circ} - 30^{\\circ} = 30^{\\circ}$",
            "university": "RU",
            "year": "22-23",
            "topic": "T-02: জটিল সংখ্যার মডুলাস ও আর্জিউমেন্ট সংক্রান্ত"
          },
          {
            "id": "math-q-1774",
            "question": "$\\frac{(i+1)^2}{(i-1)^4}$ জটিল সংখ্যাটির আর্গুমেন্ট হবে- [CU'22-23]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\pi$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$-\\pi$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{\\pi}{2}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$-\\frac{\\pi}{2}$"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": $\\frac{(i+1)^2}{(i-1)^4} = \\frac{(i^2+2i+1)}{(i^2-2i+1)(i^2-2i+1)} = \\frac{2i}{(-2i)(-2i)}$\r\n$= \\frac{2i}{-4} = -\\frac{i}{2} \\therefore \\text{আর্গুমেন্ট} = -\\frac{\\pi}{2}$\r\n\r\nবিকল্প: $\\arg(1+i) = \\frac{\\pi}{4}$\r\n$\\arg(-1+i) = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$\r\nFinal argument $2\\frac{\\pi}{4} - 4 \\times \\frac{3\\pi}{4} = -\\frac{5\\pi}{2}$\r\n$= -\\frac{5\\pi}{2}$ equivalent to $-\\frac{\\pi}{2}$",
            "university": "CU",
            "year": "22-23",
            "topic": "T-02: জটিল সংখ্যার মডুলাস ও আর্জিউমেন্ট সংক্রান্ত"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-1775",
            "question": "$\\frac{1-2i^{-1}}{1-i^{-1}}$ এর মডুলাস ও আর্গুমেন্ট কত হবে? [RU'20-21]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{3}{2}, \\frac{\\pi}{4}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{3}{2}, -\\frac{3\\pi}{4}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{3}{2}, \\frac{\\pi}{2}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{3}{2}\\sqrt{2}, \\frac{\\pi}{4}$"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": $\\frac{1-2i^{-1}}{1-i^{-1}} = \\frac{1-\\frac{2}{i}}{1-\\frac{1}{i}} = \\frac{-1-2}{(1-i)(1+i)} = \\frac{-3(1+i)}{1^2-1}$\r\n$= \\frac{-3(1+i)}{-1-1} = \\frac{3}{2}(1+i)$\r\n$\\therefore \\text{আর্গুমেন্ট} = \\tan^{-1}\\frac{1}{1} = \\frac{\\pi}{4}$,\r\nমডুলাস = $\\frac{3}{2}\\sqrt{1^2 + 1^2} = \\frac{3}{2}\\sqrt{2} = \\frac{3}{\\sqrt{2}}$",
            "university": "RU",
            "year": "20-21",
            "topic": "T-02: জটিল সংখ্যার মডুলাস ও আর্জিউমেন্ট সংক্রান্ত",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "এককের ঘনমূল তিনটি কেন সমবাহু ত্রিভুজ গঠন করে?",
        "description": "আর্গন্ড চিত্রে $1, \\omega, \\omega^2$ এর জ্যামিতিক অবস্থান ও কোণের বিশ্লেষণ।",
        "promptQuery": "আর্গন্ড চিত্রে এককের তিনটি ঘনমূল একটি সমবাহু ত্রিভুজ গঠন করে—এর গাণিতিক ও জ্যামিতিক প্রমাণ দেখাও।"
      },
      {
        "title": "ডিময়ভারের উপপাদ্য (De Moivre's Theorem) ও এর প্রয়োগ",
        "description": "$(\\cos\\theta + i\\sin\\theta)^n = \\cos n\\theta + i\\sin n\\theta$ এর শক্তি ও প্রমাণ।",
        "promptQuery": "ডিময়ভারের উপপাদ্যটি বিবৃত ও প্রমাণ করো এবং জটিল সংখ্যার মূল নির্ণয়ে এর ব্যবহার দেখাও।"
      },
      {
        "title": "$i^i$ (কাল্পনিকের ঘাত কাল্পনিক) এর মান কেন বাস্তব?",
        "description": "অয়লারের সূত্রের মাধ্যমে $i^i = e^{-\\pi/2} \\approx 0.2078$ এর চমকপ্রদ প্রমাণ।",
        "promptQuery": "প্রমাণ করো যে $i^i$ একটি সম্পূর্ণ বাস্তব সংখ্যা এবং এর প্রধান মান নির্ণয় করো।"
      },
      {
        "title": "জটিল সংখ্যার সঞ্চারপথ (Locus of Complex Numbers)",
        "description": "$|z - z_0| = r$ কেন বৃত্ত এবং $|z-a| = |z-b|$ কেন লম্ব সমদ্বিখণ্ডক নির্দেশ করে?",
        "promptQuery": "জটিল সংখ্যার সঞ্চারপথ সংক্রান্ত সমীকরণসমূহ (বৃত্ত, সরলরেখা, উপবৃত্ত) কীভাবে চিনবেন তা ব্যাখ্যা করো।"
      },
      {
        "title": "জটিল সংখ্যা অধ্যায়ের শীর্ষ ৩টি ভর্তি পরীক্ষা ফাঁদ",
        "description": "মুখ্য আর্গুমেন্টের সীমা লঙ্ঘন এবং বর্গমূলের চিহ্নের সাধারণ ভুল।",
        "promptQuery": "জটিল সংখ্যা অধ্যায়ে ভর্তি পরীক্ষায় সবচেয়ে বেশি ভুল হওয়া ৩টি প্রশ্ন ও কনসেপচুয়াল ফাঁদ বিশ্লেষণ করো।"
      }
    ],
    "questionCount": 94
  },
  {
    "id": "ch-polynomials",
    "paper": "Second-Paper",
    "paperBn": "২য় পত্র",
    "chapterNum": 4,
    "nameBn": "বহুপদী ও বহুপদী সমীকরণ",
    "nameEn": "Polynomials & Polynomial Equations",
    "rawName": "বহুপদী ও বহুপদী সমীকরণ",
    "summary": "এইচএসসি ২য় পত্রের অন্যতম গুরুত্বপূর্ণ বীজগণিত অধ্যায়। মূল ও সহগের সম্পর্ক, পৃথায়ক ($D$) ও মূলের প্রকৃতি, সাধারণ মূলের শর্ত, ত্রিঘাত সমীকরণ এবং প্রতিসম রাশির মান নির্ণয় থেকে ভর্তি পরীক্ষায় প্রচুর প্রশ্ন আসে।",
    "topics": [
      "ভাগশেষ ও উৎপাদক উপপাদ্য",
      "দ্বিঘাত সমীকরণের মূল ও সহগের সম্পর্ক",
      "পৃথায়ক ও মূলের প্রকৃতি",
      "সাধারণ মূলের শর্ত",
      "ত্রিঘাত ও চতুর্ঘাত সমীকরণ"
    ],
    "concepts": [
      {
        "id": "c-poly-01",
        "title": "মূল ও সহগের সম্পর্ক এবং নতুন সমীকরণ গঠন (Roots-Coefficients Relation & Equation Formation)",
        "topic": "দ্বিঘাত সমীকরণের মূল ও সহগের সম্পর্ক",
        "summary": "দ্বিঘাত সমীকরণের মূলদ্বয়ের যোগফল ও গুণফল, প্রতিসম রাশির মান এবং বিপরীত/বর্গ মূলবিশিষ্ট সমীকরণ গঠন।",
        "intro": {
          "what": "দ্বিঘাত সমীকরণ $ax^2 + bx + c = 0$ এর মূলদ্বয় $\\alpha, \\beta$ হলে তাদের যোগফল $\\alpha + \\beta = -\\frac{b}{a}$ এবং গুণফল $\\alpha\\beta = \\frac{c}{a}$। মূল জানা থাকলে সমীকরণ হয়: $x^2 - (\\alpha+\\beta)x + \\alpha\\beta = 0$।",
          "whyImportant": "ভর্তি পরীক্ষার বহুপদী অধ্যায়ের প্রায় ৬০% প্রশ্ন সরাসরি মূল-সহগের সম্পর্ক এবং নতুন মূলবিশিষ্ট সমীকরণ গঠনের শর্টকাট থেকে আসে।",
          "whereUsed": "কন্ট্রোল সিস্টেমে পোল-জিরো স্ট্যাবিলিটি বিশ্লেষণ, অর্থনীতিতে ইকুইলিব্রিয়াম প্রাইস নির্ধারণ ও সংকেত বিশ্লেষণে।",
          "prerequisites": "দ্বিঘাত সমীকরণ ও সাধারণ বীজগণিতীয় সূত্র।"
        },
        "easyExplanation": [
          "মূল দুটি জানা থাকলে সমীকরণ লেখার সর্বজনীন নিয়ম: $x^2 - (\\text{মূলদ্বয়ের যোগফল})x + (\\text{মূলদ্বয়ের গুণফল}) = 0$।",
          "শর্টকাট ১ (বিপরীত মূল): $ax^2 + bx + c = 0$ এর মূলদ্বয়ের বিপরীত মূল ($1/\\alpha, 1/\\beta$) বিশিষ্ট সমীকরণ চাইলে $a$ এবং $c$ নিজেদের স্থান অদলবদল করে: $cx^2 + bx + a = 0$!",
          "শর্টকাট ২ (বিপরীত চিহ্নযুক্ত মূল): মূলদ্বয়ের বিপরীত চিহ্নযুক্ত ($-\\alpha, -\\beta$) সমীকরণ চাইলে শুধু মাঝের $x$ এর চিহ্নের পরিবর্তন হয়: $ax^2 - bx + c = 0$।"
        ],
        "formulas": [
          {
            "latex": "\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha\\beta = \\frac{c}{a}",
            "name": "দ্বিঘাত সমীকরণের মূল-সহগ সম্পর্ক",
            "meaning": "মূলদ্বয়ের যোগফল ও গুণফলের সাথে সমীকরণের সহগের সম্পর্ক।",
            "whenToUse": "যেকোনো দ্বিঘাত সমীকরণের মূল সংক্রান্ত সমস্যায়।",
            "conditions": "$a \\neq 0$।",
            "variables": "$a, b, c$: সমীকরণের সহগ, $\\alpha, \\beta$: মূলদ্বয়।",
            "commonMistakes": "যোগফলে মাইনাস চিহ্ন ($-\\frac{b}{a}$) দিতে ভুলে যাওয়া।"
          },
          {
            "latex": "x^2 - (\\alpha + \\beta)x + \\alpha\\beta = 0",
            "name": "দ্বিঘাত সমীকরণ গঠন সূত্র",
            "meaning": "মূলদ্বয়ের যোগফল ও গুণফল থেকে সরাসরি সমীকরণ তৈরি।",
            "whenToUse": "নির্দিষ্ট মূলবিশিষ্ট নতুন সমীকরণ গঠনে।",
            "conditions": "মূলদ্বয় বাস্তব বা জটিল হতে পারে।",
            "variables": "$\\alpha, \\beta$: নতুন সমীকরণের মূলসমূহ।",
            "commonMistakes": "$x$ এর আগে মাইনাস চিহ্নের বদলে প্লাস চিহ্ন লেখা।"
          },
          {
            "latex": "cx^2 + bx + a = 0 \\quad (\\text{বিপরীত মূলের শর্টকাট})",
            "name": "বিপরীত মূলবিশিষ্ট সমীকরণ শর্টকাট",
            "meaning": "$ax^2+bx+c=0$ এর মূলের উল্টো মূল ($1/\\alpha, 1/\\beta$) বিশিষ্ট সমীকরণ।",
            "whenToUse": "বিপরীত মূলের সমীকরণ ৩ সেকেন্ডে বের করতে।",
            "conditions": "$c \\neq 0$।",
            "variables": "$a$ ও $c$ স্থান বদল করে।",
            "commonMistakes": "$b$ এর স্থান পরিবর্তন করা (মাঝের সহগ অপরিবর্তিত থাকে)।"
          }
        ],
        "analysis": {
          "conditions": "জটিল মূল সর্বদা জোড়ায় আসে: যদি একটি মূল $p + iq$ হয়, তবে অপর মূলটি নিশ্চিতভাবে তার অনুবন্ধী $p - iq$ হবে (সহগ বাস্তব হলে)।",
          "variations": "অমূলদ মূলও জোড়ায় আসে: একটি মূল $p + \\sqrt{q}$ হলে অপরটি $p - \\sqrt{q}$ হবে।",
          "relationships": "মূলদ্বয়ের পার্থক্যের বর্গ: $(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta = \\frac{b^2 - 4ac}{a^2} = \\frac{D}{a^2}$।",
          "transformations": "যদি একটি মূল অপরটির $n$ গুণ হয় ($\\beta = n\\alpha$), তবে শর্ত: $\\frac{b^2}{ac} = \\frac{(n+1)^2}{n}$। এটি অত্যন্ত গুরুত্বপূর্ণ ভর্তি পরীক্ষা ট্রিক।",
          "misunderstandings": "সহগ বাস্তব না হলে জটিল মূল জোড়ায় নাও আসতে পারে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "একটি মূল অপরটির $n$ গুণ হওয়ার শর্ত",
            "recognition": "প্রশ্নে বলা থাকবে সমীকরণের একটি মূল অপরটির দ্বিগুণ, তিনগুণ বা $n$ গুণ।",
            "requiredConcept": "$\\frac{b^2}{ac} = \\frac{(n+1)^2}{n}$ শর্টকাট।",
            "strategy": "সরাসরি শর্টকাট সূত্রে মান বসিয়ে অজানা সহগের সম্পর্ক বের করুন।",
            "keySteps": [
              "$n$ চিহ্নিত করা",
              "শর্টকাট সূত্রে মান বসানো",
              "বজ্রগুণন করে সম্পর্ক পাওয়া"
            ],
            "commonTraps": "বড় করে সমীকরণ ধরে পৃষ্ঠা ভরানো।"
          }
        ],
        "easyExample": {
          "problem": "যে দ্বিঘাত সমীকরণের মূলদ্বয় $3$ এবং $-5$, সেই সমীকরণটি নির্ণয় করো।",
          "solutionSteps": [
            "মূলদ্বয়ের যোগফল: $\\alpha + \\beta = 3 + (-5) = -2$।",
            "মূলদ্বয়ের গুণফল: $\\alpha\\beta = 3 \\times (-5) = -15$।",
            "সমীকরণ গঠনের সূত্র: $x^2 - (\\alpha + \\beta)x + \\alpha\\beta = 0$।",
            "মান বসিয়ে পাই: $x^2 - (-2)x + (-15) = 0 \\implies x^2 + 2x - 15 = 0$।"
          ],
          "answer": "$x^2 + 2x - 15 = 0$"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "$ax^2 + bx + c = 0$ সমীকরণের একটি মূল অপরটির তিনগুণ হলে প্রমাণ করো যে $3b^2 = 16ac$।",
          "recognitionApproach": "এখানে $n = 3$। শর্টকাট সূত্র: $\\frac{b^2}{ac} = \\frac{(n+1)^2}{n}$।",
          "stepByStepSolution": "১) $n = 3$ হলে ডানপাশ: $\\frac{(3+1)^2}{3} = \\frac{4^2}{3} = \\frac{16}{3}$।\n২) অতএব, $\\frac{b^2}{ac} = \\frac{16}{3}$।\n৩) বজ্রগুণন করে পাই: $3b^2 = 16ac$। (প্রমাণিত)",
          "whyItWorks": "মূলদ্বয় $\\alpha$ এবং $3\\alpha$ ধরে যোগফল $4\\alpha = -b/a$ ও গুণফল $3\\alpha^2 = c/a$ থেকে $\\alpha$ অপনয়ন করলেই এই সম্পর্ক আসে।",
          "calcAvoidanceTrick": "শর্টকাট $\\frac{(n+1)^2}{n} = \\frac{16}{3} \\implies 3b^2 = 16ac$ মাত্র ৫ সেকেন্ডে উত্তর।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$\\alpha+\\beta = -b/a$",
            "$\\alpha\\beta = c/a$",
            "সমীকরণ: $x^2 - (\\alpha+\\beta)x + \\alpha\\beta = 0$",
            "$n$-গুণ শর্ত: $\\frac{b^2}{ac} = \\frac{(n+1)^2}{n}$",
            "বিপরীত মূল: $cx^2+bx+a=0$"
          ],
          "importantConditions": [
            "বাস্তব সহগে জটিল ও অমূলদ মূল সর্বদা অনুবন্ধী জোড়ায় আসে।"
          ],
          "keyObservations": [
            "$(\\alpha-\\beta)^2 = D/a^2$।"
          ],
          "recognitionTips": [
            "এক মূল আরেকটির দ্বিগুণ/তিনগুণ দেখলে $(n+1)^2/n$ প্রয়োগ করো।"
          ],
          "commonMistakes": [
            "যোগফলে মাইনাস দিতে ভুলে যাওয়া।"
          ],
          "summary": "যোগফল $-b/a$, গুণফল $c/a$। বিপরীত মূলে $a$ ও $c$ স্থান বদল করে। $n$-গুণে $b^2/ac = (n+1)^2/n$।"
        }
      },
      {
        "id": "c-poly-02",
        "title": "পৃথায়ক ও মূলের প্রকৃতি (Discriminant & Nature of Roots)",
        "topic": "পৃথায়ক ও মূলের প্রকৃতি",
        "summary": "পৃথায়ক $D = b^2 - 4ac$ এর চিহ্ন বিশ্লেষণ, মূল বাস্তব, সমান, অসমান ও জটিল হওয়ার শর্ত।",
        "intro": {
          "what": "দ্বিঘাত সমীকরণ সমাধানের শ্রীধর আচার্যের সূত্রে বর্গমূলের ভেতরের রাশি $D = b^2 - 4ac$ কে পৃথায়ক বা নিশ্চয়ক (Discriminant) বলে। এটি মূলের বাস্তব বা জটিল প্রকৃতি এবং মূল সমান বা অসমান হবে কিনা তা পৃথকভাবে নির্ধারণ করে।",
          "whyImportant": "ভর্তি পরীক্ষায় \"মূলদ্বয় বাস্তব ও সমান হলে k এর মান কত?\" সংক্রান্ত প্রশ্ন প্রায় প্রতিটি বিশ্ববিদ্যালয়ে নিশ্চিত আসে।",
          "whereUsed": "ইঞ্জিনিয়ারিং ভাইব্রেশন বিশ্লেষণে ক্রিটিক্যাল ড্যাম্পিং, ওভারড্যাম্পিং ও আন্ডারড্যাম্পিং নির্ণয়ে।",
          "prerequisites": "দ্বিঘাত সূত্র $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$।"
        },
        "easyExplanation": [
          "শর্ত ১ ($D > 0$): মূলদ্বয় বাস্তব ও অসমান (Real & Distinct)। যদি $D$ পূর্ণবর্গ সংখ্যা হয় তবে মূলদ্বয় মূলদ (Rational), পূর্ণবর্গ না হলে অমূলদ (Irrational)।",
          "শর্ত ২ ($D = 0$): মূলদ্বয় বাস্তব ও পরস্পর সমান (Real & Equal)। প্রতিটি মূল হবে $-\\frac{b}{2a}$। সমীকরণটি একটি পূর্ণবর্গ রাশিতে পরিণত হয়।",
          "শর্ত ৩ ($D < 0$): মূলদ্বয় জটিল বা কাল্পনিক এবং পরস্পর অনুবন্ধী (Complex Conjugate)।"
        ],
        "formulas": [
          {
            "latex": "D = b^2 - 4ac \\quad (\\text{নিশ্চায়ক বা পৃথায়ক})",
            "name": "পৃথায়কের সূত্র",
            "meaning": "দ্বিঘাত সমীকরণের মূলের চরিত্র নির্ধারণকারী রাশি।",
            "whenToUse": "মূলের প্রকৃতি যাচাইয়ে বা মূল সমান হওয়ার শর্তে ধ্রুবক নির্ণয়ে।",
            "conditions": "$a \\neq 0$।",
            "variables": "$a, b, c$: সমীকরণের সহগ।",
            "commonMistakes": "$-4ac$ এর চিহ্নের গুণনে প্লাস-মাইনাস ভুল করা।"
          },
          {
            "latex": "D = 0 \\iff b^2 = 4ac \\quad (\\text{মূলদ্বয় বাস্তব ও সমান})",
            "name": "মূল সমান হওয়ার শর্ত",
            "meaning": "সমীকরণের উভয় মূল অভিন্ন এবং রাশিটি পূর্ণবর্গ।",
            "whenToUse": "প্রশ্নে \"মূলদ্বয় সমান\", \"একটি মাত্র মূল\", বা \"পূর্ণবর্গ রাশি\" বলা থাকলে।",
            "conditions": "$a, b, c$ বাস্তব সংখ্যা।",
            "variables": "$b^2 = 4ac$।",
            "commonMistakes": "অসমতার চিহ্ন ব্যবহার করা (সমান বললে সমীকরণ হবে)।"
          }
        ],
        "analysis": {
          "conditions": "যদি সমীকরণের একটি মূল শূন্য হয়, তবে ধ্রুবক পদ $c = 0$ হতে হবে।",
          "variations": "যদি মূলদ্বয় পরস্পর সমান কিন্তু বিপরীত চিহ্নযুক্ত হয় ($\\alpha = -\\beta$), তবে $b = 0$ হতে হবে।",
          "relationships": "যদি মূলদ্বয় পরস্পর গুণাত্মক বিপরীত হয় ($\\alpha = 1/\\beta$), তবে $a = c$ হতে হবে। এটি দারুণ শর্টকাট।",
          "transformations": "যদি কোনো দ্বিঘাত রাশি $ax^2 + bx + c$ সর্বদা ধনাত্মক ($>0$) হয়, তবে শর্ত: $a > 0$ এবং $D < 0$।",
          "misunderstandings": "অনেকে ভাবে বাস্তব মূল মানেই $D > 0$, কিন্তু $D = 0$ হলেও মূল বাস্তব হয়। তাই শুধু \"বাস্তব\" বললে $D \\ge 0$ নিতে হয়।"
        },
        "questionPatterns": [
          {
            "typeTitle": "মূল সমান হওয়ার শর্তে চলকের মান নির্ণয়",
            "recognition": "সমীকরণে $k$ বা $p$ থাকবে এবং বলা থাকবে \"মূলদ্বয় সমান হলে $k=$ কত?\"",
            "requiredConcept": "$D = b^2 - 4ac = 0$।",
            "strategy": "সহগগুলো চিহ্নিত করে $b^2 - 4ac = 0$ সমীকরণ তৈরি ও সমাধান করুন।",
            "keySteps": [
              "$a, b, c$ চিহ্নিত করা",
              "$b^2 - 4ac = 0$ লেখা",
              "$k$ এর মান বের করা"
            ],
            "commonTraps": "দ্বিঘাত সমীকরণের দুটি মান আসলে একটি বাদ দিয়ে ফেলা।"
          }
        ],
        "easyExample": {
          "problem": "$x^2 - kx + 9 = 0$ সমীকরণের মূলদ্বয় বাস্তব ও সমান হলে $k$ এর মান কত?",
          "solutionSteps": [
            "এখানে $a = 1, b = -k, c = 9$।",
            "মূল বাস্তব ও সমান হওয়ার শর্ত: $D = b^2 - 4ac = 0$।",
            "$(-k)^2 - 4(1)(9) = 0 \\implies k^2 - 36 = 0$।",
            "$k^2 = 36 \\implies k = \\pm 6$।"
          ],
          "answer": "$k = \\pm 6$"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "কোন শর্তে $kx^2 + (k-1)x + 1 = 0$ সমীকরণের মূলদ্বয় পরস্পর সমান হবে?",
          "recognitionApproach": "মূল সমান মানে পৃথায়ক $D = 0$।",
          "stepByStepSolution": "১) এখানে $a = k, b = k-1, c = 1$।\n২) $D = (k-1)^2 - 4(k)(1) = 0$।\n৩) $k^2 - 2k + 1 - 4k = 0 \\implies k^2 - 6k + 1 = 0$।\n৪) দ্বিঘাত সূত্রে সমাধান: $k = \\frac{-(-6) \\pm \\sqrt{(-6)^2 - 4(1)(1)}}{2(1)} = \\frac{6 \\pm \\sqrt{36-4}}{2} = \\frac{6 \\pm \\sqrt{32}}{2} = 3 \\pm 2\\sqrt{2}$।",
          "whyItWorks": "পৃথায়কের মান শূন্য হলে দ্বিঘাতের প্লাস-মাইনাস শাখা বিলুপ্ত হয়ে একটি একক মূল অবশিষ্ট থাকে।",
          "calcAvoidanceTrick": "$\\sqrt{32} = 4\\sqrt{2}$, দুই দিয়ে ভাগ করলে $3 \\pm 2\\sqrt{2}$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$D = b^2 - 4ac$",
            "বাস্তব ও অসমান: $D > 0$",
            "বাস্তব ও সমান: $D = 0$",
            "জটিল: $D < 0$",
            "বিপরীত মূল: $a = c$",
            "বিপরীত চিহ্ন: $b = 0$"
          ],
          "importantConditions": [
            "শুধু \"বাস্তব মূল\" বললে $D \\ge 0$ ধরতে হবে।"
          ],
          "keyObservations": [
            "$D$ পূর্ণবর্গ হলে মূলদ, পূর্ণবর্গ না হলে অমূলদ।"
          ],
          "recognitionTips": [
            "মূল সমান মানেই $b^2 = 4ac$।"
          ],
          "commonMistakes": [
            "বর্গমূলের ক্ষেত্রে $\\pm$ চিহ্ন না দিয়ে কেবল ধনাত্মক মান নেওয়া।"
          ],
          "summary": "$D = b^2-4ac$। ধনাত্মক হলে বাস্তব ও ভিন্ন, শূন্য হলে সমান, ঋণাত্মক হলে জটিল।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "মূল-সহগ সম্পর্ক ও নতুন সমীকরণ গঠন",
        "description": "মূলের যোগফল-গুণফল, প্রতিসম রাশি এবং বিপরীত মূলের সমীকরণ গঠন।",
        "solvingStrategy": "১) $\\alpha+\\beta=-b/a$ ও $\\alpha\\beta=c/a$ ব্যবহার করুন। ২) বিপরীত মূলে $a$ ও $c$ স্থান বদলান।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-1861",
            "question": "একটি দ্বিঘাত সমীকরণের একটি মূল $\\frac{1}{3-i\\sqrt{2}}$ হলে, অপর মূল কোনটি? [HSTU'24-25; JU'17-18]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{3}{11} - i\\frac{\\sqrt{2}}{11}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\frac{3}{11} + i\\frac{\\sqrt{2}}{11}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{3i}{11} - \\frac{\\sqrt{2}}{11}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{3i}{11} + \\frac{\\sqrt{2}}{11}$"
              }
            ],
            "answer": "a",
            "explanation": "**Sol:** একটি মূল $= \\frac{1}{3-i\\sqrt{2}} = \\frac{3+i\\sqrt{2}}{3^2 + (\\sqrt{2})^2} = \\frac{3}{11} + i\\frac{\\sqrt{2}}{11}$\r\n\r\n$\\therefore$ অপর মূল $= \\frac{3}{11} - i\\frac{\\sqrt{2}}{11}$",
            "university": "Admission",
            "year": "",
            "topic": "T-01: দ্বিঘাত সমীকরণের মূল নির্ণয় সংক্রান্ত"
          },
          {
            "id": "math-q-1862",
            "question": "একটি দ্বিঘাত সমীকরণের একটি মূল $\\frac{1}{2-\\sqrt{5}}$ হলে অপর মূল কোনটি? [BUP'23-24]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$-2-\\sqrt{5}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$2-\\sqrt{5}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$-2+\\sqrt{5}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$2+\\sqrt{5}$"
              }
            ],
            "answer": "a",
            "explanation": "**Sol:** $\\frac{1}{2-\\sqrt{5}} = \\frac{(2+\\sqrt{5})}{(2-\\sqrt{5})(2+\\sqrt{5})} = \\frac{2+\\sqrt{5}}{4-5} = -2-\\sqrt{5}$\r\n\r\n$\\therefore$ অপর মূল $= -2+\\sqrt{5}$",
            "university": "BUP",
            "year": "23-24",
            "topic": "T-01: দ্বিঘাত সমীকরণের মূল নির্ণয় সংক্রান্ত"
          },
          {
            "id": "math-q-1863",
            "question": "$x^2 - 10x + 34 = 0$ সমীকরণের মূলগুলো হলো- [JU'14-15]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$3 \\pm i$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$5 \\pm i$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$5 \\pm 2i$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$5 \\pm 3i$"
              }
            ],
            "answer": "a",
            "explanation": "**Sol:** $x^2 - 10x + 34 = 0$;\r\n$\\alpha = \\frac{10 + \\sqrt{(-10)^2 - 4 \\cdot 1 \\cdot 34}}{2} = 5 + 3i$\r\n$\\beta = \\frac{10 - \\sqrt{(-10)^2 - 4 \\cdot 1 \\cdot 34}}{2} = 5 - 3i$ [ক্ষেত্রে ১টি মূল বের করলেই অপরটি পাওয়া যায় (একে অপরের অনুবন্ধী)]",
            "university": "JU",
            "year": "14-15",
            "topic": "T-01: দ্বিঘাত সমীকরণের মূল নির্ণয় সংক্রান্ত"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-1864",
            "question": "$9x^2 - 12x + 4 = 0$ দ্বিঘাত সমীকরণের মূলদ্বয় $\\alpha, \\beta$ হলে মূলদ্বয়ের অনুপাত ($\\alpha : \\beta$) কত? [JnU'14-15]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$4:9$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$3:2$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$1:1$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$4:3$"
              }
            ],
            "answer": "a",
            "explanation": "**Sol:** $9x^2 - 12x + 4 = 0$\r\nএখানে, $\\alpha = \\frac{-(-12) - \\sqrt{(-12)^2 - 4 \\cdot 9 \\cdot 4}}{2 \\cdot 9} \\Rightarrow \\alpha = \\frac{2}{3}$,\r\n$\\beta = \\frac{-(-12) + \\sqrt{(-12)^2 - 4 \\cdot 9 \\cdot 4}}{2 \\cdot 9} \\Rightarrow \\beta = \\frac{2}{3}$\r\n\r\n$\\therefore \\frac{\\alpha}{\\beta} = \\frac{2/3}{2/3} = 1 : 1$\r\n\r\n**Shortcut:** নিঃস্বায়ক, $D = (-12)^2 - 4 \\cdot 9 \\cdot 4 = 144 - 144 = 0$\r\n\r\nনিঃস্বায়ক শূন্য হওয়ায় মূল দুটি সমান। সুতরাং এদের অনুপাত হবে $1 : 1$।\r\n\r\n---",
            "university": "JnU",
            "year": "14-15",
            "topic": "T-01: দ্বিঘাত সমীকরণের মূল নির্ণয় সংক্রান্ত",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "পৃথায়ক ও মূলের প্রকৃতি বিশ্লেষণ",
        "description": "মূল বাস্তব, সমান বা জটিল হওয়ার শর্তে ধ্রুবকের মান নির্ণয়।",
        "solvingStrategy": "১) মূল সমান বললে $b^2-4ac=0$ বসান। ২) বাস্তব বললে $b^2-4ac \\ge 0$ নিন।",
        "startIndex": 8,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-1869",
            "question": "$p, q$ এর কোন মানের জন্য $(x - 2)(x - p) + (x - q)(x - p) + (x - q)(x - 2) = 0$ সমীকরণটির মূলদ্বয় পূর্ণ বর্গ হবে? [SUST'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$p = 1, q = 1$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$p = 2, q = 1$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$p = 1, q = 2$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$p = 2, q = 2$"
              }
            ],
            "answer": "a",
            "explanation": "**Sol\":** $(x - 2)(x - p) + (x - p)(x - q) + (x - q)(x - 2) = 0$\r\n$\\Rightarrow x^2 - (2 + p)x + 2p + x^2 - (p + q)x + pq + x^2 - (q + 2)x + 2q = 0$\r\n$\\Rightarrow 3x^2 - (2p + 2q + 4)x + 2p + 2q + pq = 0$\r\nরাশিটি পূর্ণবর্গ হলে, নিচায়ক $= 0$ হবে।\r\n$\\Rightarrow b^2 - 4ac = 0$\r\n$\\Rightarrow (2p + 2q + 4)^2 - 4(2p + 2q + pq) \\times 3 = 0$\r\n$\\Rightarrow (2p + 2q + 4)^2 = 12(2p + 2q + pq)$\r\n\r\n$p = 2$ ও $q = 2$ এর জন্যই শুধুমাত্র সম্পর্কটি সঠিক হয়।\r\n[বি.দ্র.: প্রশ্নে মূলদ্বয় পূর্ণবর্গ বলা হয়েছে, এটি আসলে রাশিটি পূর্ণবর্গ বোঝাতে চেয়েছে। কারণ প্রতিটি option অনুযায়ী সমীকরণ গঠন করলে কোনো ক্ষেত্রেই সমীকরণটি পূর্ণবর্গ আসে না।]",
            "university": "SUST",
            "year": "24-25",
            "topic": "T-02: নিঃস্বায়ক সম্পর্কিত সমস্যা"
          },
          {
            "id": "math-q-1870",
            "question": "$k$ এর মান কত হলে $x^2 + kx + 1 = 0$ সমীকরণের মূলদ্বয় জটিল হবে? [CU'23-24; Agri.'21-22; JU'14-15]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$-4 < k$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$-1 < k < 1$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$-2 < k < 2$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$0 < k < 1$"
              }
            ],
            "answer": "a",
            "explanation": "**Sol\":** সমীকরণটির নিচায়ক $= k^2 - 4$ জটিল মূলের জন্য,\r\n$k^2 - 4 < 0 \\Rightarrow k^2 < 4 \\Rightarrow |k| < 2 \\therefore -2 < k < 2$",
            "university": "Admission",
            "year": "",
            "topic": "T-02: নিঃস্বায়ক সম্পর্কিত সমস্যা"
          },
          {
            "id": "math-q-1871",
            "question": "$x^2 + 4x + 3 = 0$ সমীকরণের মূলগুলো কি প্রকৃতির? [CU'23-14]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "বাস্তব ও মূলদ"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "অবাস্তব ও অসমান"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "জটিল"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "অমূলদ ও সমান"
              }
            ],
            "answer": "a",
            "explanation": "**Sol\":** $D = 4^2 - 4 \\times 1 \\times 3 = 16 - 12 = 4$, যা একটি ধনাত্মক পূর্ণবর্গ সংখ্যা।\r\n$\\therefore$ মূলদ্বয় অসমান, বাস্তব ও মূলদ।",
            "university": "CU",
            "year": "23-14",
            "topic": "T-02: নিঃস্বায়ক সম্পর্কিত সমস্যা"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-1872",
            "question": "$x^2 - kx + 9 = 0$ সমীকরণের মূলদ্বয় জটিল হলে, $k$ এর মান কোনটি? [JU'23-24]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$-1 < k < 1$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$6$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$-6$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$-6 < k < 6$"
              }
            ],
            "answer": "a",
            "explanation": "**Sol\":** $x^2 - kx + 9 = 0$ জটিল মূলের ক্ষেত্রে,\r\nনিচায়ক $< 0$ হবে\r\n$k^2 - 36 < 0$\r\n$(k + 6)(k - 6) < 0$\r\n[মেথড অব ইন্টারভাল গ্রাফ]\r\n$\\therefore -6 < k < 6$",
            "university": "JU",
            "year": "23-24",
            "topic": "T-02: নিঃস্বায়ক সম্পর্কিত সমস্যা",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "জটিল মূল কেন সর্বদা অনুবন্ধী জোড়ায় আসে?",
        "description": "বাস্তব সহগবিশিষ্ট বহুপদীর ক্ষেত্রে অনুবন্ধী মূল উপপাদ্যের প্রমাণ।",
        "promptQuery": "বাস্তব সহগবিশিষ্ট বহুপদী সমীকরণের জটিল মূল সর্বদা অনুবন্ধী জোড়ায় ($p \\pm iq$) আসে—এর গাণিতিক প্রমাণ দেখাও।"
      },
      {
        "title": "দুটি দ্বিঘাত সমীকরণের একটি সাধারণ মূল থাকার শর্ত",
        "description": "বজ্রগুণন পদ্ধতি দিয়ে সাধারণ মূলের নির্ণায়ক শর্ত প্রতিপাদন।",
        "promptQuery": "দুটি দ্বিঘাত সমীকরণের একটি সাধারণ মূল থাকার শর্ত $(c_1 a_2 - c_2 a_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1)$ প্রমাণ করো।"
      },
      {
        "title": "ত্রিঘাত সমীকরণের মূল ও সহগের সম্পর্ক",
        "description": "$ax^3 + bx^2 + cx + d = 0$ এর মূলত্রয়ের যোগফল, যুগল গুণফল ও মোট গুণফল।",
        "promptQuery": "ত্রিঘাত সমীকরণের মূল-সহগ সম্পর্কাবলী এবং তিনটি মূলের প্রতিসম রাশির মান নির্ণয় উদাহরণসহ বুঝিয়ে দাও।"
      },
      {
        "title": "দ্বিঘাত রাশি সর্বদা ধনাত্মক হওয়ার শর্ত ($a>0, D<0$)",
        "description": "কেন $D<0$ হলে রাশিটি কখনোই $x$-অক্ষ ছেদ করে না এবং ধনাত্মক থাকে?",
        "promptQuery": "একটি দ্বিঘাত রাশি $ax^2 + bx + c$ সকল বাস্তব $x$ এর জন্য ধনাত্মক হওয়ার শর্ত লেখচিত্রের সাহায্যে প্রমাণ করো।"
      },
      {
        "title": "বহুপদী অধ্যায়ের শীর্ষ ৩টি ভর্তি পরীক্ষা ফাঁদ",
        "description": "সাধারণ মূলের ভুল, অমূলদ মূলের অনুবন্ধী শর্ত এবং দ্বিঘাতের দুটি মানের বিভ্রান্তি।",
        "promptQuery": "বহুপদী ও বহুপদী সমীকরণ অধ্যায়ে ভর্তি পরীক্ষায় সবচেয়ে বেশি ভুল হওয়া ৩টি প্রশ্ন ও সমাধান বিশ্লেষণ করো।"
      }
    ],
    "questionCount": 147
  },
  {
    "id": "ch-binomial",
    "paper": "Second-Paper",
    "paperBn": "২য় পত্র",
    "chapterNum": 5,
    "nameBn": "দ্বিপদী বিস্তৃতি",
    "nameEn": "Binomial Expansion",
    "rawName": "দ্বিপদী বিস্তৃতি",
    "summary": "উচ্চতর গণিত ২য় পত্রের দ্বিপদী উপপাদ্য অধ্যায়। সাধারণ পদ ($T_{r+1}$), মধ্যপদ, $x$-বর্জিত পদ, দ্বিপদী সহগসমূহের সম্পর্ক এবং ঋণাত্মক/ভগ্নাংশ ঘাতের বিস্তৃতির শর্তাবলি থেকে ভর্তি পরীক্ষায় প্রতিবছর নিশ্চিত প্রশ্ন আসে।",
    "topics": [
      "ধনাত্মক পূর্ণসংখ্যা ঘাতের দ্বিপদী উপপাদ্য",
      "সাধারণ পদ ($T_{r+1}$) ও পদসংখ্যা",
      "$x$-বর্জিত পদ ও নির্দিষ্ট ঘাতের সহগ",
      "মধ্যপদ নির্ণয়",
      "ঋণাত্মক ও ভগ্নাংশ ঘাতের বিস্তৃতি"
    ],
    "concepts": [
      {
        "id": "c-binom-01",
        "title": "সাধারণ পদ, $x$-বর্জিত পদ ও নির্দিষ্ট ঘাতের সহগ (General Term & Independent Term)",
        "topic": "$x$-বর্জিত পদ ও নির্দিষ্ট ঘাতের সহগ",
        "summary": "$T_{r+1} = ^nC_r a^{n-r} b^r$ সূত্র, $x$-বর্জিত পদের জন্য $x^0$ এর শর্ত এবং দ্রুত $r$ বের করার সুপার শর্টকাট।",
        "intro": {
          "what": "দ্বিপদী বিস্তৃতি $(a + b)^n$ এর $(r+1)$-তম পদকে সাধারণ পদ $T_{r+1}$ বলে। $x$-বর্জিত পদ হলো বিস্তৃতির সেই পদ যেখানে $x$ এর ঘাত শূন্য হয় ($x^0$), অর্থাৎ পদটি সম্পূর্ণ ধ্রুবক।",
          "whyImportant": "ভর্তি পরীক্ষার প্রতিটি শিফটে \"বিস্তৃতিটিতে x বর্জিত পদের মান কত?\" বা \"$x^3$ এর সহগ কত?\" নিশ্চিতভাবে থাকে।",
          "whereUsed": "সম্ভাব্যতা তত্ত্বে দ্বিপদী বিন্যাস (Binomial Distribution), অ্যালগরিদমের কমপেক্সিটি বিশ্লেষণ ও ফিনান্সিয়াল অ্যানুইটিতে।",
          "prerequisites": "সমাবেশ সূত্র ($^nC_r$) ও সূচকের নিয়মাবলী।"
        },
        "easyExplanation": [
          "সাধারণ পদের মূল সূত্র: $(a + x)^n$ এর $(r+1)$-তম পদ $T_{r+1} = ^nC_r a^{n-r} x^r$। লক্ষ্য করুন: যততম পদ বের করতে বলবে, $r$ এর মান তার চেয়ে ১ কম হবে (যেমন ৫ম পদের জন্য $r = 4$)।",
          "সুপার শর্টকাট ($x$-বর্জিত পদের $r$ নির্ণয়): $\\left(ax^p + \\frac{b}{x^q}\\right)^n$ এর বিস্তৃতিতে $x^k$ এর সহগ বের করতে হলে সরাসরি: $r = \\frac{np - k}{p + q}$! আর $x$-বর্জিত পদ চাইলে $k = 0$, ফলে সরাসরি $r = \\frac{np}{p + q}$! মাত্র ৩ সেকেন্ডে $r$ বের হয়ে যায়।"
        ],
        "formulas": [
          {
            "latex": "T_{r+1} = ^nC_r a^{n-r} b^r \\quad (\\text{সাধারণ পদ সূত্র})",
            "name": "দ্বিপদী বিস্তৃতির সাধারণ পদ",
            "meaning": "$(a + b)^n$ এর $(r+1)$-তম পদের মান।",
            "whenToUse": "যেকোনো নির্দিষ্ট পদ বা সহগ বের করার ভিত্তি হিসেবে।",
            "conditions": "$n$ ধনাত্মক পূর্ণসংখ্যা, $0 \\le r \\le n$।",
            "variables": "$n$: সূচক, $r$: পদের ক্রম অপেক্ষা ১ কম।",
            "commonMistakes": "$r$-তম পদের জন্য $r$ বসিয়ে ফেলা (পদটি $r+1$-তম)।"
          },
          {
            "latex": "r = \\frac{np - k}{p + q} \\quad \\left(\\left(ax^p + \\frac{b}{x^q}\\right)^n \\text{ এ } x^k \\text{ এর সহগের জন্য}\\right)",
            "name": "$x^k$ এর সহগ ও $x$-বর্জিত পদের সুপার শর্টকাট",
            "meaning": "$x^k$ এর পদের জন্য $r$ এর মান সরাসরি বের করার সূত্র ($x$-বর্জিতে $k=0$)।",
            "whenToUse": "$x$-বর্জিত পদ বা নির্দিষ্ট ঘাতের সহগ ৩০ সেকেন্ডে বের করতে।",
            "conditions": "$r$ কে অবশ্যই অঋণাত্মক পূর্ণসংখ্যা হতে হবে (নতুবা পদটি নেই)।",
            "variables": "$n$: মোট ঘাত, $p$: প্রথম পদে $x$ এর ঘাত, $q$: হরে $x$ এর ঘাত, $k$: কাঙ্ক্ষিত ঘাত।",
            "commonMistakes": "লব ও হরের ঘাত গুলিয়ে ফেলা।"
          },
          {
            "latex": "\\text{মোট পদসংখ্যা} = n + 1 \\quad (n \\in \\mathbb{N})",
            "name": "দ্বিপদী বিস্তৃতির মোট পদসংখ্যা",
            "meaning": "দ্বিপদী রাশির বিস্তৃতিতে সর্বদা ঘাতের চেয়ে ১টি বেশি পদ থাকে।",
            "whenToUse": "পদসংখ্যা সংক্রান্ত সরাসরি প্রশ্নে।",
            "conditions": "$n$ ধনাত্মক পূর্ণসংখ্যা হতে হবে।",
            "variables": "$n$: সূচক।",
            "commonMistakes": "ত্রিপদী রাশিতে সরাসরি $n+1$ প্রয়োগ করা (ত্রিপদীতে $\\frac{(n+1)(n+2)}{2}$ হয়)।"
          }
        ],
        "analysis": {
          "conditions": "যদি শর্টকাট সূত্রে $r$ এর মান ভগ্নাংশ বা ঋণাত্মক বা $n$ এর চেয়ে বড় আসে, তবে বুঝতে হবে বিস্তৃতিতে ঐ ঘাতযুক্ত কোনো পদ বিদ্যমান নেই (সহগ শূন্য)।",
          "variations": "মধ্যপদ নির্ণয়: যদি $n$ জোড় হয় তবে মধ্যপদ একটি: $\\left(\\frac{n}{2} + 1\\right)$-তম পদ। যদি $n$ বিজোড় হয় তবে মধ্যপদ দুটি: $\\frac{n+1}{2}$-তম ও $\\frac{n+3}{2}$-তম পদ।",
          "relationships": "দ্বিপদী সহগসমূহের সমষ্টি: $C_0 + C_1 + C_2 + \\dots + C_n = 2^n$।",
          "transformations": "বিজোড় পদের সহগ সমষ্টি = জোড় পদের সহগ সমষ্টি: $C_0 + C_2 + C_4 + \\dots = C_1 + C_3 + C_5 + \\dots = 2^{n-1}$।",
          "misunderstandings": "পদ সংখ্যা $r$ নয়, পদটি হলো $(r+1)$-তম পদ। যেমন $r = 4$ হলে পদটি হবে ৫ম পদ।"
        },
        "questionPatterns": [
          {
            "typeTitle": "$x$-বর্জিত পদ নির্ণয় (Independent of $x$)",
            "recognition": "প্রশ্নে $\\left(x^2 + \\frac{1}{x}\\right)^6$ বা $\\left(2x - \\frac{1}{x^2}\\right)^9$ থাকবে এবং $x$-বর্জিত পদের মান চাইবে।",
            "requiredConcept": "শর্টকাট $r = \\frac{np}{p+q}$ এবং সাধারণ পদে মান বসানো।",
            "strategy": "১) শর্টকাটে $r$ বের করুন। ২) $T_{r+1}$ পদে $r$ বসিয়ে সাংখ্যিক মান বের করুন।",
            "keySteps": [
              "$p, q, n$ চিহ্নিত করা",
              "$r = np/(p+q)$ বের করা",
              "$T_{r+1}$ এর মান গণনা"
            ],
            "commonTraps": "সহগের মাইনাস চিহ্ন অগ্রাহ্য করা।"
          }
        ],
        "easyExample": {
          "problem": "$\\left(x + \\frac{1}{x}\\right)^6$ এর বিস্তৃতিতে $x$-বর্জিত পদটি কততম এবং এর মান কত?",
          "solutionSteps": [
            "এখানে $n = 6$, প্রথম পদে $x$ এর ঘাত $p = 1$, হরে $x$ এর ঘাত $q = 1$।",
            "$x$-বর্জিত পদের জন্য $r = \\frac{np}{p+q} = \\frac{6 \\times 1}{1 + 1} = \\frac{6}{2} = 3$।",
            "অতএব পদটি হলো $(r+1) = (3+1) = 4$-তম পদ।",
            "৪র্থ পদের মান: $T_{3+1} = ^6C_3 (x)^{6-3} \\left(\\frac{1}{x}\\right)^3 = ^6C_3 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20$।"
          ],
          "answer": "৪র্থ পদ, মান $= 20$"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "$\\left(2x^2 - \\frac{1}{x}\\right)^9$ এর বিস্তৃতিতে $x$-বর্জিত পদটির মান কত?",
          "recognitionApproach": "এখানে $n = 9, p = 2, q = 1$। $x$-বর্জিত পদের জন্য $r = \\frac{np}{p+q}$।",
          "stepByStepSolution": "১) $r = \\frac{9 \\times 2}{2 + 1} = \\frac{18}{3} = 6$।\n২) পদটি হলো $(6+1) = 7$-তম পদ।\n৩) মান: $T_{6+1} = ^9C_6 (2x^2)^{9-6} \\left(-\\frac{1}{x}\\right)^6$।\n৪) $^9C_6 = ^9C_3 = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84$।\n৫) সাংখ্যিক অংশ: $84 \\times 2^3 \\times (-1)^6 = 84 \\times 8 \\times 1 = 672$।",
          "whyItWorks": "সাধারণ পদে $x^{2(9-r)} \\cdot x^{-r} = x^{18-3r} = x^0 \\implies 18 - 3r = 0 \\implies r = 6$।",
          "calcAvoidanceTrick": "$r = 18/3 = 6$ মুখে মুখে। মান: $^9C_3 \\times 8 = 84 \\times 8 = 672$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$T_{r+1} = ^nC_r a^{n-r} b^r$",
            "শর্টকাট: $r = \\frac{np-k}{p+q}$",
            "$x$-বর্জিত: $r = \\frac{np}{p+q}$",
            "পদসংখ্যা: $n+1$",
            "সহগ সমষ্টি: $2^n$"
          ],
          "importantConditions": [
            "$r$ ভগ্নাংশ আসলে ঐ পদটির অস্তিত্ব নেই (সহগ শূন্য)।"
          ],
          "keyObservations": [
            "জোড় ঘাতে মধ্যপদ ১টি, বিজোড় ঘাতে মধ্যপদ ২টি।"
          ],
          "recognitionTips": [
            "$x$-বর্জিত মানেই $r = np/(p+q)$।"
          ],
          "commonMistakes": [
            "মাইনাস চিহ্নের ঘাত জোড়-বিজোড় খেয়াল না করা।"
          ],
          "summary": "সাধারণ পদ $T_{r+1} = ^nC_r a^{n-r}b^r$। $x$-বর্জিত পদের জন্য $r = \\frac{np}{p+q}$।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "$x$-বর্জিত পদ ও নির্দিষ্ট ঘাতের সহগ",
        "description": "দ্বিপদী বিস্তৃতিতে $x$-বর্জিত পদের মান ও ক্রম এবং নির্দিষ্ট ঘাত $x^k$ এর সহগ নির্ণয়।",
        "solvingStrategy": "১) সুপার শর্টকাট $r = \\frac{np-k}{p+q}$ দিয়ে $r$ বের করুন। ২) $T_{r+1}$ এ মান বসিয়ে সহগ নিন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-2008",
            "question": "$(a+x)^5$ এর বিস্তৃতিতে $x^3$ এর সহগ 40 হলে a এর মান কত? [JU'14-15]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "2"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\pm 2$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$-2$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "কোনটিই নয়"
              }
            ],
            "answer": "a",
            "explanation": "Sol\\*: $(a+x)^5$ এর বিস্তৃতিতে $T_{r+1} = {}^{5}C_r a^{5-r} x^r$\r\n$x^3$ এর সহগ: ${}^5C_3 a^{5-3} = 40$\r\n$\\Rightarrow a^2 = \\frac{40}{{}^5C_3} = 4 = a = \\pm 2$",
            "university": "JU",
            "year": "14-15",
            "topic": "T-01:"
          },
          {
            "id": "math-q-2009",
            "question": "$(1+x^2)^7$ এর বিস্তৃতিতে $x^6$ এর সহগ নির্ণয় কর। [JU'14-15]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "36"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "30"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "35"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "25"
              }
            ],
            "answer": "a",
            "explanation": "Sol\\*: $(1+x^2)^7$ এর\r\n$T_{r+1} = {}^7C_r \\times (1)^{7-r} \\times (x^2)^r$\r\nএখন, $2r = 6 \\Rightarrow r = 3$\r\n$\\therefore x^6$ এর সহগ = ${}^7C_3 \\times 1^4 = {}^7C_3 = 35$",
            "university": "JU",
            "year": "14-15",
            "topic": "T-01:"
          },
          {
            "id": "math-q-2010",
            "question": "$(3x - \\frac{2}{x^2})^{15}$ এর বিস্তৃতিতে x বর্জিত পদ কোনটি?\r\n[CU'13-14, 12-13]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "7তম"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "6 তম"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "15 তম"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "8 তম"
              }
            ],
            "answer": "a",
            "explanation": "Sol\\*: $(3x - \\frac{2}{x^2})^{15}$ এর বিস্তৃতিতে সাধারণ পদ\r\n$(r+1)^{th} = {}^{15}C_r (3x)^{15-r} (-\\frac{2}{x^2})^r$\r\n$= {}^{15}C_r 3^{15-r} (-2)^r x^{15-3r}$\r\nX বর্জিত পদ, $15-3r = 0$\r\nঅথবা, $r = 5$ $\\therefore$ x বর্জিত পদ, 6 তম পদ।\r\n[Shortcut: x বর্জিত হলে, $r = \\frac{15-0}{3} = 5$;\r\n$\\therefore$ 6 তম পদ]",
            "university": "Admission",
            "year": "",
            "topic": "T-01:"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-2011",
            "question": "$(\\frac{1}{3} - x)^n$ এর বিস্তৃতিতে 13 তম পদ ধ্রুবক হলে n এর মান কত হবে? [KU'13-14]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "16"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "18"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "20"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "কোনটিই নয়"
              }
            ],
            "answer": "a",
            "explanation": "Sol\\*: $(\\frac{1}{3} - x)^n$ এর বিস্তৃতিতে $(r+1)$ তম পদ\r\n$= {}^{n}C_r (\\frac{1}{3})^{n-r} (-x)^r = {}^{n}C_r (-1)^r x^{4r-3n}$\r\nধ্রুবক পদের জন্য $4r - 3n = 0$\r\n13 তম পদের $r = 12; n = 16$\r\n\r\n(ি)",
            "university": "KU",
            "year": "13-14",
            "topic": "T-01:",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "$x$-বর্জিত পদের শর্টকাট $r = \\frac{np}{p+q}$ এর প্রমাণ",
        "description": "সূচকের সমীকরণ $p(n-r) - qr = 0$ থেকে কীভাবে শর্টকাটটি প্রতিপাদিত হয়?",
        "promptQuery": "দ্বিপদী বিস্তৃতিতে $x$-বর্জিত পদের শর্টকাট সূত্র $r = \\frac{np}{p+q}$ এর বীজগণিতীয় প্রতিপাদন দেখাও।"
      },
      {
        "title": "দ্বিপদী সহগসমূহের সমষ্টি $2^n$ হওয়ার কম্বিনেটোরিয়াল প্রমাণ",
        "description": "$(1+1)^n = 2^n$ প্রতিস্থাপন ও উপসেট গণনার সংযোগ।",
        "promptQuery": "প্রমাণ করো যে $^nC_0 + ^nC_1 + ^nC_2 + \\dots + ^nC_n = 2^n$ এবং এর উপসেট গণনা তাৎপর্য ব্যাখ্যা করো।"
      },
      {
        "title": "ঋণাত্মক ও ভগ্নাংশ ঘাতের দ্বিপদী বিস্তৃতি ও অভিসারিতা",
        "description": "$(1+x)^n$ এর বিস্তৃতি কখন অভিসারী (Convergent) হয় এবং কেন $|x| < 1$ শর্ত বাধ্যতামূলক?",
        "promptQuery": "ঋণাত্মক ও ভগ্নাংশ ঘাতের জন্য দ্বিপদী উপপাদ্যের শর্তাবলী এবং অভিসারিতা ব্যবধি ব্যাখ্যা করো।"
      },
      {
        "title": "ত্রিপদী রাশির বিস্তৃতিতে পদসংখ্যা ও সহগ নির্ণয়",
        "description": "$(a+b+c)^n$ এর পদসংখ্যা $\\frac{(n+1)(n+2)}{2}$ কেন হয়?",
        "promptQuery": "ত্রিপদী রাশি $(a+b+c)^n$ এর মোট পদসংখ্যা এবং নির্দিষ্ট পদের সহগ বের করার বহুপদী সহগ পদ্ধতি আলোচনা করো।"
      },
      {
        "title": "দ্বিপদী বিস্তৃতি অধ্যায়ের শীর্ষ ৩টি ভর্তি পরীক্ষা ফাঁদ",
        "description": "পদসংখ্যা বনাম পদক্রমের ভুল এবং ঋণাত্মক পদের চিহ্নের ভুল।",
        "promptQuery": "দ্বিপদী বিস্তৃতি অধ্যায়ে ভর্তি পরীক্ষায় সবচেয়ে বেশি হওয়া ৩টি সাধারণ ভুল ও ট্রিকি প্রশ্ন সমাধানসহ বিশ্লেষণ করো।"
      }
    ],
    "questionCount": 81
  },
  {
    "id": "ch-conics",
    "paper": "Second-Paper",
    "paperBn": "২য় পত্র",
    "chapterNum": 6,
    "nameBn": "কণিক",
    "nameEn": "Conics",
    "rawName": "কণিক",
    "summary": "উচ্চতর গণিত ২য় পত্রের সবচেয়ে গুরুত্বপূর্ণ জ্যামিতি অধ্যায়। কণিক শনাক্তকরণ, উৎকেন্দ্রিকতা ($e$), পরাবৃত্ত ($y^2=4ax$), উপবৃত্ত ($\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$) ও অধিবৃত্তের শীর্ষ, উপকেন্দ্র, নিয়ামক ও উপকেন্দ্রিক লম্বের দৈর্ঘ্য সংক্রান্ত প্রচুর প্রশ্ন বুয়েট ও বিশ্ববিদ্যালয়ে নিশ্চিত আসে।",
    "topics": [
      "কণিক শনাক্তকরণ ও উৎকেন্দ্রিকতা ($e$)",
      "পরাবৃত্তের সমীকরণ ও বৈশিষ্ট্য",
      "উপবৃত্তের উপাদান ও ক্ষেত্রফল",
      "অধিবৃত্ত ও অসীমতট",
      "কণিকের স্পর্শক ও প্যারামেট্রিক রূপ"
    ],
    "concepts": [
      {
        "id": "c-conic-01",
        "title": "কণিক শনাক্তকরণ ও উৎকেন্দ্রিকতা (Classification of Conics & Eccentricity)",
        "topic": "কণিক শনাক্তকরণ ও উৎকেন্দ্রিকতা ($e$)",
        "summary": "উৎকেন্দ্রিকতার মান ও সাধারণ দ্বিঘাত সমীকরণ হতে কণিক (বৃত্ত, পরাবৃত্ত, উপবৃত্ত, অধিবৃত্ত) শনাক্তকরণের শর্টকাট।",
        "intro": {
          "what": "কণিক হলো এমন একটি বিন্দুর সঞ্চারপথ যার একটি নির্দিষ্ট স্থির বিন্দু (উপকেন্দ্র $S$) হতে দূরত্ব এবং একটি স্থির সরলরেখা (নিয়ামক $MZ$) হতে দূরত্বের অনুপাত সর্বদা একটি ধ্রুবক $e$ (উৎকেন্দ্রিকতা)। অর্থাৎ $SP = e \\cdot PM$।",
          "whyImportant": "ভর্তি পরীক্ষার প্রতিটি সেটে সমীকরণ দেখে কণিক চেনা ($h^2 - ab$ টেস্ট) এবং $e$ এর মান সংক্রান্ত অন্তত একটি প্রশ্ন নিশ্চিত থাকে।",
          "whereUsed": "গ্রহ ও ধূমকেতুর কক্ষপথ (উপবৃত্ত/অধিবৃত্ত), স্যাটেলাইট ডিশ ও প্যারাবোলিক রিফ্লেক্টর ডিজাইন।",
          "prerequisites": "বিন্দু থেকে রেখার লম্ব দূরত্ব ও দ্বিঘাত সমীকরণ।"
        },
        "easyExplanation": [
          "উৎকেন্দ্রিকতা $e$ এর পরিচয়: $e = 0$ হলে বৃত্ত, $e = 1$ হলে পরাবৃত্ত (Parabola), $0 < e < 1$ হলে উপবৃত্ত (Ellipse), $e > 1$ হলে অধিবৃত্ত (Hyperbola), এবং $e = \\sqrt{2}$ হলে আয়তাকার অধিবৃত্ত (Rectangular Hyperbola)।",
          "সাধারণ দ্বিঘাত সমীকরণ $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ থেকে কণিক চেনার ৫ সেকেন্ডের শর্টকাট: ১) যদি $xy$ পদ না থাকে ($h=0$): $x^2$ ও $y^2$ এর চিহ্ন একই ও সহগ ভিন্ন হলে উপবৃত্ত; সহগ সমান হলে বৃত্ত; যেকোনো একটি বর্গীয় পদ থাকলে ($x^2$ আছে কিন্তু $y^2$ নেই বা বিপরীত) পরাবৃত্ত; চিহ্ন বিপরীত হলে অধিবৃত্ত! ২) যদি $xy$ পদ থাকে ($h \\neq 0$): $h^2 - ab = 0$ পরাবৃত্ত, $h^2 - ab < 0$ উপবৃত্ত, এবং $h^2 - ab > 0$ অধিবৃত্ত।"
        ],
        "formulas": [
          {
            "latex": "SP = e \\cdot PM \\iff \\frac{SP}{PM} = e",
            "name": "কণিকের মৌলিক সংজ্ঞা সমীকরণ",
            "meaning": "উপকেন্দ্রিক দূরত্ব = $e \\times$ নিয়ামক হতে লম্ব দূরত্ব।",
            "whenToUse": "উপকেন্দ্র ও নিয়ামকের সমীকরণ দেওয়া থাকলে কণিকের সমীকরণ গঠনে।",
            "conditions": "$S(x_1, y_1)$ উপকেন্দ্র, $ax+by+c=0$ নিয়ামক।",
            "variables": "$S$: ফোকাস, $PM$: নিয়ামকের উপর লম্ব, $e$: উৎকেন্দ্রিকতা।",
            "commonMistakes": "$PM$ এর ক্ষেত্রে নিচে $\\sqrt{a^2+b^2}$ দিয়ে ভাগ করতে ভুলে যাওয়া।"
          },
          {
            "latex": "e = 1 \\implies \\text{পরাবৃত্ত}, \\quad 0 < e < 1 \\implies \\text{উপবৃত্ত}, \\quad e > 1 \\implies \\text{অধিবৃত্ত}",
            "name": "উৎকেন্দ্রিকতার মানভিত্তিক কণিক",
            "meaning": "অনুপাত $e$ এর মান দেখে কণিকের প্রকৃতি নির্ধারণ।",
            "whenToUse": "সরাসরি থিওরিটিক্যাল প্রশ্নে।",
            "conditions": "$e \\ge 0$।",
            "variables": "$e$: উৎকেন্দ্রিকতা (Eccentricity)।",
            "commonMistakes": "উপবৃত্ত আর অধিবৃত্তের $e$ এর গ্রেটার/লেস গুলিয়ে ফেলা।"
          },
          {
            "latex": "h^2 - ab = 0 \\implies \\text{পরাবৃত্ত}, \\quad h^2 - ab < 0 \\implies \\text{উপবৃত্ত}, \\quad h^2 - ab > 0 \\implies \\text{অধিবৃত্ত}",
            "name": "সাধারণ দ্বিঘাতের কণিক শনাক্তকরণ টেস্ট",
            "meaning": "$ax^2+2hxy+by^2+\\dots=0$ তে $h^2-ab$ এর চিহ্ন পরীক্ষা (যখন $\\Delta \\neq 0$)।",
            "whenToUse": "$xy$ পদযুক্ত সমীকরণের প্রকৃতি নির্ধারণে।",
            "conditions": "নির্ণায়ক $\\Delta = abc + 2fgh - af^2 - bg^2 - ch^2 \\neq 0$।",
            "variables": "$a$: $x^2$ এর সহগ, $b$: $y^2$ এর সহগ, $2h$: $xy$ এর সহগ।",
            "commonMistakes": "$xy$ এর সহগকে $h$ না ধরে সরাসরি বসানো (সহগ হলো $2h$, তাই অর্ধেক করতে হবে)।"
          }
        ],
        "analysis": {
          "conditions": "যদি সমীকরণে কেবল $xy = c^2$ বা $xy = 4$ থাকে, তবে এটি একটি আয়তাকার অধিবৃত্ত (Rectangular Hyperbola) যার উৎকেন্দ্রিকতা $e = \\sqrt{2}$ এবং অসীমতটদ্বয় হলো স্থানাঙ্কের অক্ষদ্বয় ($x=0, y=0$)।",
          "variations": "উপবৃত্তের উৎকেন্দ্রিকতা: $e = \\sqrt{1 - \\frac{b^2}{a^2}} = \\sqrt{\\frac{a^2-b^2}{a^2}}$ ($a > b$ হলে)।",
          "relationships": "অধিবৃত্তের উৎকেন্দ্রিকতা: $e = \\sqrt{1 + \\frac{b^2}{a^2}} = \\sqrt{\\frac{a^2+b^2}{a^2}}$। লক্ষ্য করুন: উপবৃত্তে মাইনাস, অধিবৃত্তে প্লাস!",
          "transformations": "পরাবৃত্তের সমীকরণে যেকোনো একটি চলকের দ্বিঘাত এবং অপর চলকের একঘাত থাকে (যেমন $y^2 = 4ax$ বা $x^2 = 4ay$)।",
          "misunderstandings": "$xy = 4$ সমীকরণ দেখে অনেকে কণিক নয় মনে করে, অথচ এটি একটি বিখ্যাত আয়তাকার অধিবৃত্ত।"
        },
        "questionPatterns": [
          {
            "typeTitle": "সমীকরণ দেখে কণিক শনাক্তকরণ",
            "recognition": "প্রশ্নে একটি দ্বিঘাত সমীকরণ দেওয়া থাকবে এবং কণিকটি কী নির্দেশ করে জানতে চাইবে।",
            "requiredConcept": "সহগের চিহ্ন ও $h^2 - ab$ পরীক্ষা।",
            "strategy": "১) $xy$ পদ আছে কিনা দেখুন। ২) না থাকলে $x^2$ ও $y^2$ এর সহগের চিহ্ন দেখুন: বিপরীত হলে অধিবৃত্ত, একই ও ভিন্ন মান হলে উপবৃত্ত, একটি অনুপস্থিত হলে পরাবৃত্ত।",
            "keySteps": [
              "বর্গীয় পদের উপস্থিতি দেখা",
              "চিহ্ন তুলনা করা",
              "কণিক নির্ধারণ"
            ],
            "commonTraps": "ডানপাশের ধ্রুবকের কারণে বিভ্রান্ত হওয়া।"
          }
        ],
        "easyExample": {
          "problem": "$16x^2 + 25y^2 = 400$ সমীকরণটি কোন কণিক নির্দেশ করে এবং এর উৎকেন্দ্রিকতা কত?",
          "solutionSteps": [
            "$400$ দিয়ে উভয় পক্ষে ভাগ করি: $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$।",
            "এটি $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ আকারের একটি উপবৃত্ত যেখানে $a^2 = 25, b^2 = 16$ ($a > b$)।",
            "উৎকেন্দ্রিকতা: $e = \\sqrt{1 - \\frac{b^2}{a^2}} = \\sqrt{1 - \\frac{16}{25}} = \\sqrt{\\frac{9}{25}} = \\frac{3}{5} = 0.6$।",
            "যেহেতু $0 < e < 1$, এটি নিশ্চিতভাবে একটি উপবৃত্ত।"
          ],
          "answer": "উপবৃত্ত, $e = 3/5$"
        },
        "examExample": {
          "examTag": "DU / Agri / GST Admission",
          "problem": "$xy = 4$ সমীকরণটি কোন কণিক নির্দেশ করে এবং এর উৎকেন্দ্রিকতা কত?",
          "recognitionApproach": "এখানে $x^2$ এর সহগ $a = 0$, $y^2$ এর সহগ $b = 0$, এবং $xy$ এর সহগ $2h = 1 \\implies h = 1/2$।",
          "stepByStepSolution": "১) $h^2 - ab = (1/2)^2 - (0)(0) = 1/4 > 0$।\n২) যেহেতু $h^2 - ab > 0$ এবং $a + b = 0 + 0 = 0$, এটি একটি আয়তাকার অধিবৃত্ত (Rectangular Hyperbola)।\n৩) আয়তাকার অধিবৃত্তের অসীমতটদ্বয় পরস্পর লম্ব এবং এর উৎকেন্দ্রিকতা সর্বদা $e = \\sqrt{2}$।",
          "whyItWorks": "স্থানাঙ্কের অক্ষদ্বয়কে $45^circ$ কোণে আবর্তন করলে সাধারণ অধিবৃত্ত $x^2 - y^2 = a^2$ পরিবর্তিত হয়ে $xy = c^2$ রূপ লাভ করে।",
          "calcAvoidanceTrick": "$xy = c$ দেখলেই চোখ বন্ধ করে উত্তর \"আয়তাকার অধিবৃত্ত\" এবং $e = \\sqrt{2}$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$e=1 \\implies$ পরাবৃত্ত",
            "$e<1 \\implies$ উপবৃত্ত",
            "$e>1 \\implies$ অধিবৃত্ত",
            "$e=\\sqrt{2} \\implies$ আয়তাকার অধিবৃত্ত ($xy=c$)",
            "উপবৃত্ত: $e = \\sqrt{1-b^2/a^2}$",
            "অধিবৃত্ত: $e = \\sqrt{1+b^2/a^2}$"
          ],
          "importantConditions": [
            "উপবৃত্তে রুটের ভেতর মাইনাস, অধিবৃত্তে প্লাস।"
          ],
          "keyObservations": [
            "$a+b=0$ এবং $h^2-ab>0$ হলে আয়তাকার অধিবৃত্ত।"
          ],
          "recognitionTips": [
            "একটির বর্গ থাকলে পরাবৃত্ত, বিপরীত চিহ্ন হলে অধিবৃত্ত, একই চিহ্ন হলে উপবৃত্ত।"
          ],
          "commonMistakes": [
            "উপবৃত্তের সূত্রে $a$ ও $b$ উল্টে ফেলা ($a>b$ তে নিচে $a^2$ থাকে)।"
          ],
          "summary": "$e=1$ পরাবৃত্ত, $e<1$ উপবৃত্ত, $e>1$ অধিবৃত্ত। $xy=c$ আয়তাকার অধিবৃত্ত ($e=\\sqrt{2}$)।"
        }
      },
      {
        "id": "c-conic-02",
        "title": "পরাবৃত্তের উপাদান ও ফোকাস দূরত্ব (Parabola Properties & Focal Distance)",
        "topic": "পরাবৃত্তের সমীকরণ ও বৈশিষ্ট্য",
        "summary": "$y^2 = 4ax$ এবং $x^2 = 4ay$ এর শীর্ষ, উপকেন্দ্র, নিয়ামক, উপকেন্দ্রিক লম্বের দৈর্ঘ্য ($4a$) এবং ফোকাস দূরত্ব ($x_1 + a$)।",
        "intro": {
          "what": "পরাবৃত্ত হলো এমন একটি কণিক যার প্রতিটি বিন্দু উপকেন্দ্র ও নিয়ামক থেকে সমান দূরত্বে থাকে ($e = 1$)। আদর্শ রূপ $y^2 = 4ax$ এর শীর্ষ $(0, 0)$, উপকেন্দ্র $(a, 0)$, এবং নিয়ামকের সমীকরণ $x + a = 0$।",
          "whyImportant": "উপকেন্দ্রিক লম্বের দৈর্ঘ্য ($|4a|$) এবং কোনো বিন্দুর ফোকাস দূরত্ব ($x_1 + a$) নির্ণয়ের প্রশ্ন ভর্তি পরীক্ষায় সবচেয়ে ঘন ঘন আসে।",
          "whereUsed": "টেলিস্কোপের অবতল দর্পণ, গাড়ির হেডলাইট ও প্রক্ষেপকের গতিপথ।",
          "prerequisites": "বর্গের রূপান্তর ও শীর্ষবিন্দু নির্ণয়।"
        },
        "easyExplanation": [
          "সমীকরণ দেখে পরাবৃত্তের মুখ চেনার নিয়ম: যে চলকটির ঘাত ১ (একঘাত), পরাবৃত্তটি সেই অক্ষের দিকে খোলা থাকে! যেমন $y^2 = 4ax$ এ $x$ এর ঘাত ১, তাই এটি $x$-অক্ষের দিকে খোলা।",
          "উপকেন্দ্রিক লম্বের দৈর্ঘ্য হলো একঘাত চলকটির মোট সহগের পরমমান: $|4a|$। যেমন $y^2 = 12x$ হলে উপকেন্দ্রিক লম্বের দৈর্ঘ্য সরাসরি $12$!",
          "ফোকাস দূরত্বের সুপার শর্টকাট: $y^2 = 4ax$ পরাবৃত্তের উপরস্থ কোনো বিন্দু $(x_1, y_1)$ এর ফোকাস দূরত্ব $= x_1 + a$। কোনো জটিল দূরত্ব সূত্র করার কোনো প্রয়োজন নেই!"
        ],
        "formulas": [
          {
            "latex": "y^2 = 4ax \\implies \\text{শীর্ষ: } (0, 0), \\quad \\text{উপকেন্দ্র: } (a, 0), \\quad \\text{নিয়ামক: } x + a = 0",
            "name": "$x$-অক্ষীয় পরাবৃত্তের উপাদান",
            "meaning": "আদর্শ পরাবৃত্তের প্রধান উপাদানসমূহ।",
            "whenToUse": "উপকেন্দ্র, নিয়ামক বা শীর্ষ নির্ণয়ে।",
            "conditions": "শীর্ষ মূলবিন্দুতে।",
            "variables": "$a$: ফোকাস দূরত্ব।",
            "commonMistakes": "$4a$ এর জায়গায় সরাসরি সহগ বসানো ($a$ বের করতে ৪ দিয়ে ভাগ করতে হয়)।"
          },
          {
            "latex": "\\text{উপকেন্দ্রিক লম্বের দৈর্ঘ্য} = |4a| = |\\text{একঘাত চলকের সহগ}|",
            "name": "উপকেন্দ্রিক লম্বের দৈর্ঘ্য শর্টকাট",
            "meaning": "উপকেন্দ্র দিয়ে গমনকারী লম্ব জ্যা এর দৈর্ঘ্য।",
            "whenToUse": "উপকেন্দ্রিক লম্বের দৈর্ঘ্য সরাসরি ১ সেকেন্ডে বের করতে।",
            "conditions": "সমীকরণ আদর্শ বর্গে রূপান্তরিত হতে হবে।",
            "variables": "$4a$: একঘাত চলকের সহগ।",
            "commonMistakes": "চিহ্ন মাইনাস সহ দৈর্ঘ্য লেখা (দৈর্ঘ্য সর্বদা পরমমান $|4a|$)।"
          },
          {
            "latex": "\\text{ফোকাস দূরত্ব} = x_1 + a \\quad (y^2 = 4ax \\text{ এর জন্য})",
            "name": "পরাবৃত্তের ফোকাস দূরত্বের শর্টকাট",
            "meaning": "উপকেন্দ্র থেকে পরাবৃত্তের উপরস্থ বিন্দুর সরাসরি দূরত্ব।",
            "whenToUse": "বিন্দুর স্থানাঙ্ক দেওয়া থাকলে ফোকাস দূরত্ব নির্ণয়ে।",
            "conditions": "বিন্দুটি পরাবৃত্তের উপর অবস্থিত হতে হবে।",
            "variables": "$x_1$: বিন্দুর $x$-স্থানাঙ্ক, $a$: পরামিতি।",
            "commonMistakes": "দূরত্ব সূত্র $\\sqrt{(x_1-a)^2 + y_1^2}$ করতে গিয়ে সময় নষ্ট করা।"
          }
        ],
        "analysis": {
          "conditions": "যদি শীর্ষ $(h, k)$ হয়, তবে সমীকরণ $(y - k)^2 = 4a(x - h)$। তখন উপকেন্দ্র হবে $(h + a, k)$ এবং নিয়ামক $x - h + a = 0$।",
          "variations": "$x^2 = 4ay$ পরাবৃত্তের ক্ষেত্রে ফোকাস দূরত্ব $= y_1 + a$, উপকেন্দ্র $(0, a)$, এবং নিয়ামক $y + a = 0$।",
          "relationships": "স্পর্শক শর্ত: $y = mx + c$ রেখাটি $y^2 = 4ax$ পরাবৃত্তের স্পর্শক হবে যদি $c = \\frac{a}{m}$ হয়।",
          "transformations": "পরাবৃত্তের প্যারামেট্রিক স্থানাঙ্ক: $(at^2, 2at)$।",
          "misunderstandings": "শিক্ষার্থীরা সমীকরণটিকে $(y-k)^2 = 4a(x-h)$ আকারে না সাজিয়েই সরাসরি সহগ দেখে শীর্ষ ও উপকেন্দ্র বের করে ভুল করে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "উপকেন্দ্রিক লম্বের দৈর্ঘ্য ও ফোকাস দূরত্ব",
            "recognition": "প্রশ্নে $y^2 = 8x$ বা সমমানের সমীকরণ থাকবে এবং উপকেন্দ্রিক লম্ব বা ফোকাস দূরত্ব চাইবে।",
            "requiredConcept": "লম্বের দৈর্ঘ্য $|4a|$ এবং ফোকাস দূরত্ব $x_1 + a$।",
            "strategy": "১) একঘাত চলকের সহগ থেকে $4a$ ও $a$ বের করুন। ২) সরাসরি সূত্রে মান বসান।",
            "keySteps": [
              "$4a$ চিহ্নিত করা",
              "$a$ বের করা",
              "সূত্রে মান বসানো"
            ],
            "commonTraps": "দ্বিঘাত চলকের সাথে সহগ থাকলে তা দিয়ে আগে ভাগ না করা।"
          }
        ],
        "easyExample": {
          "problem": "$y^2 = 12x$ পরাবৃত্তের উপরস্থ কোনো বিন্দুর কোটি $6$ হলে তার ফোকাস দূরত্ব কত?",
          "solutionSteps": [
            "$y^2 = 4(3)x \\implies a = 3$।",
            "বিন্দুটির কোটি $y = 6$। পরাবৃত্তের সমীকরণে বসিয়ে ভুজ $x$ বের করি:",
            "$6^2 = 12x \\implies 36 = 12x \\implies x = 3$।",
            "অতএব বিন্দুটি হলো $(3, 6)$।",
            "ফোকাস দূরত্বের শর্টকাট সূত্র: $x_1 + a = 3 + 3 = 6$ একক।"
          ],
          "answer": "$6$ একক"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "$y^2 - 4y - 8x + 12 = 0$ পরাবৃত্তটির শীর্ষবিন্দু ও উপকেন্দ্রিক লম্বের দৈর্ঘ্য কত?",
          "recognitionApproach": "সমীকরণটিকে পূর্ণবর্গ আকারে সাজিয়ে $(y - k)^2 = 4a(x - h)$ প্রমিত রূপে আনতে হবে।",
          "stepByStepSolution": "১) $y^2 - 4y = 8x - 12$।\n২) উভয় পক্ষে ৪ যোগ করে পূর্ণবর্গ করি: $y^2 - 4y + 4 = 8x - 12 + 4$।\n৩) $(y - 2)^2 = 8x - 8 = 8(x - 1)$।\n৪) প্রমিত রূপ $(y - k)^2 = 4a(x - h)$ এর সাথে তুলনা করে পাই:\nশীর্ষবিন্দু $(h, k) = (1, 2)$।\n৫) উপকেন্দ্রিক লম্বের দৈর্ঘ্য $= |4a| = 8$ একক।",
          "whyItWorks": "দ্বিঘাত চলককে পূর্ণবর্গ করলে শীর্ষবিন্দুর স্থানাঙ্ক স্থানান্তর স্পষ্টভাবে দৃশ্যমান হয়।",
          "calcAvoidanceTrick": "উপকেন্দ্রিক লম্বের দৈর্ঘ্য সর্বদা একঘাত চলক $x$ এর সহগের সমান, অর্থাৎ সমীকরণের শুরুতেই দেখা যায় $|-8| = 8$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "লম্বের দৈর্ঘ্য: $|4a|$",
            "ফোকাস দূরত্ব: $x_1 + a$",
            "শীর্ষ: $(0, 0)$ বা $(h, k)$",
            "স্পর্শক শর্ত: $c = a/m$"
          ],
          "importantConditions": [
            "দ্বিঘাত চলকের সহগ ১ বানিয়ে তবেই $4a$ নির্ধারণ করতে হবে।"
          ],
          "keyObservations": [
            "একঘাতের অক্ষের দিকে পরাবৃত্ত উন্মুক্ত থাকে।"
          ],
          "recognitionTips": [
            "উপকেন্দ্রিক লম্বের দৈর্ঘ্য মানেই একঘাতের সহগের পরমমান।"
          ],
          "commonMistakes": [
            "শীর্ষ স্থানান্তরে $h$ ও $k$ এর চিহ্ন উল্টে ফেলা।"
          ],
          "summary": "পরাবৃত্তে $e=1$। লম্বের দৈর্ঘ্য $|4a|$। ফোকাস দূরত্ব $x_1 + a$। স্পর্শক শর্ত $c = a/m$।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "কণিক শনাক্তকরণ ও উৎকেন্দ্রিকতা নির্ণয়",
        "description": "সাধারণ দ্বিঘাত সমীকরণ হতে কণিক শনাক্তকরণ এবং উপবৃত্ত/অধিবৃত্তের উৎকেন্দ্রিকতা।",
        "solvingStrategy": "১) $xy$ না থাকলে সহগের চিহ্ন দেখুন। ২) $xy$ থাকলে $h^2-ab$ পরীক্ষা করুন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-2089",
            "question": "$16y^2 - 9x^2 + 18x + 64y + 199 = 0$ দ্বারা নির্দেশিত কনিক কোনটি? [COU'25-26; DU'23-24]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "অধিবৃত্ত (hyperbola)"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "বৃত্ত (circle)"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "পরাবৃত্ত (parabola)"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "উপবৃত্ত (ellipse)"
              }
            ],
            "answer": "a",
            "explanation": "**Soln:** $a = -9, b = 16, h = 0, c = 199$, $g = 9, f = 32$\r\n\r\n$\\Delta = \\begin{vmatrix} -9 & 0 & 9 \\\\ 0 & 16 & 32 \\\\ 9 & 32 & 199 \\end{vmatrix} \\neq 0$\r\n\r\n$h^2 - ab = 0^2 - (-9) \\times 16 = 144 > 0$\r\n\r\n$\\therefore$ এটি অধিবৃত্ত নির্দেশ করে।\r\n\r\n**Shortcut:** $16y^2 - 9x^2 + 18x + 64y + 199 = 0$\r\n\r\n$\\therefore$ এখানে কোনো $xy$ যুক্ত পদ নেই এবং $x^2$ ও $y^2$ এর চিহ্ন বিপরীত, তাই এটি একটি অধিবৃত্ত নির্দেশ করে।",
            "university": "Admission",
            "year": "",
            "topic": "T-01: কনিকের প্রকৃতি নির্ণয় সংক্রান্ত"
          },
          {
            "id": "math-q-2090",
            "question": "$xy = \\frac{1}{2}$ সমীকরণটি নির্দেশ করে— [GST'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "সরলরেখা"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "পরাবৃত্ত"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "উপবৃত্ত"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "অধিবৃত্ত"
              }
            ],
            "answer": "d",
            "explanation": "**Soln:** $y = \\frac{1}{2}$; $xy = 1$ এখানে, $a = 0, h = \\frac{1}{2}, b = 0$\r\n\r\n$\\therefore h^2 > ab \\therefore$ সমীকরণটি অধিবৃত্ত নির্দেশ করে।",
            "university": "GST",
            "year": "24-25",
            "topic": "T-01: কনিকের প্রকৃতি নির্ণয় সংক্রান্ত"
          },
          {
            "id": "math-q-2091",
            "question": "$xy = 4$ সমীকরণটি প্রকাশ করে— [Agri'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "একটি বৃত্ত"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "একটি উপবৃত্ত"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "একটি পরাবৃত্ত"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "একটি অধিবৃত্ত"
              }
            ],
            "answer": "d",
            "explanation": "",
            "university": "Agri",
            "year": "24-25",
            "topic": "T-01: কনিকের প্রকৃতি নির্ণয় সংক্রান্ত"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-2092",
            "question": "$2x^2 - 4xy + 3y^2 - x + y - 1 = 0$ সমীকরণের জ্যামিতিক রূপ কোনটি?\r\n[HSTU'24-25; SUST'19-20; RU'18-19]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "উপবৃত্ত"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "পরাবৃত্ত"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "বৃত্ত"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "জোড়া সরল রেখা"
              }
            ],
            "answer": "a",
            "explanation": "**Soln:** $\\Delta = \\begin{vmatrix} 2 & -2 & -\\frac{1}{2} \\\\ -2 & 3 & \\frac{1}{2} \\\\ -\\frac{1}{2} & \\frac{1}{2} & -1 \\end{vmatrix}$\r\n\r\n$= 6 + \\frac{1}{2} + \\frac{1}{2} - \\frac{3}{4} - \\frac{1}{2} + 4 \\neq 0 \\therefore$ এটি কনিক।\r\n\r\n$h^2 - ab = (-2)^2 - 2 \\times 3 = 4 - 6 = -2 < 0$\r\n\r\n$\\therefore$ এটি উপবৃত্ত।",
            "university": "Admission",
            "year": "",
            "topic": "T-01: কনিকের প্রকৃতি নির্ণয় সংক্রান্ত",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "পরাবৃত্তের উপাদান ও শীর্ষবিন্দু নির্ণয়",
        "description": "পূর্ণবর্গ রূপান্তর, শীর্ষবিন্দু, উপকেন্দ্র এবং উপকেন্দ্রিক লম্বের দৈর্ঘ্য সংক্রান্ত সমস্যা।",
        "solvingStrategy": "১) পূর্ণবর্গ করে $(y-k)^2=4a(x-h)$ আকারে আনুন। ২) শীর্ষ $(h, k)$ ও লম্বের দৈর্ঘ্য $|4a|$ নিন।",
        "startIndex": 5,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-2094",
            "question": "$x^2 = 4by$ পরাবৃত্তটি কিসের সাপেক্ষে প্রতিসম? [CU'22-23]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$x$-অক্ষের"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$y$-অক্ষের"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "মূলবিন্দুর"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "কোনোটাই নয়"
              }
            ],
            "answer": "b",
            "explanation": "Sol\\\": সমীকরণে যে চলকে এক ঘাত থাকবে ঐ পরাবৃত্তটি উক্ত অক্ষের সাপেক্ষে প্রতিসম।",
            "university": "CU",
            "year": "22-23",
            "topic": "T-01: কনিকের প্রকৃতি নির্ণয় সংক্রান্ত"
          },
          {
            "id": "math-q-2095",
            "question": "$x^2 = -4ay, a > 0$ অক্ষরেখার কোন দিকে অবস্থিত?\r\n[RU'13-14]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$x$-অক্ষের উপরে"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$y$-অক্ষের ডানদিকে"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$y$-অক্ষের বামদিকে"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$x$-অক্ষের নিচে"
              }
            ],
            "answer": "d",
            "explanation": "Sol\\\":\r\n\r\nউদ্ভাস একাডেমিক এন্ড এডমিশন কেয়ার\r\n৩৩৭\r\nপরিবর্তনের প্রত্যয়ে নিরন্তর পথচলা...",
            "university": "RU",
            "year": "13-14",
            "topic": "T-01: কনিকের প্রকৃতি নির্ণয় সংক্রান্ত"
          },
          {
            "id": "math-q-2096",
            "question": "$y^2 + 8x - 2y - 23 = 0$ পরাবৃত্তের নিয়ামক রেখার সমীকরণ কোনটি? [DU '25-'26]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$x - 5 = 0$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$y - 3 = 0$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$x - 3 = 0$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$y - 5 = 0$"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": পরাবৃত্তের সমীকরণ, $y^2 + 8x - 2y - 23 = 0$\r\n$\\Rightarrow y^2 - 2y + 1 = 24 - 8x$\r\n$\\Rightarrow (y - 1)^2 = (-8)(x - 3)$\r\n$\\Rightarrow (y - 1)^2 = 4 \\cdot (-2)(x - 3)$\r\n$\\Rightarrow Y^2 = 4aX$\r\n[ধরি, $X = x - 3; Y = y - 1$ এবং $a = -2$]\r\nপরাবৃত্তের নিয়ামকের সমীকরণ, $X = -a$\r\n$\\Rightarrow x - 3 = -(-2) \\Rightarrow x - 5 = 0$",
            "university": "Admission",
            "year": "",
            "topic": "T-01: কনিকের প্রকৃতি নির্ণয় সংক্রান্ত"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-2097",
            "question": "$y^2 = 4x + 8y$ পরাবৃত্তের শীর্ষবিন্দুটির স্থানাঙ্ক কত? [Jnu '25-'26]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$(-4, 4)$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$(4, 4)$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$(4, -4)$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$(-4, -4)$"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": $y^2 = 4x + 8y \\Rightarrow y^2 - 8y = 4x$\r\n$\\Rightarrow y^2 - 2 \\cdot y \\cdot 4 + 4^2 = 4x + 4^2$\r\n$\\Rightarrow (y - 4)^2 = 4(x + 4)$\r\n$\\therefore$ শীর্ষ $(-4, 4)$",
            "university": "Admission",
            "year": "",
            "topic": "T-01: কনিকের প্রকৃতি নির্ণয় সংক্রান্ত",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "কণিকের দ্বিমেরু রূপ (Polar Equation $l/r = 1 + e\\cos\\theta$)",
        "description": "জ্যোতির্বিদ্যায় কেন কার্তেসীয় রূপের চেয়ে পোলার সমীকরণ অধিক ব্যবহৃত হয়?",
        "promptQuery": "কণিকের পোলার সমীকরণ $\\frac{l}{r} = 1 + e\\cos\\theta$ এর প্রতিপাদন এবং জ্যোতির্বিদ্যায় এর ব্যবহার ব্যাখ্যা করো।"
      },
      {
        "title": "পরাবৃত্তের ফোকাস দূরত্বের শর্টকাট $x_1 + a$ এর প্রমাণ",
        "description": "উপকেন্দ্র হতে দূরত্ব = নিয়ামক হতে দূরত্ব ($SP = PM$) সংজ্ঞা দিয়ে মাত্র ২ লাইনে প্রমাণ।",
        "promptQuery": "পরাবৃত্তের উপরস্থ বিন্দুর ফোকাস দূরত্ব $x_1 + a$ হওয়ার জ্যামিতিক প্রমাণ সহজ চিত্রের সাহায্যে বুঝিয়ে দাও।"
      },
      {
        "title": "উপবৃত্তের ক্ষেত্রফল $\\pi ab$ এবং পরাবৃত্তের ক্ষেত্রফল",
        "description": "কণিকসমূহের আবদ্ধ ক্ষেত্রফলের তুলনামূলক বিশ্লেষণ।",
        "promptQuery": "উপবৃত্ত $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$ এর ক্ষেত্রফল $\\pi ab$ এবং পরাবৃত্তের ক্ষেত্রফলের শর্টকাট আলোচনা করো।"
      },
      {
        "title": "অধিবৃত্তের অসীমতটদ্বয়ের সমীকরণ ($y = \\pm \\frac{b}{a}x$)",
        "description": "অসীমতট কী এবং কেন এটি বক্ররেখাকে অসীমে গিয়ে স্পর্শ করে?",
        "promptQuery": "অধিবৃত্তের অসীমতটের (Asymptotes) গাণিতিক সংজ্ঞা, সমীকরণ এবং বৈশিষ্ট্য উদাহরণসহ ব্যাখ্যা করো।"
      },
      {
        "title": "কণিক অধ্যায়ের শীর্ষ ভর্তি পরীক্ষা ফাঁদ",
        "description": "উপবৃত্ত বনাম অধিবৃত্তের সূত্রের চিহ্ন ভুল এবং শীর্ষ স্থানান্তরের সাধারণ বিভ্রান্তি।",
        "promptQuery": "কণিক অধ্যায়ে ভর্তি পরীক্ষায় সবচেয়ে বেশি ভুল হওয়া ৩টি প্রশ্ন ও কনসেপচুয়াল ফাঁদ বিশ্লেষণ করো।"
      }
    ],
    "questionCount": 156
  },
  {
    "id": "ch-inv-trig",
    "paper": "Second-Paper",
    "paperBn": "২য় পত্র",
    "chapterNum": 7,
    "nameBn": "বিপরীত ত্রিকোণমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ",
    "nameEn": "Inverse Trigonometric Functions & Equations",
    "rawName": "বিপরীত ত্রিকোণমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ",
    "summary": "উচ্চতর গণিত ২য় পত্রের অত্যন্ত সমৃদ্ধ অধ্যায়। বিপরীত বৃত্তীয় ফাংশনের ডোমেন-রেঞ্জ ও মুখ্য মান শাখা, $\tan^{-1}x + \tan^{-1}y$ রূপান্তর, এবং সাধারণ সমাধান ($sin\theta=0, cos\theta=0, sin\theta=k$) থেকে ভর্তি পরীক্ষায় নিয়মিত প্রশ্ন আসে।",
    "topics": [
      "বিপরীত ফাংশনের ডোমেন, রেঞ্জ ও মুখ্য মান",
      "বিপরীত ত্রিকোণমিতিক রূপান্তর সূত্র",
      "$2\tan^{-1}x$ এর বহুবিধ রূপান্তর",
      "ত্রিকোণমিতিক সমীকরণের সাধারণ সমাধান"
    ],
    "concepts": [
      {
        "id": "c-inv-01",
        "title": "মুখ্য মান শাখা ও ডোমেন-রেঞ্জ (Principal Value Branches, Domain & Range)",
        "topic": "বিপরীত ফাংশনের ডোমেন, রেঞ্জ ও মুখ্য মান",
        "summary": "বিপরীত ত্রিকোণমিতিক ফাংশনের সংজ্ঞা, এক-এক শর্ত এবং $sin^{-1}x, cos^{-1}x, \tan^{-1}x$ এর মুখ্য ব্যবধি।",
        "intro": {
          "what": "ত্রিকোণমিতিক ফাংশনগুলো পর্যায়বৃত্ত হওয়ায় এদের সরাসরি বিপরীত ফাংশন থাকে না। তাই এদের ডোমেনকে একটি নির্দিষ্ট মুখ্য ব্যবধিতে (Principal Value Branch) সীমাবদ্ধ করে বিপরীত ফাংশন তৈরি করা হয়।",
          "whyImportant": "ভর্তি পরীক্ষায় \"$cos^{-1}(-1/2)$ এর মুখ্য মান কত?\" বা ডোমেন সংক্রান্ত প্রশ্ন প্রতিবছর আসে এবং বহু শিক্ষার্থী ঋণাত্মক কোণ দিয়ে ভুল করে।",
          "whereUsed": "রোবটিক আর্মের ইনভার্স কাইনেমেটিক্স (কোণ বের করা), নেভিগেশন ও গেম ফিজিক্সে অবজেক্টের ওরিয়েন্টেশনে।",
          "prerequisites": "মৌলিক ত্রিকোণমিতিক অনুপাত ও ফাংশনের রেঞ্জ।"
        },
        "easyExplanation": [
          "১) $sin^{-1}x$ এর ডোমেন $[-1, 1]$ এবং মুখ্য রেঞ্জ $[-\frac{pi}{2}, \frac{pi}{2}]$ (১ম ও ৪র্থ চতুর্ভাগ)। মাইনাস থাকলে সোজা বাইরে আসে: $sin^{-1}(-x) = -sin^{-1}x$।",
          "২) $cos^{-1}x$ এর ডোমেন $[-1, 1]$ এবং মুখ্য রেঞ্জ $[0, pi]$ (১ম ও ২য় চতুর্ভাগ—কখনো ঋণাত্মক কোণ হতে পারে না!)। মাইনাস থাকলে $pi$ থেকে বিয়োগ হয়: $cos^{-1}(-x) = pi - cos^{-1}x$। এটি সবচেয়ে গুরুত্বপূর্ণ!",
          "৩) $\tan^{-1}x$ এর ডোমেন সকল বাস্তব সংখ্যা $mathbb{R}$ এবং মুখ্য রেঞ্জ $(-\frac{pi}{2}, \frac{pi}{2})$।"
        ],
        "formulas": [
          {
            "latex": "\\sin^{-1}(-x) = -\\sin^{-1}x, \\quad \\cos^{-1}(-x) = \\pi - \\cos^{-1}x, \\quad \\tan^{-1}(-x) = -\\tan^{-1}x",
            "name": "ঋণাত্মক মানের বিপরীত রূপান্তর সূত্র",
            "meaning": "বিপরীত ফাংশনে ঋণাত্মক মান থাকলে মুখ্য মান বের করার নিয়ম।",
            "whenToUse": "ইনপুট মান ঋণাত্মক হলে মুখ্য মান বের করতে।",
            "conditions": "মান ডোমেনের মধ্যে থাকতে হবে।",
            "variables": "$x$: সংখ্যাত্মক ইনপুট।",
            "commonMistakes": "$\\cos^{-1}(-x) = -\\cos^{-1}x$ লিখে ফেলা (সঠিক হলো $\\pi - \\cos^{-1}x$)।"
          },
          {
            "latex": "\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}, \\quad \\tan^{-1}x + \\cot^{-1}x = \\frac{\\pi}{2}, \\quad \\sec^{-1}x + \\csc^{-1}x = \\frac{\\pi}{2}",
            "name": "পূরক কোণের গোল্ডেন অভেদত্রয়",
            "meaning": "অনুরূপ বিপরীত ফাংশনদ্বয়ের যোগফল সর্বদা এক সমকোণ বা $\\pi/2$।",
            "whenToUse": "জটিল বিপরীত রাশি সরলীকরণে ও সমীকরণ সমাধানে।",
            "conditions": "$x$ সংশ্লিষ্ট ডোমেনের মধ্যে অবস্থিত।",
            "variables": "$x$: একই বাস্তব মান।",
            "commonMistakes": "ভিন্ন মান থাকলে প্রয়োগ করা।"
          },
          {
            "latex": "2\\tan^{-1}x = \\sin^{-1}\\left(\\frac{2x}{1+x^2}\\right) = \\cos^{-1}\\left(\\frac{1-x^2}{1+x^2}\\right) = \\tan^{-1}\\left(\\frac{2x}{1-x^2}\\right)",
            "name": "$2\\tan^{-1}x$ এর রূপান্তর ট্রিলজি",
            "meaning": "$2\\tan^{-1}x$ কে সাইন, কস বা ট্যান ইনভার্সে রূপান্তরের সূত্র।",
            "whenToUse": "ভর্তি পরীক্ষার প্রমাণ ও এমসিকিউতে সবচেয়ে বেশি ব্যবহৃত।",
            "conditions": "নির্দিষ্ট শর্ত সাপেক্ষে সত্য ($|x| < 1$ ট্যানের জন্য)।",
            "variables": "$x$: সংখ্যাত্মক মান।",
            "commonMistakes": "ট্যান ইনভার্সের হরে প্লাস দেওয়া (হরে মাইনাস থাকে)।"
          }
        ],
        "analysis": {
          "conditions": "$\\cos^{-1}x$ এর মান কখনো ঋণাত্মক হতে পারে না, কারণ এর রেঞ্জ $[0, \\pi]$।",
          "variations": "$\\tan^{-1}x + \\tan^{-1}y = \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right)$ যখন $xy < 1$। কিন্তু যদি $xy > 1$ এবং $x, y > 0$ হয়, তবে উত্তর হবে $\\pi + \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right)$!",
          "relationships": "ক্যালকুলাসে অন্তরজ: $\\frac{d}{dx}(\\tan^{-1}x) = \\frac{1}{1+x^2}$ এবং $\\frac{d}{dx}(\\sin^{-1}x) = \\frac{1}{\\sqrt{1-x^2}}$।",
          "transformations": "$\\sin(\\sin^{-1}x) = x$ সর্বদা সত্য যখন $x \\in [-1, 1]$, কিন্তু $\\sin^{-1}(\\sin\\theta) = \\theta$ কেবল তখনই সত্য যখন $\\theta \\in [-\\pi/2, \\pi/2]$।",
          "misunderstandings": "$\\sin^{-1}(\\sin(2\\pi/3)) = 2\\pi/3$ লেখা সবচেয়ে মারাত্মক ভুল, কারণ $2\\pi/3$ রেঞ্জের বাইরে। সঠিক উত্তর $\\pi/3$।"
        },
        "questionPatterns": [
          {
            "typeTitle": "বিপরীত ফাংশনের মুখ্য মান নির্ণয়",
            "recognition": "প্রশ্নে $\\cos^{-1}(-1/2)$ বা $\\sin^{-1}(-\\sqrt{3}/2)$ এর মান চাইবে।",
            "requiredConcept": "ঋণাত্মক রূপান্তরের সূত্র: $\\cos^{-1}(-x) = \\pi - \\cos^{-1}x$।",
            "strategy": "১) $\\pi$ থেকে ধনাত্মক মানের কোণ বিয়োগ করুন। ২) সরাসরি রেডিয়ানে উত্তর লিখুন।",
            "keySteps": [
              "সূত্র নির্ধারণ",
              "ধনাত্মক কোণ বসানো",
              "বিয়োগ করে উত্তর বের করা"
            ],
            "commonTraps": "ঋণাত্মক কোণ দাগিয়ে ফেলা।"
          }
        ],
        "easyExample": {
          "problem": "$\\cos^{-1}\\left(-\\frac{1}{2}\\right)$ এর মুখ্য মান কত?",
          "solutionSteps": [
            "আমরা জানি: $\\cos^{-1}(-x) = \\pi - \\cos^{-1}x$।",
            "এখানে $x = 1/2$, এবং $\\cos^{-1}(1/2) = \\frac{\\pi}{3}$ (বা $60^\\circ$)।",
            "মুখ্য মান $= \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$ (বা $120^\\circ$)।"
          ],
          "answer": "$\\frac{2\\pi}{3}$"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "$\\sin^{-1}\\left(\\sin\\frac{3\\pi}{4}\\right)$ এর মান কত?",
          "recognitionApproach": "কোণ $\\frac{3\\pi}{4} = 135^\\circ$, যা $\\sin^{-1}$ এর মুখ্য রেঞ্জ $[-\\pi/2, \\pi/2]$ এর বাইরে। তাই সরাসরি কাটা যাবে না।",
          "stepByStepSolution": "১) ত্রিকোণমিতিক মান নির্ণয় করি: $\\sin\\frac{3\\pi}{4} = \\sin\\left(\\pi - \\frac{\\pi}{4}\\right) = \\sin\\frac{\\pi}{4} = \\frac{1}{\\sqrt{2}}$।\n২) এখন $\\sin^{-1}\\left(\\frac{1}{\\sqrt{2}}\\right)$ এর মুখ্য মান বের করি।\n৩) আমরা জানি মুখ্য রেঞ্জের মধ্যে $\\sin^{-1}\\left(\\frac{1}{\\sqrt{2}}\\right) = \\frac{\\pi}{4}$।\n৪) অতএব মান $= \\frac{\\pi}{4}$।",
          "whyItWorks": "বিপরীত ফাংশনের ফলাফলকে অবশ্যই মুখ্য মান শাখার মধ্যে থাকতে হবে।",
          "calcAvoidanceTrick": "মনে রাখুন: $\\sin^{-1}(\\sin\\theta)$ তে কোণ ৯০ এর বেশি হলে $\\pi - \\theta$ করতে হয়: $\\pi - 3\\pi/4 = \\pi/4$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$\\cos^{-1}(-x) = \\pi - \\cos^{-1}x$",
            "$\\sin^{-1}x + \\cos^{-1}x = \\pi/2$",
            "$\\tan^{-1}x + \\cot^{-1}x = \\pi/2$",
            "$2\\tan^{-1}x = \\tan^{-1}\\frac{2x}{1-x^2}$"
          ],
          "importantConditions": [
            "$\\cos^{-1}$ এর মান সর্বদা $0$ থেকে $\\pi$ এর মধ্যে।"
          ],
          "keyObservations": [
            "$\\sin^{-1}(\\sin\\theta) = \\theta$ তখনই হবে যখন $-\\pi/2 \\le \\theta \\le \\pi/2$।"
          ],
          "recognitionTips": [
            "কস ইনভার্সে মাইনাস দেখলেই $\\pi$ থেকে বাদ।"
          ],
          "commonMistakes": [
            "$\\sin^{-1}(\\sin(3\\pi/4))$ এর উত্তর $3\\pi/4$ দাগানো।"
          ],
          "summary": "মুখ্য মান শাখায় $\\cos^{-1}(-x) = \\pi - \\cos^{-1}x$। $\\sin^{-1}x + \\cos^{-1}x = \\pi/2$। রেঞ্জ লক্ষ্য রাখা বাধ্যতামূলক।"
        }
      },
      {
        "id": "c-inv-02",
        "title": "ত্রিকোণমিতিক সমীকরণের সাধারণ সমাধান (General Solutions of Equations)",
        "topic": "ত্রিকোণমিতিক সমীকরণের সাধারণ সমাধান",
        "summary": "$sin\theta=0, cos\theta=0, \tan\theta=0$ এবং $sin\theta=k, cos\theta=k$ এর সাধারণ সমাধান সূত্রাবলী।",
        "intro": {
          "what": "ত্রিকোণমিতিক সমীকরণের সমাধান হলো কোণ $\\theta$ এর সেই সকল মান যা সমীকরণটিকে সিদ্ধ করে। পর্যায়বৃত্ততার কারণে একটি সমীকরণের অসীম সংখ্যক সমাধান থাকে যাকে পূর্ণসংখ্যার ($n \\in \\mathbb{Z}$) মাধ্যমে সাধারণ সমাধান হিসেবে প্রকাশ করা হয়।",
          "whyImportant": "ভর্তি পরীক্ষার লিখিত ও এমসিকিউ উভয় অংশে সাধারণ সমাধান এবং নির্দিষ্ট ব্যবধিতে (যেমন $0 \\le \\theta \\le 2\\pi$) সমাধানের মান নির্ণয় নিশ্চিত আসে।",
          "whereUsed": "ওয়েভ মেকানিক্সে নোড ও অ্যান্টি-নোডের অবস্থান নির্ণয় এবং অল্টারনেটিং সিগন্যালে জিরো-ক্রসিং ডিটেকশন।",
          "prerequisites": "ত্রিকোণমিতিক চক্র ও মৌলিক কোণের মান।"
        },
        "easyExplanation": [
          "শূন্যের তিনটি স্ট্যান্ডার্ড সূত্র: ১) $\\sin\\theta = 0 \\implies \\theta = n\\pi$। ২) $\\cos\\theta = 0 \\implies \\theta = (2n+1)\\frac{\\pi}{2}$ (বিজোড় সমকোণ)। ৩) $\\tan\\theta = 0 \\implies \\theta = n\\pi$।",
          "মানের তিনটি স্ট্যান্ডার্ড সূত্র: ১) $\\sin\\theta = \\sin\\alpha \\implies \\theta = n\\pi + (-1)^n \\alpha$। ২) $\\cos\\theta = \\cos\\alpha \\implies \\theta = 2n\\pi \\pm \\alpha$। ৩) $\\tan\\theta = \\tan\\alpha \\implies \\theta = n\\pi + \\alpha$।"
        ],
        "formulas": [
          {
            "latex": "\\sin\\theta = 0 \\implies \\theta = n\\pi, \\quad \\cos\\theta = 0 \\implies \\theta = (2n+1)\\frac{\\pi}{2}, \\quad \\tan\\theta = 0 \\implies \\theta = n\\pi",
            "name": "শূন্যের জন্য সাধারণ সমাধান সূত্রাবলী",
            "meaning": "সাইন, কস ও ট্যান এর মান শূন্য হলে সাধারণ সমাধান ($n \\in \\mathbb{Z}$)।",
            "whenToUse": "সমীকরণের একপাশে শূন্য থাকলে সরাসরি।",
            "conditions": "$n$ যেকোনো পূর্ণসংখ্যা ($0, \\pm 1, \\pm 2, \\dots$)।",
            "variables": "$n$: পূর্ণসংখ্যা সূচক।",
            "commonMistakes": "কসের ক্ষেত্রে $n\\pi$ লিখে ফেলা।"
          },
          {
            "latex": "\\sin\\theta = \\sin\\alpha \\implies \\theta = n\\pi + (-1)^n \\alpha",
            "name": "সাইন সমীকরণের সাধারণ সমাধান",
            "meaning": "সাইনের যেকোনো মানের সাধারণ কোণ।",
            "whenToUse": "$\\sin\\theta = k$ সমীকরণ সমাধানে।",
            "conditions": "$-1 \\le k \\le 1$।",
            "variables": "$\\alpha$: মুখ্য কোণ, $n \\in \\mathbb{Z}$।",
            "commonMistakes": "$(-1)^n$ দিতে ভুলে যাওয়া।"
          },
          {
            "latex": "\\cos\\theta = \\cos\\alpha \\implies \\theta = 2n\\pi \\pm \\alpha, \\quad \\tan\\theta = \\tan\\alpha \\implies \\theta = n\\pi + \\alpha",
            "name": "কস ও ট্যান সমীকরণের সাধারণ সমাধান",
            "meaning": "কস ও ট্যানের যেকোনো বাস্তব মানের সাধারণ সমাধান।",
            "whenToUse": "কস ও ট্যানের সমীকরণ সমাধানে।",
            "conditions": "$n \\in \\mathbb{Z}$।",
            "variables": "$\\alpha$: ক্ষুদ্রতম কোণ।",
            "commonMistakes": "কসে $\\pm$ দিতে ভুলে যাওয়া।"
          }
        ],
        "analysis": {
          "conditions": "বিশেষ রূপ $a\\cos\\theta + b\\sin\\theta = c$ থাকলে উভয় পক্ষকে $\\sqrt{a^2+b^2}$ দিয়ে ভাগ করে যৌগিক সূত্রে ($cos(\theta-\\alpha)$) রূপান্তর করে সমাধান করতে হয়। শর্ত: $|c| \\le \\sqrt{a^2+b^2}$।",
          "variations": "বর্গের সাধারণ সমাধান: $\\sin^2\\theta = \\sin^2\\alpha \\implies \\theta = n\\pi \\pm \\alpha$ (কস ও ট্যান স্কয়ারের জন্যও একই সূত্র!)।",
          "relationships": "নির্দিষ্ট ব্যবধিতে সমাধান চাইলে $n = 0, 1, -1, 2$ বসিয়ে যে মানগুলো ব্যবধির ভেতর পড়ে সেগুলো বাছাই করতে হয়।",
          "transformations": "$\\sin\\theta = 1 \\implies \\theta = (4n+1)\\frac{\\pi}{2}$ এবং $\\cos\\theta = 1 \\implies \\theta = 2n\\pi$।",
          "misunderstandings": "উভয় পক্ষ থেকে সাধারণ পদ কাটাকাটি করে সমাধান কমিয়ে ফেলা (কাটাকাটি না করে কমন নিয়ে দুটি উৎপাদক করতে হয়)।"
        },
        "questionPatterns": [
          {
            "typeTitle": "ত্রিকোণমিতিক সমীকরণের সাধারণ সমাধান নির্ণয়",
            "recognition": "প্রশ্নে একটি সমীকরণ দেওয়া থাকবে (যেমন $\\sqrt{3}\\cos\\theta + \\sin\\theta = \\sqrt{2}$) এবং সমাধান জানতে চাইবে।",
            "requiredConcept": "$\\sqrt{a^2+b^2}$ দিয়ে ভাগ ও $\\cos(\\theta - \\alpha)$ গঠন।",
            "strategy": "১) $\\sqrt{a^2+b^2}$ দিয়ে ভাগ করুন। ২) কসের যৌগিক সূত্র তৈরি করুন। ৩) $\\cos X = \\cos\\alpha \\implies X = 2n\\pi \\pm \\alpha$ প্রয়োগ করুন।",
            "keySteps": [
              "সহগের বর্গের যোগফলের রুট দিয়ে ভাগ",
              "যৌগিক সূত্র গঠন",
              "সাধারণ সমাধান প্রয়োগ"
            ],
            "commonTraps": "ভাগ করার সময় ডানপাশের সংখ্যাকে ভাগ করতে ভুলে যাওয়া।"
          }
        ],
        "easyExample": {
          "problem": "$\\tan 2\\theta = 0$ সমীকরণটির সাধারণ সমাধান নির্ণয় করো।",
          "solutionSteps": [
            "আমরা জানি: $\\tan X = 0 \\implies X = n\\pi$ ($n \\in \\mathbb{Z}$)।",
            "এখানে $X = 2\\theta$।",
            "অতএব $2\\theta = n\\pi \\implies \\theta = \\frac{n\\pi}{2}$ যেখানে $n \\in \\mathbb{Z}$।"
          ],
          "answer": "$\\theta = \\frac{n\\pi}{2} \\quad (n \\in \\mathbb{Z})$"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "$\\sin\\theta + \\cos\\theta = 1$ সমীকরণটির সাধারণ সমাধান নির্ণয় করো।",
          "recognitionApproach": "এখানে $a = 1, b = 1$। উভয় পক্ষকে $\\sqrt{1^2 + 1^2} = \\sqrt{2}$ দিয়ে ভাগ করতে হবে।",
          "stepByStepSolution": "১) $\\frac{1}{\\sqrt{2}}\\cos\\theta + \\frac{1}{\\sqrt{2}}\\sin\\theta = \\frac{1}{\\sqrt{2}}$।\n২) $\\cos\\theta\\cos\\frac{\\pi}{4} + \\sin\\theta\\sin\\frac{\\pi}{4} = \\cos\\frac{\\pi}{4}$।\n৩) $\\cos\\left(\\theta - \\frac{\\pi}{4}\\right) = \\cos\\frac{\\pi}{4}$।\n৪) সূত্র প্রয়োগ: $\\theta - \\frac{\\pi}{4} = 2n\\pi \\pm \\frac{\\pi}{4}$।\n৫) ধনাত্মক চিহ্ন নিয়ে: $\\theta = 2n\\pi + \\frac{\\pi}{4} + \\frac{\\pi}{4} = 2n\\pi + \\frac{\\pi}{2}$।\n৬) ঋণাত্মক চিহ্ন নিয়ে: $\\theta = 2n\\pi - \\frac{\\pi}{4} + \\frac{\\pi}{4} = 2n\\pi$।\n৭) অতএব $\\theta = 2n\\pi$ অথবা $2n\\pi + \\frac{\\pi}{2}$ ($n \\in \\mathbb{Z}$)।",
          "whyItWorks": "কসাইনের একীকরণ পদ্ধতি দুটি ত্রিকোণমিতিক পদকে একক কোণে আবদ্ধ করে সরাসরি সাধারণ সমাধান প্রদান করে।",
          "calcAvoidanceTrick": "বিকল্পে মান বসান: $\\theta = 0$ হলে $\\sin 0 + \\cos 0 = 1$ এবং $\\theta = \\pi/2$ হলে $1 + 0 = 1$। সুতরাং $2n\\pi$ ও $2n\\pi + \\pi/2$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$\\sin\\theta=0 \\implies n\\pi$",
            "$\\cos\\theta=0 \\implies (2n+1)\\frac{\\pi}{2}$",
            "$\\sin\\theta=\\sin\\alpha \\implies n\\pi+(-1)^n\\alpha$",
            "$\\cos\\theta=\\cos\\alpha \\implies 2n\\pi\\pm\\alpha$",
            "$\\tan\\theta=\\tan\\alpha \\implies n\\pi+\\alpha$"
          ],
          "importantConditions": [
            "$a\\cos\\theta+b\\sin\\theta=c$ এ সমাধানের অস্তিত্বের শর্ত: $|c| \\le \\sqrt{a^2+b^2}$।"
          ],
          "keyObservations": [
            "বর্গের সব সমীকরণে ($\\sin^2, \\cos^2, \\tan^2$) সূত্র একই: $n\\pi \\pm \\alpha$।"
          ],
          "recognitionTips": [
            "উভয় পক্ষ থেকে পদ না কেটে কমন নিয়ে সমাধান বের করো।"
          ],
          "commonMistakes": [
            "কমন পদ কেটে সমাধান সংখ্যা কমিয়ে ফেলা।"
          ],
          "summary": "শূন্যে $n\\pi$ বা $(2n+1)\\pi/2$। মানে সাইনে $(-1)^n$, কসে $\\pm$, ট্যানে সরাসরি $+n\\pi$।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "বিপরীত ত্রিকোণমিতিক ফাংশনের মুখ্য মান ও ডোমেন",
        "description": "মুখ্য মান শাখা, ডোমেন-রেঞ্জ এবং $\\cos^{-1}(-x) = \\pi - \\cos^{-1}x$ প্রয়োগ।",
        "solvingStrategy": "১) কস ইনভার্সে মাইনাস থাকলে $\\pi$ থেকে বাদ দিন। ২) কোণ মুখ্য সীমার বাইরে থাকলে সমন্বয় করুন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-2245",
            "question": "$y = \\sin^{-1}x$\r\nDomain = $[-1, 1]$\r\nRange = $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$",
            "options": [],
            "answer": "",
            "explanation": "",
            "university": "Admission",
            "year": "",
            "topic": "T-01: বিপরীত ত্রিকোণমিতিক ফাংশনের ডোমেন এবং রেঞ্জ নির্ণয়"
          },
          {
            "id": "math-q-2246",
            "question": "$y = \\cos^{-1}x$\r\nDomain = $[-1, 1]$\r\nRange = $[0, \\pi]$",
            "options": [],
            "answer": "",
            "explanation": "",
            "university": "Admission",
            "year": "",
            "topic": "T-01: বিপরীত ত্রিকোণমিতিক ফাংশনের ডোমেন এবং রেঞ্জ নির্ণয়"
          },
          {
            "id": "math-q-2247",
            "question": "$y = \\tan^{-1}x$\r\nDomain = $\\mathbb{R}$ or $(-\\infty, \\infty)$\r\nRange = $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$",
            "options": [],
            "answer": "",
            "explanation": "",
            "university": "Admission",
            "year": "",
            "topic": "T-01: বিপরীত ত্রিকোণমিতিক ফাংশনের ডোমেন এবং রেঞ্জ নির্ণয়"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-2248",
            "question": "$y = \\cot^{-1}x$\r\nDomain = $\\mathbb{R}$ or $(-\\infty, \\infty)$\r\nRange = $(0, \\pi)$",
            "options": [],
            "answer": "",
            "explanation": "",
            "university": "Admission",
            "year": "",
            "topic": "T-01: বিপরীত ত্রিকোণমিতিক ফাংশনের ডোমেন এবং রেঞ্জ নির্ণয়",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "ত্রিকোণমিতিক সমীকরণের সাধারণ সমাধান",
        "description": "সাধারণ সমাধান নির্ণয় এবং $a\\cos\\theta + b\\sin\\theta = c$ এর রূপান্তর।",
        "solvingStrategy": "১) $\\sqrt{a^2+b^2}$ দিয়ে ভাগ করে কসের রূপ দিন। ২) $2n\\pi \\pm \\alpha$ প্রয়োগ করুন।",
        "startIndex": 10,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-2255",
            "question": "$\\sec^{-1} x + \\csc^{-1} x = \\frac{\\pi}{2} = \\sec^{-1} x + \\sin^{-1} \\frac{1}{x} = \\frac{\\pi}{2}$",
            "options": [],
            "answer": "",
            "explanation": "",
            "university": "Admission",
            "year": "",
            "topic": "T-02: বিপরীত বৃত্তীয় ফাংশনের অন্যান্য মান"
          },
          {
            "id": "math-q-2256",
            "question": "$\\tan^{-1} x \\pm \\tan^{-1} y = \\tan^{-1} \\frac{x \\pm y}{1 \\mp xy}$",
            "options": [],
            "answer": "",
            "explanation": "",
            "university": "Admission",
            "year": "",
            "topic": "T-02: বিপরীত বৃত্তীয় ফাংশনের অন্যান্য মান"
          },
          {
            "id": "math-q-2257",
            "question": "$\\tan^{-1} x + \\tan^{-1} y + \\tan^{-1} z = \\tan^{-1} \\frac{x + y + z - xyz}{1 - xy - yz - zx}$",
            "options": [],
            "answer": "",
            "explanation": "",
            "university": "Admission",
            "year": "",
            "topic": "T-02: বিপরীত বৃত্তীয় ফাংশনের অন্যান্য মান"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-2258",
            "question": "$\\sin^{-1} x \\pm \\sin^{-1} y = \\sin^{-1} \\{x \\sqrt{1 - y^2} \\pm y \\sqrt{1 - x^2}\\}$",
            "options": [],
            "answer": "",
            "explanation": "",
            "university": "Admission",
            "year": "",
            "topic": "T-02: বিপরীত বৃত্তীয় ফাংশনের অন্যান্য মান",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "$\\cos^{-1}(-x) = \\pi - \\cos^{-1}x$ এর জ্যামিতিক প্রমাণ",
        "description": "কেন সাইন ইনভার্সে সরাসরি মাইনাস বের হয় কিন্তু কস ইনভার্সে $\\pi$ থেকে বিয়োগ হয়?",
        "promptQuery": "বিপরীত ত্রিকোণমিতিক ফাংশনে $\\cos^{-1}(-x) = \\pi - \\cos^{-1}x$ এর জ্যামিতিক ও বীজগণিতীয় কারণ বুঝিয়ে দাও।"
      },
      {
        "title": "ত্রিকোণমিতিক সমীকরণে কেন উভয় পক্ষ কাটাকাটি করা নিষিদ্ধ?",
        "description": "চলক সংবলিত রাশি কেটে ফেললে কীভাবে প্রয়োজনীয় মূলগুলো হারিয়ে যায়?",
        "promptQuery": "ত্রিকোণমিতিক সমীকরণ সমাধানে উভয় পক্ষ থেকে পদ ভাগ না করে কমন নেওয়ার গুরুত্ব উদাহরণসহ ব্যাখ্যা করো।"
      },
      {
        "title": "$a\\cos\\theta + b\\sin\\theta = c$ সমীকরণের সমাধানের শর্ত",
        "description": "কেন $|c| > \\sqrt{a^2+b^2}$ হলে কোনো বাস্তব সমাধান থাকে না?",
        "promptQuery": "$a\\cos\\theta + b\\sin\\theta = c$ সমীকরণের বাস্তব সমাধান থাকার শর্ত ও সমাধান প্রক্রিয়া আলোচনা করো।"
      },
      {
        "title": "বর্গের সাধারণ সমাধান কেন সব ফাংশনে একই ($n\\pi \\pm \\alpha$)?",
        "description": "$\\sin^2\\theta = \\sin^2\\alpha$ এর সমাধান কীভাবে কস ও ট্যানের সাথে হুবহু মিলে যায়?",
        "promptQuery": "প্রমাণ করো যে $\\sin^2\\theta = \\sin^2\\alpha$ এর সাধারণ সমাধান $\\theta = n\\pi \\pm \\alpha$।"
      },
      {
        "title": "বিপরীত ত্রিকোণমিতি অধ্যায়ের শীর্ষ ভর্তি পরীক্ষা ফাঁদ",
        "description": "$\\sin^{-1}(\\sin(2\\pi/3))$ এর বিভ্রান্তি এবং ট্যান ইনভার্স যোগের শর্ত ($xy > 1$)।",
        "promptQuery": "বিপরীত ত্রিকোণমিতিক ফাংশনে ভর্তি পরীক্ষায় ছাত্রছাত্রীদের সবচেয়ে বেশি হওয়া ৩টি সাধারণ ভুল আলোচনা করো।"
      }
    ],
    "questionCount": 167
  },
  {
    "id": "ch-statics",
    "paper": "Second-Paper",
    "paperBn": "২য় পত্র",
    "chapterNum": 8,
    "nameBn": "স্থিতিবিদ্যা",
    "nameEn": "Statics",
    "rawName": "স্থিতিবিদ্যা",
    "summary": "উচ্চতর গণিত ২য় পত্রের বলবিদ্যার অত্যন্ত গুরুত্বপূর্ণ অধ্যায়। বলের সামান্তরিক সূত্র, লব্ধির মান ও দিক, বলের লম্ব উপাংশ, লামির উপপাদ্য এবং সমান্তরাল বল ও যুগল থেকে ইঞ্জিনিয়ারিং (বুয়েট, রুয়েট, কুয়েট, চুয়েট) ও ভার্সিটিতে প্রতিবছর প্রশ্ন আসে।",
    "topics": [
      "বলের সামান্তরিক সূত্র ও লব্ধি",
      "সমকোণে লব্ধি ও বিশেষ অবস্থাসমূহ",
      "লামির উপপাদ্য ও সাম্যাবস্থা",
      "সদৃশ ও অসদৃশ সমান্তরাল বল",
      "ভারকেন্দ্র ও বলের ভ্রামক"
    ],
    "concepts": [
      {
        "id": "c-stat-01",
        "title": "বলের সামান্তরিক সূত্র ও লব্ধি বিশ্লেষণ (Parallelogram Law & Resultant)",
        "topic": "বলের সামান্তরিক সূত্র ও লব্ধি",
        "summary": "দুটি বলের লব্ধির মান $R = \\sqrt{P^2+Q^2+2PQ\\cos\\alpha}$, লব্ধি একটি বলের সাথে সমকোণে থাকার শর্ত এবং সর্বোচ্চ-সর্বনিম্ন লব্ধি।",
        "intro": {
          "what": "কোনো বিন্দুতে ক্রিয়াশীল দুটি বলের মান ও দিক সামান্তরিকের দুটি সন্নিহিত বাহু দ্বারা নির্দেশিত হলে তাদের ছেদবিন্দুগামী কর্ণটি বলদ্বয়ের লব্ধির মান ও দিক নির্দেশ করে।",
          "whyImportant": "ভর্তি পরীক্ষার স্থিতিবিদ্যা অংশের সবচেয়ে জনপ্রিয় প্রশ্ন: \"লব্ধি ক্ষুদ্রতম বলের উপর লম্ব হলে কোণ কত?\" বা \"বল দ্বিগুণ করলে লব্ধি দ্বিগুণ হয়\"।",
          "whereUsed": "সেতু ও ট্রাস স্ট্রাকচার বিশ্লেষণ, ক্রেন ও ক্যাবল মেকানিক্স এবং বায়োমেকানিক্সে জয়েন্ট ফোর্স গণনায়।",
          "prerequisites": "ভেক্টরের যোগফল ও ত্রিকোণমিতি।"
        },
        "easyExplanation": [
          "লব্ধির মান সূত্র: $R^2 = P^2 + Q^2 + 2PQ\\cos\\alpha$। সর্বোচ্চ লব্ধি $R_{\\max} = P + Q$ (যখন $\\alpha = 0^\\circ$) এবং সর্বনিম্ন লব্ধি $R_{\\min} = |P - Q|$ (যখন $\\alpha = 180^\\circ$)।",
          "সুপার শর্টকাট (লব্ধি $P$ বলের উপর লম্ব হলে): যদি লব্ধি $R$ প্রথম বল $P$ এর সাথে $90^\\circ$ কোণ উৎপন্ন করে, তবে সরাসরি: $\\cos\\alpha = -\\frac{P}{Q}$ এবং পিথাগোরাস অনুসারে $R = \\sqrt{Q^2 - P^2}$! লক্ষ্য করুন: এখানে অবশ্যই $Q > P$ হতে হবে।"
        ],
        "formulas": [
          {
            "latex": "R = \\sqrt{P^2 + Q^2 + 2PQ\\cos\\alpha}",
            "name": "বলের লব্ধির মান সূত্র",
            "meaning": "$P$ ও $Q$ বলদ্বয় $\\alpha$ কোণে ক্রিয়া করলে তাদের সম্মিলিত প্রভাব বা লব্ধি।",
            "whenToUse": "দুটি বল ও মধ্যবর্তী কোণ দেওয়া থাকলে লব্ধি বের করতে।",
            "conditions": "বল দুটি একই বিন্দুতে একই সময়ে ক্রিয়াশীল হতে হবে।",
            "variables": "$P, Q$: বলদ্বয়, $\\alpha$: অন্তর্গত কোণ, $R$: লব্ধি।",
            "commonMistakes": "সূত্রে প্লাসের জায়গায় মাইনাস দেওয়া ($2PQ\\cos\\alpha$ এর আগে প্লাস থাকে)।"
          },
          {
            "latex": "\\cos\\alpha = -\\frac{P}{Q} \\quad (R \\perp P \\text{ হলে})",
            "name": "লব্ধি ক্ষুদ্রতর বলের উপর লম্ব হওয়ার শর্টকাট",
            "meaning": "লব্ধি $P$ বলের সাথে সমকোণে ($90^\\circ$) থাকলে মধ্যবর্তী কোণ।",
            "whenToUse": "প্রশ্নে \"লব্ধি প্রথম বলের সাথে সমকোণে থাকে\" বলা থাকলে।",
            "conditions": "$Q > P$ হতে হবে (কারণ $\\cos\\alpha \\le 1$)।",
            "variables": "$P$: যে বলের উপর লম্ব, $Q$: অপর বৃহত্তর বল।",
            "commonMistakes": "অনুপাত উল্টে $\\cos\\alpha = -Q/P$ লেখা।"
          },
          {
            "latex": "R = \\sqrt{Q^2 - P^2} \\quad (R \\perp P \\text{ হলে})",
            "name": "সমকোণী লব্ধির মান",
            "meaning": "পিথাগোরাসের উপপাদ্য অনুসারে লব্ধির সাংখ্যিক মান।",
            "whenToUse": "লব্ধি লম্ব হলে লব্ধির মান বের করতে।",
            "conditions": "$Q$ অতিভুজ হিসেবে কাজ করে।",
            "variables": "$Q$: বৃহত্তম বল, $P$: ভূমি বল।",
            "commonMistakes": "$P^2 - Q^2$ লেখা।"
          }
        ],
        "analysis": {
          "conditions": "দুটি সমান বলের ($P = Q$) ক্ষেত্রে লব্ধি কোণকে সমদ্বিখণ্ডিত করে এবং $R = 2P\\cos(\\alpha/2)$ হয়।",
          "variations": "যদি $P = Q$ এবং $\\alpha = 120^\\circ$ হয়, তবে লব্ধি $R = P$ (অর্থাৎ লব্ধি প্রতিটি বলের মানের সমান)। এটি ভর্তি পরীক্ষার অন্যতম সেরা মুখস্থ তথ্য।",
          "relationships": "যদি বল দুটি সমকোণে ক্রিয়া করে ($\\alpha = 90^\\circ$), তবে $R = \\sqrt{P^2+Q^2}$।",
          "transformations": "যদি প্রথম বলকে দ্বিগুণ করা হয় এবং লব্ধি দ্বিগুণ হয়, তবে সমীকরণ জোড়া সমাধান করে $\\alpha$ বের করা যায়।",
          "misunderstandings": "লব্ধি $P$ এর উপর লম্ব হতে হলে অবশ্যই $Q > P$ হতে হবে, অনেকে ছোট বলকে অতিভুজ বানিয়ে বসে থাকে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "লব্ধি কোনো বলের উপর লম্ব সংক্রান্ত সমস্যা",
            "recognition": "প্রশ্নে দুটি বল $P$ ও $Q$ দেওয়া থাকবে এবং বলা থাকবে লব্ধি $P$ এর উপর লম্ব।",
            "requiredConcept": "$\\cos\\alpha = -P/Q$ এবং $R = \\sqrt{Q^2-P^2}$।",
            "strategy": "সরাসরি $\\cos\\alpha = -P/Q$ বসিয়ে কোণ বের করুন এবং পিথাগোরাস দিয়ে লব্ধি বের করুন।",
            "keySteps": [
              "কোন বলের উপর লম্ব তা চিহ্নিত করা",
              "$\\cos\\alpha = -P/Q$ লেখা",
              "কোণ ও লব্ধি বের করা"
            ],
            "commonTraps": "ট্যান থিটার বড় সূত্রে গিয়ে ৩ মিনিট নষ্ট করা।"
          }
        ],
        "easyExample": {
          "problem": "$3\\text{ N}$ এবং $5\\text{ N}$ মানের দুটি বলের মধ্যবর্তী কোণ $60^\\circ$ হলে তাদের লব্ধির মান কত?",
          "solutionSteps": [
            "লব্ধির সূত্র: $R = \\sqrt{P^2 + Q^2 + 2PQ\\cos\\alpha}$।",
            "মান বসাই: $P = 3, Q = 5, \\alpha = 60^\\circ$।",
            "$R = \\sqrt{3^2 + 5^2 + 2(3)(5)\\cos 60^\\circ} = \\sqrt{9 + 25 + 30(0.5)} = \\sqrt{34 + 15} = \\sqrt{49} = 7\\text{ N}$।"
          ],
          "answer": "$7\\text{ N}$"
        },
        "examExample": {
          "examTag": "BUET / DU / CKREUT Admission",
          "problem": "পরস্পর $\\alpha$ কোণে ক্রিয়ারত দুটি বলের লব্ধি ক্ষুদ্রতর বলের সাথে সমকোণে থাকে। ক্ষুদ্রতর বলটি $12\\text{ N}$ এবং লব্ধি $5\\text{ N}$ হলে বৃহত্তর বলটি কত?",
          "recognitionApproach": "লব্ধি ক্ষুদ্রতর বল $P = 12$ এর উপর লম্ব এবং লব্ধি $R = 5$। সূত্র: $R = \\sqrt{Q^2 - P^2}$।",
          "stepByStepSolution": "১) পিথাগোরাস সূত্র অনুসারে: $R^2 = Q^2 - P^2$।\n২) $5^2 = Q^2 - 12^2 \\implies 25 = Q^2 - 144$।\n৩) $Q^2 = 144 + 25 = 169 \\implies Q = \\sqrt{169} = 13\\text{ N}$।\n৪) অতএব বৃহত্তর বলটির মান $13\\text{ N}$।",
          "whyItWorks": "লব্ধি সমকোণে থাকলে বৃহত্তর বল $Q$, ক্ষুদ্রতর বল $P$ এবং লব্ধি $R$ মিলে একটি সমকোণী ত্রিভুজ গঠন করে যেখানে $Q$ হলো অতিভুজ।",
          "calcAvoidanceTrick": "স্ট্যান্ডার্ড পিথাগোরীয় ট্রিপলেট: $5, 12, 13$। সুতরাং অতিভুজ অর্থাৎ বৃহত্তর বল সরাসরি $13\\text{ N}$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$R = \\sqrt{P^2+Q^2+2PQ\\cos\\alpha}$",
            "$R \\perp P \\implies \\cos\\alpha = -P/Q$",
            "$R = \\sqrt{Q^2-P^2}$",
            "সমান বলে $\\alpha=120^\\circ \\implies R=P$"
          ],
          "importantConditions": [
            "লব্ধি লম্ব হতে হলে অবশ্যই $Q > P$ হতে হবে।"
          ],
          "keyObservations": [
            "লব্ধি সর্বদা বৃহত্তর বলের দিকে বেশি হেলে থাকে।"
          ],
          "recognitionTips": [
            "লব্ধি লম্ব দেখলেই পিথাগোরাস ট্রিপলেট ($P, R \\implies Q$)।"
          ],
          "commonMistakes": [
            "$\\cos\\alpha = P/Q$ লেখা (মাইনাস চিহ্ন দিতে ভুলে যাওয়া)।"
          ],
          "summary": "লব্ধির মান $R=\\sqrt{P^2+Q^2+2PQ\\cos\\alpha}$। লম্ব হলে $\\cos\\alpha=-P/Q$ ও $R=\\sqrt{Q^2-P^2}$।"
        }
      },
      {
        "id": "c-stat-02",
        "title": "লামির উপপাদ্য ও বলের সাম্যাবস্থা (Lami's Theorem & Equilibrium)",
        "topic": "লামির উপপাদ্য ও সাম্যাবস্থা",
        "summary": "একই বিন্দুতে তিনটি সমতলীয় বলের সাম্যাবস্থা, লামির সাইন অনুপাত সূত্র এবং বলের ত্রিভুজ সূত্র।",
        "intro": {
          "what": "লামির উপপাদ্য: কোনো বিন্দুতে ক্রিয়াশীল তিনটি সমতলীয় বল সাম্যাবস্থায় থাকলে প্রতিটি বলের মান অপর দুটি বলের মধ্যবর্তী কোণের সাইনের সমানুপাতিক।",
          "whyImportant": "ঝুলন্ত বস্তুর টান, সুতার টান এবং হেলানো তলে বস্তুর সাম্যাবস্থার প্রায় সকল রিটেন ও এমসিকিউ লামির সূত্রে সমাধান হয়।",
          "whereUsed": "সাসপেনশন ব্রিজ, ক্রেন কেবল ও মেকানিক্যাল ট্রাসের জয়েন্ট লোড বিশ্লেষণে।",
          "prerequisites": "ত্রিভুজের সাইন সূত্র ও কোণের সম্পূরক কোণ রূপান্তর।"
        },
        "easyExplanation": [
          "যদি তিনটি বল $P, Q, R$ সাম্যাবস্থায় থাকে এবং তাদের বিপরীত কোণগুলো যথাক্রমে $\\alpha, \\beta, \\gamma$ হয়, তবে: $\\frac{P}{\\sin\\alpha} = \\frac{Q}{\\sin\\beta} = \\frac{R}{\\sin\\gamma}$।",
          "মনে রাখার নিয়ম: উপরে যে বলটি লিখবেন, নিচে অপর দুটি বলের মধ্যবর্তী কোণের সাইন বসাবেন। তিনটি বলের অন্তর্গত কোণগুলোর সমষ্টি সর্বদা $360^\\circ$ ($alpha + \beta + gamma = 360^circ$)।"
        ],
        "formulas": [
          {
            "latex": "\\frac{P}{\\sin\\alpha} = \\frac{Q}{\\sin\\beta} = \\frac{R}{\\sin\\gamma}",
            "name": "লামির উপপাদ্য (Lami's Theorem)",
            "meaning": "তিনটি বল সাম্যাবস্থায় থাকলে বল ও বিপরীত কোণের সাইনের অনুপাত ধ্রুবক।",
            "whenToUse": "একটি বিন্দুতে ৩টি বল সাম্যাবস্থায় থাকলে অজ্ঞাত বল বা কোণ নির্ণয়ে।",
            "conditions": "বল তিনটি সমবিন্দু, সমতলীয় এবং সাম্যাবস্থায় থাকতে হবে।",
            "variables": "$P, Q, R$: বলত্রয়; $\\alpha, \\beta, \\gamma$: যথাক্রমে $(Q, R), (R, P), (P, Q)$ এর মধ্যবর্তী কোণ।",
            "commonMistakes": "নিজের অন্তর্গত কোণ নেওয়া (নিতে হবে অপর দুটির কোণ)।"
          },
          {
            "latex": "\\vec{P} + \\vec{Q} + \\vec{R} = \\vec{0} \\implies \\text{সাম্যাবস্থা}",
            "name": "সাম্যাবস্থার ভেক্টর শর্ত",
            "meaning": "বলত্রয়ের ভেক্টর যোগফল শূন্য হবে।",
            "whenToUse": "ভেক্টর আকারে সাম্যাবস্থা প্রকাশে।",
            "conditions": "বলগুলো একই বিন্দুতে ক্রিয়াশীল।",
            "variables": "$\\vec{P}, \\vec{Q}, \\vec{R}$: বল ভেক্টরসমূহ।",
            "commonMistakes": "স্কেলার যোগফল শূন্য মনে করা ($P+Q+R=0$ নয়, ভেক্টর যোগফল শূন্য)।"
          }
        ],
        "analysis": {
          "conditions": "লামির উপপাদ্য কেবলমাত্র ৩টি বলের জন্য প্রযোজ্য। ৪ বা ততোধিক বল হলে বলের উপাংশ বিভাজন (Resolution of Forces) পদ্ধতি ব্যবহার করতে হয়।",
          "variations": "বলত্রয় একটি ত্রিভুজের বাহুগুলোর সমান্তরাল হলে বলের ত্রিভুজ সূত্র: $\\frac{P}{a} = \\frac{Q}{b} = \\frac{R}{c}$।",
          "relationships": "যদি তিনটি বল সমান হয় ($P = Q = R$) এবং সাম্যাবস্থায় থাকে, তবে তাদের মধ্যবর্তী কোণগুলো প্রত্যেকে $120^\\circ$ হবে ($360/3 = 120^circ$)।",
          "transformations": "যদি দুটি বলের মধ্যবর্তী কোণ $90^\\circ$ হয়, তবে $\\sin 90^\\circ = 1$ হয়ে সমীকরণ দ্রুত সরল হয়।",
          "misunderstandings": "শিক্ষার্থীরা কোণ নির্ণয় করতে গিয়ে উলম্ব বা অনুভূমিক কোণকে সরাসরি লামির কোণ হিসেবে বসিয়ে ফেলে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "ঝুলন্ত বস্তুর সুতার টান নির্ণয় (Lami Application)",
            "recognition": "একটি ওজন $W$ দুটি সুতা দিয়ে ঝুলানো থাকবে এবং কোণ দেওয়া থাকবে।",
            "requiredConcept": "লামির উপপাদ্য: $\\frac{T_1}{\\sin\\theta_1} = \\frac{T_2}{\\sin\\theta_2} = \\frac{W}{\\sin\\theta_3}$।",
            "strategy": "১) সংযোগ বিন্দুতে ৩টি বল চিহ্নিত করুন ($T_1, T_2, W$)। ২) বলত্রয়ের মধ্যবর্তী কোণ জ্যামিতিকভাবে বের করুন। ৩) লামির সূত্র লিখে সমাধান করুন।",
            "keySteps": [
              "ফ্রি বডি ডায়াগ্রাম আঁকা",
              "কোণ নির্ধারণ",
              "লামির সমীকরণ সমাধান"
            ],
            "commonTraps": "কোণ বের করতে গিয়ে সম্পূরক কোণে ভুল করা।"
          }
        ],
        "easyExample": {
          "problem": "একটি বিন্দুতে ক্রিয়ারত তিনটি সমান বল সাম্যাবস্থায় থাকলে তাদের মধ্যবর্তী কোণগুলো কত?",
          "solutionSteps": [
            "ধরি তিনটি বল $P, P, P$ এবং তাদের মধ্যবর্তী কোণগুলো $\\alpha, \\beta, \\gamma$।",
            "লামির সূত্র অনুসারে: $\\frac{P}{\\sin\\alpha} = \\frac{P}{\\sin\\beta} = \\frac{P}{\\sin\\gamma}$।",
            "সুতরাং $\\sin\\alpha = \\sin\\beta = \\sin\\gamma \\implies \\alpha = \\beta = \\gamma$।",
            "আমরা জানি একটি বিন্দুর চারপাশের মোট কোণ $360^\\circ$।",
            "অতএব প্রতিটি কোণ $= \\frac{360^\\circ}{3} = 120^\\circ$।"
          ],
          "answer": "$120^\\circ, 120^\\circ, 120^\\circ$"
        },
        "examExample": {
          "examTag": "BUET Admission Exam",
          "problem": "একটি বিন্দুতে ক্রিয়ারত তিনটি বল $P, Q, R$ সাম্যাবস্থায় আছে। $P$ ও $Q$ এর মধ্যবর্তী কোণ $150^\\circ$ এবং $Q$ ও $R$ এর মধ্যবর্তী কোণ $120^\\circ$ হলে $P : Q : R$ নির্ণয় করো।",
          "recognitionApproach": "বলত্রয়ের মধ্যবর্তী কোণগুলো যথাক্রমে: $(P, Q) = 150^circ, (Q, R) = 120^circ$। তৃতীয় কোণ $(R, P) = 360^circ - (150^circ + 120^circ) = 90^circ$।",
          "stepByStepSolution": "১) লামির উপপাদ্য প্রয়োগ করি:\n$\\frac{P}{\\sin(Q, R)} = \\frac{Q}{\\sin(R, P)} = \\frac{R}{\\sin(P, Q)}$।\n২) মান বসাই:\n$\\frac{P}{\\sin 120^\\circ} = \\frac{Q}{\\sin 90^\\circ} = \\frac{R}{\\sin 150^\\circ}$।\n৩) কোণগুলোর সাইন মান:\n$\\sin 120^\\circ = \\frac{\\sqrt{3}}{2}$, $\\sin 90^\\circ = 1$, $\\sin 150^\\circ = \\frac{1}{2}$।\n৪) অতএব অনুপাত: $P : Q : R = \\frac{\\sqrt{3}}{2} : 1 : \\frac{1}{2}$।\n৫) ২ দিয়ে গুণ করে পাই: $P : Q : R = \\sqrt{3} : 2 : 1$।",
          "whyItWorks": "লামির উপপাদ্য সরাসরি বলগুলোর অনুপাতকে বিপরীত কোণের সাইন অনুপাতের সাথে যুক্ত করে।",
          "calcAvoidanceTrick": "কোণের সাইন বের করে ২ দিয়ে গুণ: $\\sqrt{3} : 2 : 1$ মুখে মুখে সমাধান।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$\\frac{P}{\\sin\\alpha} = \\frac{Q}{\\sin\\beta} = \\frac{R}{\\sin\\gamma}$",
            "$\\alpha+\\beta+\\gamma=360^\\circ$",
            "সমান বলে কোণ $120^\\circ$"
          ],
          "importantConditions": [
            "লামির উপপাদ্য কেবলমাত্র ৩টি বলের জন্য সত্য।"
          ],
          "keyObservations": [
            "বল যে পাশে, কোণ হবে তার বিপরীত পাশের দুটি বলের।"
          ],
          "recognitionTips": [
            "৩টি বল সাম্যাবস্থায় দেখলেই লামির সাইন রেশিও।"
          ],
          "commonMistakes": [
            "তৃতীয় কোণ বের করতে $180^circ$ থেকে বিয়োগ করা ($360^circ$ থেকে বিয়োগ হবে)।"
          ],
          "summary": "লামির সূত্রে প্রতিটি বল বিপরীত কোণের সাইনের সমানুপাতিক। ৩টি সমান বল সাম্যাবস্থায় থাকলে কোণ $120^\\circ$।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "বলের সামান্তরিক সূত্র ও লব্ধির সমস্যা",
        "description": "লব্ধির মান ও দিক, লব্ধি সমকোণে থাকার শর্ত এবং বল পরিবর্তনের প্রভাব।",
        "solvingStrategy": "১) লব্ধি লম্ব হলে $\\cos\\alpha = -P/Q$ ও $R=\\sqrt{Q^2-P^2}$ প্রয়োগ করুন।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-2412",
            "question": "$3p$ এবং $2p$ মানের দুইটি বলের লব্ধি $R$। প্রথম বলটির মান দ্বিগুণ বাড়ালে লব্ধির মানও দ্বিগুণ হয়। বলদ্বয়ের অন্তর্ভুক্ত কোণের মান নির্ণয় কর। [KU'25'26, 18-19; GST'23-24, JU'22-23, DU'20-21, 14-15, 12-13, 09-10; JnU'18-19]",
            "options": [],
            "answer": "",
            "explanation": "**Sol*:** \r\n$R^2 = 9p^2 + 4p^2 + 12p^2 \\cos\\alpha$ ....... (i)\r\n$4R^2 = 36p^2 + 4p^2 + 24p^2 \\cos\\alpha$ ....... (ii)\r\n$\\frac{(i)}{(ii)} \\Rightarrow \\frac{1}{4} = \\frac{9+4+12\\cos\\alpha}{36+4+24\\cos\\alpha}$\r\n$\\Rightarrow 52 + 48\\cos\\alpha = 40 + 24\\cos\\alpha$\r\n$\\Rightarrow 24\\cos\\alpha = -12 \\Rightarrow \\cos\\alpha = -\\frac{1}{2}$\r\n$\\therefore \\alpha = 120^{\\circ}$ (Ans.)\r\n\r\n---",
            "university": "Admission",
            "year": "",
            "topic": "T-01: দুটি বলের লব্ধি নির্ণয়ের ক্ষেত্রে সামান্তরিক সূত্রের প্রয়োগ সংক্রান্ত"
          },
          {
            "id": "math-q-2413",
            "question": "সমকোণে ক্রিয়াশীল বলের লব্ধি $13$, একটি বল $12$ হলে অপরটি কত? [BUP'23-24]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$2\\sqrt{3}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$4$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$4\\sqrt{2}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$5$"
              }
            ],
            "answer": "d",
            "explanation": "**Sol*:** $\\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = \\sqrt{25} = 5$",
            "university": "BUP",
            "year": "23-24",
            "topic": "T-03: বলের সাথে সমকোণে ক্রিয়ারত লব্ধি সংক্রান্ত"
          },
          {
            "id": "math-q-2414",
            "question": "দুইটি বল পরস্পর এক সমকোণে ক্রিয়ারত থাকলে তাদের লব্ধি $\\sqrt{13}\\text{ N}$; আবার তারা $120^\\circ$ কোণে ক্রিয়ারত থাকলে তাদের লব্ধি $\\sqrt{7}\\text{ N}$। বলদ্বয়ের সমষ্টি কত? [RU'20-21]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$7\\text{ N}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$8\\text{ N}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$5\\text{ N}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$6\\text{ N}$ (চ)"
              }
            ],
            "answer": "a",
            "explanation": "Sol$: \\text{বলদ্বয় } p \\text{ ও } q \\text{ হলে প্রথম ক্ষেত্রে,}$\r\n$\\sqrt{p^2 + q^2} = \\sqrt{13} \\Rightarrow p^2 + q^2 = 13$\r\nআবার, দ্বিতীয় ক্ষেত্রে,\r\n$\\sqrt{p^2 + q^2 + 2pq \\cos 120^\\circ} = \\sqrt{7}$\r\n$\\Rightarrow p^2 + q^2 - pq = 7 \\therefore pq = 13 - 7 = 6$\r\n$\\therefore p + q = \\sqrt{p^2 + q^2 + 2pq} = \\sqrt{13 + 2 \\times 6}$\r\n$= \\sqrt{25} = 5\\text{ N}$",
            "university": "RU",
            "year": "20-21",
            "topic": "T-03: বলের সাথে সমকোণে ক্রিয়ারত লব্ধি সংক্রান্ত"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-2415",
            "question": "$P$ এবং $Q$ বল দুইটির মধ্যবর্তী কোণ $135^\\circ$ এবং এদের লব্ধি $Q$ হলে, $P \\text{ ও } Q$ এর মধ্যে সম্পর্ক কোনটি? [CU'20-21]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$P = \\sqrt{2}Q$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\sqrt{2}P = Q$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$P = 3Q$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$P = Q$"
              }
            ],
            "answer": "a",
            "explanation": "",
            "university": "CU",
            "year": "20-21",
            "topic": "T-03: বলের সাথে সমকোণে ক্রিয়ারত লব্ধি সংক্রান্ত",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "লামির উপপাদ্য ও সাম্যাবস্থা",
        "description": "তিনটি বলের সাম্যাবস্থা, কোণ ও বলের অনুপাত এবং ঝুলন্ত সুতার টান।",
        "solvingStrategy": "১) তিনটি কোণ বের করে $360^\\circ$ মেলান। ২) $\\frac{P}{\\sin\\alpha}=\\frac{Q}{\\sin\\beta}=\\frac{R}{\\sin\\gamma}$ প্রয়োগ করুন।",
        "startIndex": 5,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-2417",
            "question": "$2\\text{ N}$ এবং $5\\text{ N}$ মানের দুইটি বল একই রেখায় একই দিকে ক্রিয়ারত। উহাদের সর্বাধিক লব্ধি হবে- [DU'17-18]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$7\\text{ N}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$3\\text{ N}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\sqrt{29}\\text{ N}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$5\\text{ N}$"
              }
            ],
            "answer": "a",
            "explanation": "",
            "university": "DU",
            "year": "17-18",
            "topic": "T-03: বলের সাথে সমকোণে ক্রিয়ারত লব্ধি সংক্রান্ত"
          },
          {
            "id": "math-q-2418",
            "question": "দুটি বলের বৃহত্তম লব্ধি $7\\text{ N}$ এবং ক্ষুদ্রতম লব্ধি $1\\text{ N}$; বল দুটি পরস্পরের সাথে $90^\\circ$ কোণে একটি কণার উপর ক্রিয়া করলে লব্ধির মান কত হবে? [RU'19-20]",
            "options": [],
            "answer": "",
            "explanation": "Sol$: \\text{ধরি, বল দুটি } P \\in Q \\text{ এবং } P > Q$\r\nপ্রশ্নমতে, $P + Q = 7$ --- (i); $P - Q = 1$ --- (ii)\r\n(i) + (ii) $\\Rightarrow 2P = 8 \\therefore P = 4\\text{ N}$\r\nআবার, (i) - (ii) $\\Rightarrow 2Q = 6 \\therefore Q = 3\\text{ N}$\r\n$\\therefore R^2 = P^2 + Q^2 + 2 \\cdot P \\cdot Q \\cos 90^\\circ$\r\n$\\therefore R = \\sqrt{4^2 + 3^2} = 5\\text{N}$ (Ans.)",
            "university": "RU",
            "year": "19-20",
            "topic": "T-03: বলের সাথে সমকোণে ক্রিয়ারত লব্ধি সংক্রান্ত"
          },
          {
            "id": "math-q-2419",
            "question": "দুটি সমান মানের বলের লব্ধি এদের গুণফলের বর্গমূল হলে, বলদ্বয়ের মধ্যবর্তী কোণ কত? \\[|Agri.'19-20|\\]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$0^{\\circ}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$30^{\\circ}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$60^{\\circ}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$120^{\\circ}$"
              }
            ],
            "answer": "d",
            "explanation": "Sol\": সমমানের বলের লব্ধি, $R = 2P \\cos \\left(\\frac{\\alpha}{2}\\right)$\r\n\\[\\text{\\[সমানমানের বলের মান } P \\text{ এবং বলদ্বয়ের মধ্যবর্তী কোণ } \\alpha\\text{]}\\]\r\nশর্তমতে, $R = \\sqrt{P^2} \\Rightarrow R = P \\Rightarrow 2P \\cos \\left(\\frac{\\alpha}{2}\\right) = P$\r\n$\\Rightarrow \\cos \\left(\\frac{\\alpha}{2}\\right) = \\frac{1}{2} \\Rightarrow \\frac{\\alpha}{2} = 60^{\\circ} \\therefore \\alpha = 120^{\\circ}$\r\n\r\nSol\": সমমানের দুটি বলের লব্ধি তাদের অন্তর্ভুক্ত কোণকে সমদ্বিখণ্ডিত করে।\r\n$\\therefore R, P$ বলের সাথে $\\frac{90^{\\circ}}{2} = 45^{\\circ}$ কোণ উৎপন্ন করবে।",
            "university": "Admission",
            "year": "",
            "topic": "T-02: কোণ নির্ণয় সংক্রান্ত"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-2420",
            "question": "7 ও 8 কিলোগ্রাম ওজনের দুটি বলের লব্ধি 13 কিলোগ্রাম হলে বলদ্বয় পরস্পর কত কোণে ক্রিয়া করবে? \\[RU'17-18|\\]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$50^{\\circ}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$60^{\\circ}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$45^{\\circ}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$30^{\\circ}$"
              }
            ],
            "answer": "b",
            "explanation": "Sol\": $13^2 = 7^2 + 8^2 + 2 \\cdot 7 \\cdot 8 \\cos \\alpha$\r\n$\\Rightarrow \\cos \\alpha = \\frac{169 - 49 - 64}{2 \\times 7 \\times 8} = \\frac{1}{2} \\therefore \\alpha = \\cos^{-1} \\left(\\frac{1}{2}\\right) = 60^{\\circ}$",
            "university": "Admission",
            "year": "",
            "topic": "T-02: কোণ নির্ণয় সংক্রান্ত",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "লব্ধি ক্ষুদ্রতম বলের উপর লম্ব হলে $\\cos\\alpha = -P/Q$ কেন হয়?",
        "description": "$\\tan 90^\\circ = \\infty$ ধরে হর শূন্য বসিয়ে শর্টকাটটি প্রতিপাদনের নিখুঁত প্রমাণ।",
        "promptQuery": "লব্ধি ক্ষুদ্রতর বলের উপর লম্ব হলে $\\cos\\alpha = -P/Q$ এবং $R = \\sqrt{Q^2-P^2}$ কেন হয় তার গাণিতিক প্রমাণ দেখাও।"
      },
      {
        "title": "লামির উপপাদ্যের ভেক্টর ক্রস গুণন প্রমাণ",
        "description": "$\\vec{P} + \\vec{Q} + \\vec{R} = 0$ সমীকরণে ক্রস গুণন প্রয়োগ করে ৩ লাইনে লামির প্রমাণ।",
        "promptQuery": "ভেক্টর পদ্ধতির সাহায্যে লামির উপপাদ্যের চমৎকার প্রতিপাদন ব্যাখ্যা করো।"
      },
      {
        "title": "সদৃশ ও অসদৃশ সমান্তরাল বলের লব্ধির অবস্থান",
        "description": "$P \\times AC = Q \\times BC$ সূত্রের মাধ্যমে লিভার নীতি ও ওজন ভারসাম্যের হিসাব।",
        "promptQuery": "সদৃশ ও অসদৃশ সমান্তরাল বলের লব্ধির মান ও ক্রিয়া বিন্দু নির্ণয়ের নিয়ম উদাহরণসহ বুঝিয়ে দাও।"
      },
      {
        "title": "ত্রিভুজের অন্তকেন্দ্র ও পরিকেন্দ্রে ক্রিয়ারত বলের সাম্যাবস্থা",
        "description": "ত্রিভুজের কেন্দ্রে বল সাম্যাবস্থায় থাকলে বলগুলোর অনুপাত কোণের সাথে কেমন হয়?",
        "promptQuery": "ত্রিভুজের পরিকেন্দ্রে তিনটি বল সাম্যাবস্থায় থাকলে প্রমাণ করো যে $P : Q : R = \\sin 2A : \\sin 2B : \\sin 2C$।"
      },
      {
        "title": "স্থিতিবিদ্যা অধ্যায়ের শীর্ষ ৩টি ভর্তি পরীক্ষা ফাঁদ",
        "description": "কোণ পরিমাপে সম্পূরক কোণের ভুল এবং ক্ষুদ্রতর বনাম বৃহত্তর বলের অনুপাতের ভুল।",
        "promptQuery": "স্থিতিবিদ্যা অধ্যায়ে ইঞ্জিনিয়ারিং ও ভার্সিটি পরীক্ষায় সবচেয়ে বেশি ভুল হওয়া ৩টি প্রশ্ন ও সমাধান বিশ্লেষণ করো।"
      }
    ],
    "questionCount": 105
  },
  {
    "id": "ch-dynamics",
    "paper": "Second-Paper",
    "paperBn": "২য় পত্র",
    "chapterNum": 9,
    "nameBn": "সমতলে বস্তুকণার গতি",
    "nameEn": "Motion of Particles in a Plane",
    "rawName": "সমতলে বস্তুকণার গতি",
    "summary": "উচ্চতর গণিত ২য় পত্রের অন্যতম গতিশীল অধ্যায়। সমত্বরণে রৈখিক গতি, তক্তা ভেদ সমস্যা, আপেক্ষিক বেগ ও নদী-নৌকার সমস্যা এবং প্রক্ষেপক বা প্রাসের গতিপথ থেকে বুয়েট ও বিশ্ববিদ্যালয়ে প্রতিবছর প্রশ্ন আসে।",
    "topics": [
      "সরলরেখায় সমত্বরণে গতি",
      "বুলেটের তক্তা ভেদ সংক্রান্ত সমস্যা",
      "আপেক্ষিক বেগ ও নদী-নৌকার সমস্যা",
      "প্রক্ষেপক বা প্রাস (Projectiles)",
      "উল্লম্ব গতি ও মাধ্যাকর্ষণ"
    ],
    "concepts": [
      {
        "id": "c-dyn-01",
        "title": "তক্তা ভেদ সমস্যা ও গতির সমীকরণ (Bullet-Plank Problem & Kinematics)",
        "topic": "বুলেটের তক্তা ভেদ সংক্রান্ত সমস্যা",
        "summary": "বেগ $1/n$ অংশ হ্রাস পেলে আরও কতদূর যাবে, তক্তা সংখ্যা $n^2$ শর্টকাট এবং গতির মৌলিক সমীকরণ।",
        "intro": {
          "what": "গতিবিদ্যা হলো বস্তুর গতির কারণ বিবেচনা না করে তার বেগ, ত্বরণ, সময় ও সরণের সম্পর্কযুক্ত গাণিতিক বিশ্লেষণ। সমত্বরণের মৌলিক সূত্রাবলি: $v = u + at, s = ut + \\frac{1}{2}at^2, v^2 = u^2 + 2as$।",
          "whyImportant": "ভর্তি পরীক্ষার গতিবিদ্যা অংশে \"বুলেটের বেগ অর্ধেক হলে আর কতদূর যাবে?\" এবং \"বেগ ৩ গুণ করলে কতটি তক্তা ভেদ করবে?\" সবচেয়ে জনপ্রিয় শর্টকাট প্রশ্ন।",
          "whereUsed": "ব্যালিস্টিক মিসাইল ট্র্যাকিং, অটোমোবাইল ব্রেকিং ডিসটেন্স এবং মহাকাশযানের গতিপথ নিয়ন্ত্রণে।",
          "prerequisites": "রৈখিক গতি ও কাজের ধারণা।"
        },
        "easyExplanation": [
          "শর্টকাট ১ (তক্তা সংখ্যা): বুলেটের বেগ $n$ গুণ বৃদ্ধি করা হলে তা $n^2$ সংখ্যক তক্তা ভেদ করতে পারবে! যেমন বেগ ৩ গুণ করলে $3^2 = 9$ টি তক্তা ভেদ করবে।",
          "শর্টকাট ২ (বেগ $1/n$ হ্রাস পেলে): যদি একটি তক্তা ভেদ করার পর বুলেটের বেগ $\\frac{1}{n}$ অংশ হ্রাস পায় (যেমন অর্ধেক বা $1/2$ কমে), তবে বুলেটটি থামার পূর্বে আরও $s' = \\frac{s(n-1)^2}{2n-1}$ অথবা সরাসরি সহজে: বেগ অর্ধেক ($1/2$) হলে আর $\\frac{1}{3}$ অংশ দূরত্ব যাবে!"
        ],
        "formulas": [
          {
            "latex": "\\text{তক্তা সংখ্যা} = n^2 \\quad (\\text{বেগ } n \\text{ গুণ বৃদ্ধি পেলে})",
            "name": "তক্তা সংখ্যার বর্গীয় শর্টকাট",
            "meaning": "গতিশক্তি বেগের বর্গের সমানুপাতিক ($E_k \\propto v^2$) হওয়ায় তক্তা সংখ্যা $n^2$ হয়।",
            "whenToUse": "বেগ দ্বিগুণ বা তিনগুণ করলে কয়টি তক্তা ভেদ করবে বের করতে।",
            "conditions": "প্রতিটি তক্তার প্রতিরোধ বল সমান হতে হবে।",
            "variables": "$n$: বেগের গুণিতক।",
            "commonMistakes": "সরাসরি $n$ গুণ মনে করা।"
          },
          {
            "latex": "s' = \\frac{s}{3} \\quad (\\text{বেগ অর্ধেক হলে আরও অতিক্রান্ত দূরত্ব})",
            "name": "অর্ধেক বেগ হ্রাসের ৩-শর্টকাট",
            "meaning": "$s$ দূরত্বে বেগ অর্ধেক ($u/2$) হলে বুলেটটি আর $s/3$ দূরত্ব গিয়ে থেমে যাবে।",
            "whenToUse": "বেগ অর্ধেক হওয়ার প্রশ্নে ৫ সেকেন্ডে উত্তর দিতে।",
            "conditions": "সুসম মন্দন বিদ্যমান।",
            "variables": "$s$: প্রথম তক্তার পুরুত্ব, $s'$: অতিরিক্ত দূরত্ব।",
            "commonMistakes": "আর অর্ধেক ($s$) যাবে মনে করা (মন্দন অব্যাহত থাকায় কম দূরত্ব যাবে)।"
          },
          {
            "latex": "v^2 = u^2 - 2as \\implies s \\propto u^2 \\quad (v = 0 \\text{ হলে})",
            "name": "থামার দূরত্বের বর্গীয় সূত্র",
            "meaning": "ব্রেকিং দূরত্ব বা প্রবেশের গভীরতা আদিবেগের বর্গের সমানুপাতিক।",
            "whenToUse": "গাড়ি থামার দূরত্ব বা মন্দনের সমস্যায়।",
            "conditions": "মন্দন সুষম।",
            "variables": "$u$: আদিবেগ, $s$: থামার দূরত্ব।",
            "commonMistakes": "দূরত্বকে বেগের সাথে রৈখিক ভাবা।"
          }
        ],
        "analysis": {
          "conditions": "যদি বুলেটটি $s$ দূরত্বে প্রবেশ করে বেগের $\\frac{1}{n}$ অংশ হারায়, তবে অবশিষ্ট বেগ থাকে $u\\left(1 - \\frac{1}{n}\\right)$।",
          "variations": "যদি বেগ $\\frac{1}{n}$ অংশে নেমে আসে (অর্থাৎ অবশিষ্ট বেগ $u/n$), তবে অতিরিক্ত দূরত্ব $s' = \\frac{s}{n^2 - 1}$।",
          "relationships": "কাজ-শক্তি উপপাদ্য: $F \\cdot s = \\frac{1}{2}mu^2$। প্রতিরোধ বল $F$ স্থির থাকলে $s \\propto u^2$।",
          "transformations": "গড় দ্রুতির সূত্র: সমদূরত্ব দুটি ভিন্ন দ্রুতিতে ($v_1, v_2$) অতিক্রম করলে গড় দ্রুতি $v_{\\text{avg}} = \\frac{2v_1 v_2}{v_1 + v_2}$ (হারমোনিক গড়)।",
          "misunderstandings": "\"বেগ অর্ধেক হারায়\" আর \"বেগ অর্ধেক হয়\"—এই দুটি কথার অর্থ এক, কিন্তু \"বেগ ১/৩ অংশ হারায়\" বললে অবশিষ্ট বেগ থাকে ২/৩।"
        },
        "questionPatterns": [
          {
            "typeTitle": "বুলেটের তক্তা ভেদ সংক্রান্ত সমস্যা",
            "recognition": "প্রশ্নে বলা থাকবে একটি বুলেট ৩ সেমি তক্তা ভেদ করে অর্ধেক বেগ হারায়, এটি আর কত দূর যাবে?",
            "requiredConcept": "শর্টকাট $s' = s/3$।",
            "strategy": "সরাসরি প্রথম দূরত্বকে ৩ দিয়ে ভাগ করুন: $s' = 3 / 3 = 1$ সেমি।",
            "keySteps": [
              "প্রথম দূরত্ব চিহ্নিত করা",
              "শর্টকাটে ৩ দিয়ে ভাগ",
              "উত্তর লেখা"
            ],
            "commonTraps": "বড় করে সমীকরণ সাজিয়ে পৃষ্ঠা নষ্ট করা।"
          }
        ],
        "easyExample": {
          "problem": "একটি বুলেট কোনো কাঠের তক্তার ভেতর $3\\text{ cm}$ প্রবেশ করে তার বেগের অর্ধেক হারায়। বুলেটটি তক্তার ভেতর আর কত দূর প্রবেশ করতে পারবে?",
          "solutionSteps": [
            "ধরি আদিবেগ $u$। $3\\text{ cm}$ দূরত্বে বেগ হয় $u/2$।",
            "শর্টকাট সূত্র: বেগ অর্ধেক হারালে অতিরিক্ত দূরত্ব $s' = \\frac{s}{3}$।",
            "এখানে $s = 3\\text{ cm}$।",
            "অতএব অতিরিক্ত দূরত্ব $s' = \\frac{3}{3} = 1\\text{ cm}$।"
          ],
          "answer": "$1\\text{ cm}$"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "একটি রাইফেলের গুলি একটি নির্দিষ্ট পুরুত্বের তক্তা ভেদ করতে পারে। গুলির বেগ ৪ গুণ বৃদ্ধি করা হলে তা অনুরূপ কয়টি তক্তা ভেদ করতে পারবে?",
          "recognitionApproach": "আমরা জানি ভেদকৃত তক্তা সংখ্যা আদিবেগের বর্গের সমানুপাতিক: তক্তা সংখ্যা $= n^2$।",
          "stepByStepSolution": "১) কাজের সূত্র: $F \\cdot x = \\frac{1}{2}mu^2 \\implies x \\propto u^2$।\n২) আদিবেগ $u$ হলে তক্তা ভেদ করে ১টি।\n৩) বেগ $n = 4$ গুণ করা হলে মোট প্রবেশ ক্ষমতা $= 4^2 = 16$ গুণ হবে।\n৪) অতএব বুলেটটি মোট $16$ টি তক্তা ভেদ করতে পারবে।",
          "whyItWorks": "গতিশক্তি বেগের বর্গের সমানুপাতিক হওয়ায় বেগ ৪ গুণ হলে গতিশক্তি ১৬ গুণ হয়, ফলে ১৬ গুণ কাজ সম্পন্ন হয়।",
          "calcAvoidanceTrick": "সরাসরি $4^2 = 16$ টি তক্তা (২ সেকেন্ডের উত্তর)।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "তক্তা সংখ্যা: $n^2$",
            "অর্ধেক বেগ হারালে: $s' = s/3$",
            "গড় দ্রুতি: $\\frac{2v_1 v_2}{v_1+v_2}$",
            "$v^2 = u^2 - 2as$"
          ],
          "importantConditions": [
            "প্রতিরোধ বল সুষম হতে হবে।"
          ],
          "keyObservations": [
            "দূরত্ব বেগের বর্গের সমানুপাতিক ($s \\propto u^2$)।"
          ],
          "recognitionTips": [
            "তক্তা দেখলেই স্কয়ার শর্টকাট।"
          ],
          "commonMistakes": [
            "অর্ধেক বেগ কমলে আর অর্ধেক যাবে ভাবা।"
          ],
          "summary": "বেগ $n$ গুণ হলে তক্তা $n^2$ টি। বেগ অর্ধেক হলে আর $s/3$ দূর গিয়ে থামবে।"
        }
      },
      {
        "id": "c-dyn-02",
        "title": "নদী-নৌকা ও প্রক্ষেপকের গতি (River-Boat & Projectiles)",
        "topic": "আপেক্ষিক বেগ ও নদী-নৌকার সমস্যা",
        "summary": "নদী পারাপারে ন্যূনতম দূরত্ব ($90^\\circ$ পারাপার), ন্যূনতম সময় ($t = d/v$), এবং প্রাসের সর্বাধিক পাল্লা ($R_{\\max} = u^2/g$)।",
        "intro": {
          "what": "নদী-নৌকার সমস্যা হলো স্রোতের বেগ ($u$) এবং নৌকার নিজস্ব বেগের ($v$) আপেক্ষিক ভেক্টর সমন্বয়। প্রক্ষেপক বা প্রাস হলো অনুভূমিকের সাথে তির্যকভাবে নিক্ষিপ্ত বস্তুর দ্বিমাত্রিক বক্র গতিপথ।",
          "whyImportant": "ভর্তি পরীক্ষায় \"সোজাসুজি অপর পাড়ে পৌঁছাতে কোন দিকে চালাতে হবে?\" এবং প্রাসের সর্বাধিক উচ্চতা ও পাল্লার প্রশ্ন নিশ্চিত আসে।",
          "whereUsed": "নৌ-চলাচল নেভিগেশন, এয়ারক্রাফটের ক্রসউইন্ড ল্যান্ডিং ও আর্টিলারি গোলার রেঞ্জ গণনায়।",
          "prerequisites": "ভেক্টরের উপাংশ বিভাজন ও সামান্তরিক সূত্র।"
        },
        "easyExplanation": [
          "নদী পারাপারের ২টি ভিন্ন লক্ষ্য: ১) ন্যূনতম দূরত্বে সোজাসুজি পারাপার (নদীর প্রস্থ বরাবর): লব্ধি নদী পারাপারের লম্ব বরাবর হবে, তাই কোণ $\\cos\\alpha = -\\frac{u}{v}$ এবং পার হতে সময় $t = \\frac{d}{\\sqrt{v^2-u^2}}$। লক্ষ্য করুন: অবশ্যই $v > u$ হতে হবে। ২) ন্যূনতম সময়ে পারাপার: সোজা $90^\\circ$ কোণে রওয়ানা দিতে হবে ($alpha = 90^circ$), তখন সময় $t_{\\min} = \\frac{d}{v}$।",
          "প্রক্ষেপকের সেরা শর্টকাট: সর্বাধিক পাল্লার জন্য নিক্ষেপণ কোণ $\\theta = 45^\\circ$, তখন $R_{\\max} = \\frac{u^2}{g}$ এবং এই ক্ষেত্রে অর্জিত উচ্চতা $H = \\frac{R_{\\max}}{4}$!"
        ],
        "formulas": [
          {
            "latex": "\\cos\\alpha = -\\frac{u}{v} \\quad (\\text{সোজাসুজি পারাপার বা ন্যূনতম দূরত্ব})",
            "name": "সোজাসুজি নদী পারাপারের কোণ",
            "meaning": "স্রোতের বিপরীতে যে কোণে নৌকা চালাতে হয়।",
            "whenToUse": "সোজাসুজি অপর পাড়ে পৌঁছানোর দিক নির্ণয়ে।",
            "conditions": "নৌকার বেগ স্রোতের বেগের চেয়ে বেশি হতে হবে ($v > u$)।",
            "variables": "$u$: স্রোতের বেগ, $v$: নৌকার বেগ, $\\alpha$: স্রোতের সাথে কোণ।",
            "commonMistakes": "$\\cos\\alpha = -v/u$ লেখা (লবে স্রোত, হরে নৌকা)।"
          },
          {
            "latex": "t_{\\min} = \\frac{d}{v} \\quad (\\alpha = 90^\\circ \\text{ কোণে রওয়ানা হলে})",
            "name": "নদী পারাপারে ন্যূনতম সময়",
            "meaning": "নদীর প্রস্থকে নৌকার বেগ দিয়ে ভাগ করলেই ন্যূনতম সময়।",
            "whenToUse": "সবচেয়ে কম সময়ে নদী পার হতে বললে।",
            "conditions": "স্রোতের সাথে ঠিক $90^\\circ$ কোণে নৌকা চালাতে হবে।",
            "variables": "$d$: নদীর প্রস্থ, $v$: নৌকার বেগ।",
            "commonMistakes": "স্রোতের বেগকে বিবেচনায় নিয়ে সময় বাড়িয়ে ফেলা (উল্লম্ব বেগে স্রোতের কোনো উপাংশ নেই)।"
          },
          {
            "latex": "R = \\frac{u^2\\sin 2\\theta}{g}, \\quad H = \\frac{u^2\\sin^2\\theta}{2g}, \\quad T = \\frac{2u\\sin\\theta}{g}",
            "name": "প্রাসের পাল্লা, উচ্চতা ও বিচরণকাল",
            "meaning": "তির্যকভাবে নিক্ষিপ্ত প্রক্ষেপকের মূল তিনটি সূত্র।",
            "whenToUse": "প্রাসের গতিপথের হিসাব-নিকাশে।",
            "conditions": "বায়ুর বাধা উপেক্ষণীয়।",
            "variables": "$u$: নিক্ষেপণ বেগ, $\\theta$: নিক্ষেপণ কোণ, $g$: অভিকর্ষজ ত্বরণ।",
            "commonMistakes": "পাল্লায় $\\sin 2\\theta$ আর উচ্চতায় $\\sin^2\\theta$ গুলিয়ে ফেলা।"
          }
        ],
        "analysis": {
          "conditions": "পরিপূরক কোণে সমান পাল্লা: $\\theta$ এবং $(90^\\circ - \\theta)$ কোণে একই বেগে নিক্ষেপ করলে উভয় ক্ষেত্রে পাল্লা $R$ হুবহু সমান হয়!",
          "variations": "প্রাসের উচ্চতা ও পাল্লার সম্পর্ক: $\\frac{R}{H} = 4\\cot\\theta$ বা $R\\tan\\theta = 4H$। এটি ভর্তি পরীক্ষার দারুণ শর্টকাট।",
          "relationships": "যদি পাল্লা ও সর্বোচ্চ উচ্চতা সমান হয় ($R = H$), তবে $\\tan\\theta = 4 \\implies \\theta = \\tan^{-1}(4) \\approx 76^\\circ$।",
          "transformations": "সোজাসুজি পারাপারে লব্ধি বেগ $w = \\sqrt{v^2 - u^2}$।",
          "misunderstandings": "ন্যূনতম দূরত্বে নৌকা সোজা পৌঁছায় কিন্তু রওয়ানা দিতে হয় স্থূলকোণে ($>90^\\circ$), আর ন্যূনতম সময়ে রওয়ানা দেয় সোজা ($90^\\circ$) কিন্তু পৌঁছায় বাঁকা হয়ে ভাটির দিকে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "সোজাসুজি নদী পারাপারের দিক নির্ণয়",
            "recognition": "প্রশ্নে স্রোতের বেগ ও নৌকার বেগ দেওয়া থাকবে এবং ঠিক বিপরীত পাড়ে পৌঁছানোর দিক চাইবে।",
            "requiredConcept": "$\\cos\\alpha = -u/v$।",
            "strategy": "সরাসরি $\\cos\\alpha = -\\frac{\\text{স্রোত}}{\\text{নৌকা}}$ বসিয়ে কোণ বের করুন।",
            "keySteps": [
              "$u$ ও $v$ চিহ্নিত করা",
              "$\\cos\\alpha = -u/v$ লেখা",
              "$\\alpha$ বের করা"
            ],
            "commonTraps": "অনুপাত উল্টে ফেলা।"
          }
        ],
        "easyExample": {
          "problem": "একটি নদীর স্রোতের বেগ $3\\text{ km/h}$ এবং নৌকার বেগ $6\\text{ km/h}$। সোজাসুজি অপর পাড়ে পৌঁছাতে হলে নৌকাটিকে কোন দিকে চালাতে হবে?",
          "solutionSteps": [
            "সোজাসুজি পারাপারের শর্ত: $\\cos\\alpha = -\\frac{u}{v}$।",
            "এখানে স্রোতের বেগ $u = 3$ এবং নৌকার বেগ $v = 6$।",
            "$\\cos\\alpha = -\\frac{3}{6} = -\\frac{1}{2}$।",
            "আমরা জানি $\\cos 120^\\circ = -\\frac{1}{2}$।",
            "অতএব স্রোতের দিকের সাথে $120^\\circ$ কোণে নৌকা চালাতে হবে।"
          ],
          "answer": "$120^\\circ$"
        },
        "examExample": {
          "examTag": "BUET / DU Admission",
          "problem": "একটি বস্তুকে অনুভূমিকের সাথে কত কোণে নিক্ষেপ করলে এর পাল্লা সর্বোচ্চ উচ্চতার চারগুণ হবে ($R = 4H$)?",
          "recognitionApproach": "পাল্লা ও উচ্চতার সম্পর্ক সূত্র: $R\\tan\\theta = 4H$।",
          "stepByStepSolution": "১) আমরা জানি: $\\frac{R}{H} = \\frac{u^2\\sin 2\\theta/g}{u^2\\sin^2\\theta/(2g)} = \\frac{2\\sin\\theta\\cos\\theta}{\\sin^2\\theta / 2} = \\frac{4\\cos\\theta}{\\sin\\theta} = 4\\cot\\theta$।\n২) অর্থাৎ $R\\tan\\theta = 4H$।\n৩) প্রশ্নমতে $R = 4H$ বসিয়ে পাই: $(4H)\\tan\\theta = 4H \\implies \\tan\\theta = 1$।\n৪) $\\tan\\theta = 1 \\implies \\theta = 45^\\circ$।",
          "whyItWorks": "$\theta = 45^circ$ হলো সর্বাধিক পাল্লার কোণ, এবং এই কোণেই অনুভূমিক বিস্তার সর্বোচ্চ উচ্চতার ঠিক ৪ গুণ হয়।",
          "calcAvoidanceTrick": "শর্টকাট $R\\tan\\theta = 4H$ জানা থাকলে $R=4H \\implies \\tan\\theta=1 \\implies 45^\\circ$ ৫ সেকেন্ডে সমাধান।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "সোজাসুজি পারাপার: $\\cos\\alpha = -u/v$",
            "ন্যূনতম সময়: $t_{\\min} = d/v$",
            "$R = \\frac{u^2\\sin 2\\theta}{g}$",
            "$R\\tan\\theta = 4H$",
            "$R_{\\max} = u^2/g$ ($45^\\circ$ তে)"
          ],
          "importantConditions": [
            "সোজাসুজি পারাপারে $v > u$ হতে হবে।"
          ],
          "keyObservations": [
            "$\\theta$ ও $90^\\circ-\\theta$ কোণে পাল্লা হুবহু সমান।"
          ],
          "recognitionTips": [
            "নদী সোজা পার হতে $\\cos\\alpha = -u/v$।"
          ],
          "commonMistakes": [
            "ন্যূনতম সময় আর ন্যূনতম দূরত্বের কোণ গুলিয়ে ফেলা।"
          ],
          "summary": "সোজা পারাপারে $\\cos\\alpha = -u/v$। ন্যূনতম সময়ে $t=d/v$। প্রাসে $R\\tan\\theta=4H$ এবং $45^\\circ$ তে সর্বোচ্চ পাল্লা।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "তক্তা ভেদ ও রৈখিক গতির সমস্যা",
        "description": "বুলেটের তক্তা ভেদ, বেগ হ্রাস ও অতিরিক্ত প্রবেশ দূরত্ব এবং সমত্বরণের সমস্যা।",
        "solvingStrategy": "১) বেগ $n$ গুণ হলে তক্তা $n^2$ টি। ২) অর্ধেক বেগ হারালে আর $s/3$ যাবে।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-2517",
            "question": "কোনো কণার উপর একই সময়ে একই দিকে ক্রিয়াশীল দুইটি বেগ $12\\text{ ms}^{-1}$ এবং $5\\text{ ms}^{-1}$ হলে, তাদের লব্ধি বেগ কত? [JU'14-15]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$12\\text{ ms}^{-1}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$16\\text{ ms}^{-1}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$17\\text{ ms}^{-1}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$10\\text{ ms}^{-1}$"
              }
            ],
            "answer": "c",
            "explanation": "Sol\\\": বেগদ্বয় একই দিকে ক্রিয়াশীল বলে লব্ধি সর্বোচ্চ হবে; $w_{\\max} = 12 + 5 = 17\\text{ ms}^{-1}$",
            "university": "JU",
            "year": "14-15",
            "topic": "T-01: বেগের সামান্তরিক সূত্র সংক্রান্ত"
          },
          {
            "id": "math-q-2518",
            "question": "দুটি সমান বেগের মধ্যবর্তী কোণ $\\alpha$ এবং লব্ধি যেকোনো বেগের সাথে $\\theta$ কোণ উৎপন্ন করলে $\\theta$ এর মান কোনটি? [JnU'17-18]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\frac{\\alpha}{3}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$\\alpha$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{\\alpha}{2}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$2\\alpha$"
              }
            ],
            "answer": "c",
            "explanation": "Sol\\\": $\\tan \\theta = \\frac{P \\sin \\alpha}{P + P \\cos \\alpha} \\Rightarrow \\tan \\theta = \\frac{\\sin \\alpha}{1 + \\cos \\alpha}$\r\n$\\Rightarrow \\tan \\theta = \\frac{2 \\sin \\frac{\\alpha}{2} \\cos \\frac{\\alpha}{2}}{2 \\cos^2 \\frac{\\alpha}{2}} \\Rightarrow \\tan \\theta = \\tan \\frac{\\alpha}{2} \\therefore \\theta = \\frac{\\alpha}{2}$\r\nবিকল্প: $\\alpha = \\theta + \\theta = 2\\theta \\Rightarrow \\theta = \\frac{\\alpha}{2}$",
            "university": "JnU",
            "year": "17-18",
            "topic": "T-01: বেগের সামান্তরিক সূত্র সংক্রান্ত"
          },
          {
            "id": "math-q-2519",
            "question": "$12\\text{ ms}^{-1}$ বেগের দুই পার্শ্বে $30^\\circ$ ও $60^\\circ$ কোণে ক্রিয়ারত অংশকদ্বয় কত $\\text{ms}^{-1}$? [RU'23-24]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$6\\sqrt{3}, 6$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$6, 6\\sqrt{2}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$24, 24\\sqrt{3}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$24\\sqrt{2}, 24$"
              }
            ],
            "answer": "a",
            "explanation": "Sol\\\": $V_x = 12 \\cos 30^\\circ = 6\\sqrt{3}\\text{ ms}^{-1}$; $V_y = 12 \\sin 30^\\circ = 6\\text{ ms}^{-1}$\r\n\r\nউদ্ভাস একাডেমিক এন্ড এডমিশন কেয়ার\r\n৪১৬\r\nপরিবর্তনের প্রত্যয়ে নিরন্তর পথচলা...",
            "university": "RU",
            "year": "23-24",
            "topic": "T-02: বেগের উপাংশে বিভাজন"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-2520",
            "question": "একটি বস্তু<bos>35 সে.মি. ব্যাসার্ধবিশিষ্ট বৃত্তের পরিধি বরাবর 10 সেকেন্ডে ব্যাসের একপ্রান্ত থেকে অপর প্রান্তে পৌঁছালে, তার গড়বেগ কত সে.মি./সে.? [KU'17-18]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "3.5"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "7"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "11"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "109"
              }
            ],
            "answer": "b",
            "explanation": "Solⁿ: $v = \\frac{\\text{সরণ}}{\\text{সময়}} = \\frac{s}{t} = \\frac{2r}{t} = \\frac{2 \\times 35}{10} = 7$",
            "university": "KU",
            "year": "17-18",
            "topic": "T-03: দূরত্ব নির্ণয় সংক্রান্ত",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "নদী-নৌকা ও প্রক্ষেপকের গতি",
        "description": "সোজাসুজি নদী পারাপারের দিক, ন্যূনতম সময় এবং প্রাসের পাল্লা-উচ্চতা সম্পর্ক।",
        "solvingStrategy": "১) সোজা পারাপারে $\\cos\\alpha = -u/v$ নিন। ২) প্রাসে $R\\tan\\theta = 4H$ প্রয়োগ করুন।",
        "startIndex": 10,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-2527",
            "question": "কোনো লঞ্চ $12\\text{ kmh}^{-1}$ বেগে চলে $6\\text{ kmh}^{-1}$ বেগে প্রবাহিত নদীর এক তীর থেকে কোন দিকে যাত্রা করলে অপর তীরে সোজাসুজি যেতে পারবে? [JnU'13-14]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$120^\\circ$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$90^\\circ$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$130^\\circ$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$150^\\circ$"
              }
            ],
            "answer": "a",
            "explanation": "",
            "university": "JnU",
            "year": "13-14",
            "topic": "T-04: গড় দ্রুতি/বেগ সংক্রান্ত"
          },
          {
            "id": "math-q-2528",
            "question": "একটি ট্রেন অচল অবস্থা হতে $5\\text{ m/sec}^2$ ত্বরণে চলতে শুরু করার পর ঘণ্টায় $72\\text{km}$ বেগ প্রাপ্ত হতে কত সময় লাগবে? [CU'25-26]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$2\\text{ sec}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$3\\text{ sec}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$4\\text{ sec}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$5\\text{ sec}$"
              }
            ],
            "answer": "c",
            "explanation": "",
            "university": "CU",
            "year": "25-26",
            "topic": "T-06: গতির সূত্রাবলির ব্যবহার সংক্রান্ত"
          },
          {
            "id": "math-q-2529",
            "question": "একটি বস্তু স্থির অবস্থা হতে যাত্রা শুরু করে $5\\text{ ft/sec}^2$ সমত্বরণে চলতে থাকলে 5 সেকেন্ড পরে বস্তুর বেগ হবে- [GST'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$5\\text{ ft/sec}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$10\\text{ ft/sec}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$15\\text{ ft/sec}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$25\\text{ ft/sec}$"
              }
            ],
            "answer": "d",
            "explanation": "Sol\": $v = u + at = 0 + 5 \\times 5 = 25\\text{ ft/sec}$.",
            "university": "GST",
            "year": "24-25",
            "topic": "T-06: গতির সূত্রাবলির ব্যবহার সংক্রান্ত"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-2530",
            "question": "একটি গাড়ি স্থিরঅবস্থা থেকে $3\\text{ m/s}^2$ সমত্বরণে চললে, 5 sec পর গাড়ির বেগ কত হবে? [CoU'24-25]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$10\\text{ m/s}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$20\\text{ m/s}$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$15\\text{ m/s}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$25\\text{ m/s}$"
              }
            ],
            "answer": "c",
            "explanation": "Sol\": $v = u + ft = 3 \\times 5 = 15\\text{ m/s}$",
            "university": "CoU",
            "year": "24-25",
            "topic": "T-06: গতির সূত্রাবলির ব্যবহার সংক্রান্ত",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "তক্তা ভেদে বেগ অর্ধেক হলে কেন ঠিক $s/3$ দূরত্ব যায়?",
        "description": "গতিশক্তির সমীকরণ $v^2 = u^2 - 2as$ থেকে ধাপে ধাপে গাণিতিক প্রমাণ।",
        "promptQuery": "একটি বুলেট তক্তার ভেতর $s$ দূরত্বে অর্ধেক বেগ হারালে কেন আর মাত্র $s/3$ দূরত্ব যেতে পারে তা সমীকরণ দিয়ে প্রমাণ করো।"
      },
      {
        "title": "নদী পারাপারে ন্যূনতম দূরত্ব বনাম ন্যূনতম সময়ের কৌশল",
        "description": "কেন সোজা রওয়ানা দিলে সময় কম লাগে কিন্তু নৌকা সোজা পৌঁছায় না?",
        "promptQuery": "নদী-নৌকার সমস্যায় ন্যূনতম দূরত্ব ও ন্যূনতম সময়ের পার্থক্য ভেক্টর চিত্রের সাহায্যে বিশদ বুঝিয়ে দাও।"
      },
      {
        "title": "প্রাসের গতিপথ কেন একটি পরাবৃত্ত (Parabolic Path)?",
        "description": "$x$ ও $y$ স্থানাঙ্ক থেকে সময় $t$ অপনয়ন করে পরাবৃত্তের সমীকরণ প্রতিপাদন।",
        "promptQuery": "প্রমাণ করো যে অনুভূমিকের সাথে তির্যকভাবে নিক্ষিপ্ত প্রাসের গতিপথ একটি পরাবৃত্ত ($y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$)।"
      },
      {
        "title": "পরিপূরক কোণে প্রাসের পাল্লা কেন সমান হয়?",
        "description": "$\\sin 2(90^\\circ - \\theta) = \\sin 2\\theta$ অভেদের চমৎকার ব্যাখ্যা।",
        "promptQuery": "প্রমাণ করো যে $\\theta$ এবং $(90^\\circ - \\theta)$ কোণে নিক্ষিপ্ত প্রাসের অনুভূমিক পাল্লা সমান হয়।"
      },
      {
        "title": "গতিবিদ্যা অধ্যায়ের শীর্ষ ৩টি ভর্তি পরীক্ষা ফাঁদ",
        "description": "আপেক্ষিক বেগের দিক বিভ্রান্তি এবং উলম্ব গতির সর্বোচ্চ উচ্চতায় সময়ের ভুল।",
        "promptQuery": "গতিবিদ্যা অধ্যায়ে ভর্তি পরীক্ষায় ছাত্রছাত্রীদের সবচেয়ে বেশি হওয়া ৩টি সাধারণ ভুল আলোচনা করো।"
      }
    ],
    "questionCount": 135
  },
  {
    "id": "ch-probability",
    "paper": "Second-Paper",
    "paperBn": "২য় পত্র",
    "chapterNum": 10,
    "nameBn": "বিস্তার পরিমাপ ও সম্ভাবনা",
    "nameEn": "Measures of Dispersion & Probability",
    "rawName": "বিস্তার পরিমাপ ও সম্ভাবনা",
    "summary": "উচ্চতর গণিত ২য় পত্রের সমাপনী অধ্যায়। গড় ব্যবধান, ভেদাঙ্ক ($sigma^2$), পরিমিত ব্যবধান ($sigma$), বিভেদাঙ্ক ($CV$), মুদ্রা ও ছক্কার সম্ভাবনা, তাস ও বল তোলার সমস্যা এবং স্বাধীন ও বর্জনশীল ঘটনার সূত্রাবলী থেকে ভর্তি পরীক্ষায় প্রতি বছর নিশ্চিত প্রশ্ন আসে।",
    "topics": [
      "কেন্দ্রীয় প্রবণতা — গড়, মধ্যমা ও প্রচুরক",
      "বিস্তার পরিমাপ — ভেদাঙ্ক ও পরিমিত ব্যবধান",
      "বিভেদাঙ্ক ($CV$) ও সমসত্ত্বতা",
      "সম্ভাবনার মৌলিক বিধি ও মুদ্রা-ছক্কা",
      "স্বাধীন ও বর্জনশীল ঘটনা"
    ],
    "concepts": [
      {
        "id": "c-prob-01",
        "title": "ভেদাঙ্ক, পরিমিত ব্যবধান ও বিভেদাঙ্ক (Variance, SD & CV)",
        "topic": "বিস্তার পরিমাপ — ভেদাঙ্ক ও পরিমিত ব্যবধান",
        "summary": "ভেদাঙ্ক $\\sigma^2$, পরিমিত ব্যবধান $\\sigma$, মূল ও মাপনী পরিবর্তনের প্রভাব এবং বিভেদাঙ্ক $CV = \\frac{\\sigma}{\\bar{x}} \\times 100%$।",
        "intro": {
          "what": "পরিমিত ব্যবধান ($sigma$) হলো উপাত্তসমূহের গড় থেকে বিচ্যুতির বর্গের গড়ের ধনাত্মক বর্গমূল। ভেদাঙ্ক হলো পরিমিত ব্যবধানের বর্গ ($sigma^2$)। বিভেদাঙ্ক ($CV$) হলো দুটি ভিন্ন এককের তথ্যের পরিবর্তনশীলতা তুলনা করার শতকরা সূচক।",
          "whyImportant": "ভর্তি পরীক্ষায় \"উপাত্তের প্রতিটি মানের সাথে ৫ যোগ করলে ভেদাঙ্কের কী পরিবর্তন হবে?\" এবং প্রথম $n$ সংখ্যক স্বাভাবিক সংখ্যার ভেদাঙ্ক নির্ণয় নিশ্চিত আসে।",
          "whereUsed": "শেয়ার বাজারের ঝুঁকি বিশ্লেষণ (Risk Volatility), কোয়ালিটি কন্ট্রোল ও ক্লিনিক্যাল ট্রায়ালে ডাটা ভ্যারিয়েশন পরিমাপে।",
          "prerequisites": "গাণিতিক গড় নির্ণয় ($\bar{x} = \frac{sum x}{n}$)।"
        },
        "easyExplanation": [
          "মূল ও মাপনীর ম্যাজিক নিয়ম: ১) উপাত্তের প্রতিটি মানের সাথে কোনো ধ্রুবক যোগ বা বিয়োগ করলে (মূল পরিবর্তন) ভেদাঙ্ক ও পরিমিত ব্যবধানের কোনো পরিবর্তন হয় না! (অপরিবর্তিত থাকে)। ২) কিন্তু কোনো ধ্রুবক $c$ দ্বারা গুণ করলে পরিমিত ব্যবধান $|c|$ গুণ হয় এবং ভেদাঙ্ক $c^2$ গুণ হয়!",
          "প্রথম $n$ সংখ্যক স্বাভাবিক সংখ্যার ভেদাঙ্কের সুপার শর্টকাট: $\\sigma^2 = \\frac{n^2 - 1}{12}$! যেমন প্রথম ১০টি স্বাভাবিক সংখ্যার ভেদাঙ্ক $= \\frac{10^2 - 1}{12} = \\frac{99}{12} = 8.25$।",
          "বিভেদাঙ্ক ($CV$): যার $CV$ কম, সে তত বেশি সুষম, নির্ভরযোগ্য ও সামঞ্জস্যপূর্ণ (Consistent)।"
        ],
        "formulas": [
          {
            "latex": "\\sigma^2 = \\frac{\\sum x^2}{n} - (\\bar{x})^2, \\quad \\sigma = \\sqrt{\\sigma^2}",
            "name": "ভেদাঙ্ক ও পরিমিত ব্যবধানের সূত্র",
            "meaning": "বর্গের গড় বিয়োগ গড়ের বর্গ।",
            "whenToUse": "সরাসরি উপাত্তের বিস্তার পরিমাপে।",
            "conditions": "উপাত্তসমূহ সংখ্যাত্মক হতে হবে।",
            "variables": "$\\sigma^2$: ভেদাঙ্ক (Variance), $\\sigma$: পরিমিত ব্যবধান (SD), $\\bar{x}$: গড়।",
            "commonMistakes": "ভেদাঙ্ক আর পরিমিত ব্যবধানের মান উল্টে ফেলা (ভেদাঙ্ক হলো বর্গের মান)।"
          },
          {
            "latex": "\\sigma^2 = \\frac{n^2 - 1}{12} \\quad (1, 2, 3, \\dots, n \\text{ এর জন্য})",
            "name": "প্রথম $n$ সংখ্যক স্বাভাবিক সংখ্যার ভেদাঙ্ক",
            "meaning": "ক্রমিক স্বাভাবিক সংখ্যার ভেদাঙ্কের মুখস্থ শর্টকাট।",
            "whenToUse": "প্রথম ৫টি, ৭টি বা ১০টি স্বাভাবিক সংখ্যার ভেদাঙ্ক প্রশ্নে।",
            "conditions": "সংখ্যাগুলো অবশ্যই ১ থেকে শুরু হওয়া ক্রমিক পূর্ণসংখ্যা হতে হবে।",
            "variables": "$n$: শেষ সংখ্যা।",
            "commonMistakes": "নিচে ১২ এর বদলে অন্য সংখ্যা দেওয়া।"
          },
          {
            "latex": "CV = \\frac{\\sigma}{\\bar{x}} \\times 100\\%",
            "name": "বিভেদাঙ্ক (Coefficient of Variation)",
            "meaning": "গড়ের সাপেক্ষে পরিমিত ব্যবধানের শতকরা অনুপাত।",
            "whenToUse": "দুটি দল বা খেলোয়াড়ের নির্ভরযোগ্যতা তুলনা করতে।",
            "conditions": "$\\bar{x} > 0$।",
            "variables": "$\\sigma$: SD, $\\bar{x}$: গড়।",
            "commonMistakes": "$100$ দিয়ে গুণ করতে ভুলে যাওয়া।"
          }
        ],
        "analysis": {
          "conditions": "পরিমিত ব্যবধান সর্বদা মূল হতে স্বাধীন, কিন্তু মাপনীর উপর নির্ভরশীল। অর্থাৎ $y = ax + b$ হলে $\\sigma_y = |a|\\sigma_x$ এবং $\\sigma_y^2 = a^2\\sigma_x^2$।",
          "variations": "পরিমিত ব্যবধান কখনো ঋণাত্মক হতে পারে না ($sigma ge 0$)। সব উপাত্ত সমান হলে $sigma = 0$।",
          "relationships": "ভেদাঙ্ক ও পরিমিত ব্যবধানের একক: পরিমিত ব্যবধানের একক মূল উপাত্তের সমান (যেমন মিটার), কিন্তু ভেদাঙ্কের একক বর্গের সমান (মিটার$^2$)।",
          "transformations": "পরিসর (Range): সর্বোচ্চ মান বিয়োগ সর্বনিম্ন মান ($x_{\\max} - x_{\\min}$)।",
          "misunderstandings": "যোগ বা বিয়োগ করলে ছাত্রছাত্রীরা ভাবে ভেদাঙ্কও বাড়বে, অথচ বিস্তার বা ব্যবধান একই থাকে বলে ভেদাঙ্ক অপরিবর্তিত থাকে।"
        },
        "questionPatterns": [
          {
            "typeTitle": "উপাত্ত রূপান্তরে ভেদাঙ্কের পরিবর্তন",
            "recognition": "প্রশ্নে বলা থাকবে উপাত্তের প্রতিটি মানকে দ্বিগুণ করে ৩ যোগ করা হলে নতুন পরিমিত ব্যবধান কত?",
            "requiredConcept": "$\\sigma_{\\text{new}} = |a|\\sigma_{\\text{old}}$ (যোগ-বিয়োগের কোনো প্রভাব নেই)।",
            "strategy": "যোগ/বিয়োগ ধ্রুবক বাদ দিন। শুধু গুণিতক দিয়ে গুণ করুন।",
            "keySteps": [
              "গুণক $a$ চিহ্নিত করা",
              "$\\sigma$ কে $a$ দিয়ে গুণ করা",
              "উত্তর নির্ধারণ"
            ],
            "commonTraps": "যোগের মান যোগ করে ফেলা।"
          }
        ],
        "easyExample": {
          "problem": "প্রথম $5$ টি স্বাভাবিক সংখ্যার ($1, 2, 3, 4, 5$) ভেদাঙ্ক কত?",
          "solutionSteps": [
            "এখানে $n = 5$।",
            "স্বাভাবিক সংখ্যার ভেদাঙ্ক শর্টকাট: $\\sigma^2 = \\frac{n^2 - 1}{12}$।",
            "মান বসিয়ে পাই: $\\sigma^2 = \\frac{5^2 - 1}{12} = \\frac{25 - 1}{12} = \\frac{24}{12} = 2$।"
          ],
          "answer": "$2$"
        },
        "examExample": {
          "examTag": "BUET / DU / GST Admission",
          "problem": "কোনো উপাত্তের পরিমিত ব্যবধান $4$। প্রতিটি উপাত্তকে $3$ দ্বারা গুণ করে $5$ যোগ করা হলে নতুন উপাত্তের ভেদাঙ্ক কত হবে?",
          "recognitionApproach": "রূপান্তর সমীকরণ: $y = 3x + 5$। এখানে স্কেলিং গুণক $a = 3$ এবং মূল রূপান্তর $b = 5$।",
          "stepByStepSolution": "১) পরিমিত ব্যবধান কেবল মাপনীর উপর নির্ভরশীল, যোগের উপর নয়: $\\sigma_y = |3|\\sigma_x = 3 \\times 4 = 12$।\n২) নতুন উপাত্তের ভেদাঙ্ক হলো পরিমিত ব্যবধানের বর্গ: $\\sigma_y^2 = (12)^2 = 144$।\n(অথবা সরাসরি ভেদাঙ্কের সূত্র: $\\sigma_y^2 = a^2 \\sigma_x^2 = 3^2 \\times 4^2 = 9 \\times 16 = 144$)।",
          "whyItWorks": "উপাত্তকে ৩ গুণ করলে তাদের মধ্যকার পারস্পরিক ব্যবধান ৩ গুণ বৃদ্ধি পায়, এবং ভেদাঙ্ক ব্যবধানের বর্গের সমানুপাতিক হওয়ায় ৯ গুণ বৃদ্ধি পায়। ৫ যোগ করার ফলে ব্যবধানের কোনো পরিবর্তন হয় না।",
          "calcAvoidanceTrick": "ভেদাঙ্ক গুণকের বর্গ গুণ হয়: $3^2 \\times 4^2 = 9 \\times 16 = 144$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$\\sigma^2 = \\frac{\\sum x^2}{n} - (\\bar{x})^2$",
            "$n$ স্বাভাবিক সংখ্যার ভেদাঙ্ক: $\\frac{n^2-1}{12}$",
            "$y=ax+b \\implies \\sigma_y = |a|\\sigma_x$",
            "$CV = \\frac{\\sigma}{\\bar{x}} \\times 100\\%$"
          ],
          "importantConditions": [
            "যোগ/বিয়োগে SD ও ভেদাঙ্ক পরিবর্তন হয় না।"
          ],
          "keyObservations": [
            "গুণ করলে SD $|a|$ গুণ এবং ভেদাঙ্ক $a^2$ গুণ হয়।"
          ],
          "recognitionTips": [
            "স্বাভাবিক সংখ্যার ভেদাঙ্ক মানেই $(n^2-1)/12$।"
          ],
          "commonMistakes": [
            "যোগের মান পরিমিত ব্যবধানে যোগ করে ফেলা।"
          ],
          "summary": "ভেদাঙ্ক মাপনীর বর্গে বাড়ে, যোগ-বিয়োগে অপরিবর্তিত। স্বাভাবিক সংখ্যায় $(n^2-1)/12$। কম $CV$ মানে বেশি সামঞ্জস্য।"
        }
      },
      {
        "id": "c-prob-02",
        "title": "সম্ভাবনার মৌলিক বিধি ও মুদ্রা-ছক্কার সমস্যা (Probability Rules, Coins & Dice)",
        "topic": "সম্ভাবনার মৌলিক বিধি ও মুদ্রা-ছক্কা",
        "summary": "অনুকূল ও সমগ্র ফলাফলের অনুপাত, যোগ ও গুণন বিধি, স্বাধীন বনাম বর্জনশীল ঘটনা এবং মুদ্রা ও ছক্কা নিক্ষেপ।",
        "intro": {
          "what": "সম্ভাবনা হলো কোনো ঘটনার ঘটার গাণিতিক অনিশ্চয়তার পরিমাপ: $P(A) = \\frac{n(A)}{n(S)}$ যেখানে $0 \\le P(A) \\le 1$। নিশ্চিত ঘটনার সম্ভাবনা ১ এবং অসম্ভব ঘটনার সম্ভাবনা ০।",
          "whyImportant": "মুদ্রা নিক্ষেপ (কমপক্ষে একটি হেড), ছক্কার সমষ্টি (যেমন সমষ্টি ৭ বা ৮) এবং তাস সংক্রান্ত প্রশ্ন ভর্তি পরীক্ষার নিশ্চিত প্রশ্ন।",
          "whereUsed": "আর্টিফিশিয়াল ইন্টেলিজেন্সে প্রবাবিলিস্টিক রিজনিং, বায়োইনফরমেটিক্স ও বীমা ঝুঁকি প্রিমিয়াম গণনায়।",
          "prerequisites": "সমাবেশ তত্ত্ব ও সেটের সংযোগ-ছেদ।"
        },
        "easyExplanation": [
          "মুদ্রা নিক্ষেপের শর্টকাট: $n$ টি মুদ্রা একসাথে নিক্ষেপ করলে মোট ফলাফল $2^n$। \"কমপক্ষে একটি হেড\" পড়ার সম্ভাবনা $= 1 - \\text{একটিও হেড না পড়ার সম্ভাবনা} = 1 - \\frac{1}{2^n} = \\frac{2^n - 1}{2^n}$!",
          "দুটি ছক্কা নিক্ষেপের শর্টকাট: মোট ফলাফল $6^2 = 36$। সমষ্টি ৭ হওয়ার সম্ভাবনা সর্বোচ্চ ($6/36 = 1/6$)। সমষ্টি ২ থেকে ১২ পর্যন্ত একটি পিরামিড তৈরি করে (সমষ্টি ৭ এর সম্ভাবনা সবচেয়ে বেশি, ২ ও ১২ এর সম্ভাবনা সবচেয়ে কম)।",
          "স্বাধীন ঘটনা (Independent Events): $P(A \\cap B) = P(A) \\times P(B)$। বর্জনশীল ঘটনা (Mutually Exclusive): $P(A \\cap B) = 0$ ফলে $P(A \\cup B) = P(A) + P(B)$।"
        ],
        "formulas": [
          {
            "latex": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
            "name": "সম্ভাবনার সংযোগ সূত্র (যোগ বিধি)",
            "meaning": "যেকোনো দুটি ঘটনার কমপক্ষে একটি ঘটার সম্ভাবনা।",
            "whenToUse": "$A$ অথবা $B$ ঘটার সম্ভাবনা প্রশ্নে।",
            "conditions": "বর্জনশীল হলে $P(A \\cap B) = 0$ হয়।",
            "variables": "$P(A), P(B)$: ব্যক্তিগত সম্ভাবনা, $P(A \\cap B)$: যৌথ সম্ভাবনা।",
            "commonMistakes": "সাধারণ ঘটনার ক্ষেত্রে যৌথ অংশ বিয়োগ না করা।"
          },
          {
            "latex": "P(A \\cap B) = P(A) \\times P(B) \\quad (\\text{স্বাধীন ঘটনা})",
            "name": "স্বাধীন ঘটনার গুণন বিধি",
            "meaning": "একটি ঘটনার ঘটা অপরটির উপর নির্ভর না করলে।",
            "whenToUse": "মুদ্রা ও ছক্কা একসাথে নিক্ষেপ বা পৃথক ব্যক্তির লক্ষ্যভেদে।",
            "conditions": "$A$ ও $B$ পরস্পর স্বাধীন।",
            "variables": "$P(A), P(B)$: স্বাধীন সম্ভাবনা।",
            "commonMistakes": "বর্জনশীল ও স্বাধীনের মধ্যে গোলমাল করা (বর্জনশীলে গুণফল নয়, ছেদ শূন্য)।"
          },
          {
            "latex": "P(\\text{কমপক্ষে ১টি হেড}) = 1 - \\frac{1}{2^n} = \\frac{2^n - 1}{2^n}",
            "name": "মুদ্রা নিক্ষেপে কমপক্ষে একটি হেডের শর্টকাট",
            "meaning": "$n$ টি মুদ্রা নিক্ষেপে কমপক্ষে একটি হেড পাওয়ার সম্ভাবনা।",
            "whenToUse": "মুদ্রা নিক্ষেপের প্রশ্নে ৩ সেকেন্ডে উত্তর দাগাতে।",
            "conditions": "মুদ্রাটি নিরপেক্ষ হতে হবে।",
            "variables": "$n$: মুদ্রার সংখ্যা।",
            "commonMistakes": "সরাসরি অনুকূল ঘটনা একটি একটি করে গুণতে যাওয়া।"
          }
        ],
        "analysis": {
          "conditions": "পূরক ঘটনা: $P(A) + P(A') = 1 \\implies P(A') = 1 - P(A)$। \"কমপক্ষে একটি\" বলা থাকলে পূরক ঘটনা ব্যবহার করাই সবচেয়ে দ্রুততম পদ্ধতি।",
          "variations": "শর্তাধীন সম্ভাবনা (Conditional Probability): $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$।",
          "relationships": "যদি $A$ ও $B$ স্বাধীন হয়, তবে তাদের পূরক ঘটনাদ্বয় $A'$ ও $B'$ ও পরস্পর স্বাধীন: $P(A' \\cap B') = P(A')P(B') = (1 - P(A))(1 - P(B))$।",
          "transformations": "৫২ তাসের প্যাকেটে ৪টি টেক্কা, ১২টি ফেস কার্ড (রাজা, রানী, গোলাম), এবং ২৬টি লাল ও ২৬টি কালো তাস থাকে।",
          "misunderstandings": "শিক্ষার্থীরা ভাবে স্বাধীন ঘটনা মানেই বর্জনশীল—আসলে অশূন্য সম্ভাবনার দুটি ঘটনা কখনোই একসাথে স্বাধীন ও বর্জনশীল হতে পারে না!"
        },
        "questionPatterns": [
          {
            "typeTitle": "কমপক্ষে একটি ঘটার সম্ভাবনা (At Least One)",
            "recognition": "প্রশ্নে \"কমপক্ষে একটি হেড\", \"অন্তত একজন লক্ষ্যভেদ করবে\" ইত্যাদি ভাষা থাকবে।",
            "requiredConcept": "$1 - P(\\text{একটিও না})$।",
            "strategy": "১) কোনোটিই না ঘটার সম্ভাবনা বের করুন। ২) ১ থেকে বিয়োগ করুন।",
            "keySteps": [
              "পূরক ঘটনা নির্ণয়",
              "১ থেকে বিয়োগ",
              "উত্তর লেখা"
            ],
            "commonTraps": "সবগুলো আলাদা যোগ করতে গিয়ে হিসাব জটিল করা।"
          }
        ],
        "easyExample": {
          "problem": "৩টি নিরপেক্ষ মুদ্রা একসাথে নিক্ষেপ করলে কমপক্ষে একটি হেড (Head) পাওয়ার সম্ভাবনা কত?",
          "solutionSteps": [
            "এখানে মুদ্রা সংখ্যা $n = 3$।",
            "মোট সম্ভাব্য ফলাফল $2^3 = 8$ টি।",
            "শর্টকাট সূত্র: $P(\\text{কমপক্ষে ১টি হেড}) = 1 - \\frac{1}{2^n}$।",
            "মান বসিয়ে পাই: $1 - \\frac{1}{2^3} = 1 - \\frac{1}{8} = \\frac{7}{8}$।"
          ],
          "answer": "$\\frac{7}{8}$"
        },
        "examExample": {
          "examTag": "BUET / DU / GST Admission",
          "problem": "দুইজন শিকারী $A$ ও $B$ এর একটি লক্ষ্য ভেদ করার সম্ভাবনা যথাক্রমে $\\frac{2}{3}$ এবং $\\frac{3}{4}$। তারা উভয়ে একসাথে গুলি করলে লক্ষ্যটি ভেদ হওয়ার সম্ভাবনা কত?",
          "recognitionApproach": "উভয় শিকারীর গুলি ছোড়া স্বাধীন ঘটনা। \"লক্ষ্যটি ভেদ হওয়া\" মানে অন্তত একজন শিকারীর লক্ষ্যভেদ করা। সূত্র: $1 - P(\\text{কেউই ভেদ করতে পারল না})$।",
          "stepByStepSolution": "১) $A$ এর লক্ষ্যভেদ না করার সম্ভাবনা: $P(A') = 1 - \\frac{2}{3} = \\frac{1}{3}$।\n২) $B$ এর লক্ষ্যভেদ না করার সম্ভাবনা: $P(B') = 1 - \\frac{3}{4} = \\frac{1}{4}$।\n৩) উভয়েরই লক্ষ্যভেদ না করার সম্ভাবনা: $P(A' \\cap B') = P(A') \\times P(B') = \\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{12}$।\n৪) অতএব লক্ষ্যটি ভেদ হওয়ার সম্ভাবনা $= 1 - \\frac{1}{12} = \\frac{11}{12}$।",
          "whyItWorks": "পূরক সম্ভাবনার নিয়ম অনুসারে সকল শিকারীর ব্যর্থ হওয়ার একমাত্র ঘটনাটি বাদ দিলে অন্তত একটি সাফল্য নিশ্চিত হয়।",
          "calcAvoidanceTrick": "ব্যর্থতার গুণফল: $\\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{12}$। উত্তর: $1 - \\frac{1}{12} = \\frac{11}{12}$।"
        },
        "quickRevision": {
          "essentialFormulas": [
            "$P(A\\cup B) = P(A)+P(B)-P(A\\cap B)$",
            "স্বাধীন: $P(A\\cap B) = P(A)P(B)$",
            "কমপক্ষে ১টি: $1 - P(\\text{কেউ না})$",
            "মুদ্রায় কমপক্ষে ১ হেড: $\\frac{2^n-1}{2^n}$"
          ],
          "importantConditions": [
            "স্বাধীন হলে গুণফল, বর্জনশীল হলে যোগফল।"
          ],
          "keyObservations": [
            "সম্ভাবনার মান সর্বদা $0 \\le P \\le 1$ এর মধ্যে।"
          ],
          "recognitionTips": [
            "\"কমপক্ষে একটি\" দেখলেই ১ থেকে কেউই না বিয়োগ করো।"
          ],
          "commonMistakes": [
            "স্বাধীন ও বর্জনশীলের শর্ত উল্টে ফেলা।"
          ],
          "summary": "স্বাধীন ঘটনায় গুণফল। কমপক্ষে একটিতে $1 - P(\\text{ব্যর্থ})$। মুদ্রায় $\\frac{2^n-1}{2^n}$।"
        }
      }
    ],
    "questionTypes": [
      {
        "typeId": "T-01",
        "title": "বিস্তার পরিমাপ — ভেদাঙ্ক ও পরিমিত ব্যবধান",
        "description": "উপাত্তের পরিবর্তন, ভেদাঙ্ক ও পরিমিত ব্যবধান নির্ণয় এবং বিভেদাঙ্ক ($CV$)।",
        "solvingStrategy": "১) যোগ/বিয়োগে SD অপরিবর্তিত থাকে। ২) স্বাভাবিক সংখ্যায় ভেদাঙ্ক $\\frac{n^2-1}{12}$।",
        "startIndex": 0,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-2652",
            "question": "$-3.5, -2, -0.5, 1, 2.5, 4$ এই উপাত্তের পরিসর- [JU '20-21]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$10.5$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$8.5$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$7.0$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "কোনটিই নয়"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": সর্বোচ্চ মান, $L = 4$; সর্বনিম্ন মান, $S = -3.5 \\therefore \\text{পরিসর } L - S = 4 - (-3.5) = 7.5$",
            "university": "JU",
            "year": "20-21",
            "topic": "T-01: পরিসর ও পরিসরাঙ্ক নির্ণয়"
          },
          {
            "id": "math-q-2653",
            "question": "একজন ব্যাটসম্যান 26 রান করায় তার ব্যাটিং গড় 15 থেকে বেড়ে 16 হল। কত রান করলে তার ব্যাটিং গড় 20 হতো? [KU'18-19]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "46"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "50"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "70"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "90"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": $15 = \\frac{x}{n} \\Rightarrow x = 15n$\r\n\r\n$16 = \\frac{x + 26}{n+1} \\Rightarrow 16n + 16 = 15n + 26$\r\n\r\n$\\therefore n = 10 \\therefore x = 15 \\times 10 = 150$\r\n\r\n$\\therefore 20 = \\frac{150 + P}{11} ; P = 70$",
            "university": "KU",
            "year": "18-19",
            "topic": "T-02: গড়, মধ্যমা, প্রচুরক"
          },
          {
            "id": "math-q-2654",
            "question": "$4, 2, 5, 7$ সংখ্যাসমূহের জ্যামিতিক গড় কত? [CU'18-19]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "9"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "12"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "8"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\sqrt[4]{280}$"
              }
            ],
            "answer": "a",
            "explanation": "",
            "university": "CU",
            "year": "18-19",
            "topic": "T-02: গড়, মধ্যমা, প্রচুরক"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-2655",
            "question": "$2, 7, 10, 5$ সংখ্যাগুলোর মধ্যমা কোনটি? [JU'17-18]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "5"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "2"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "6"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "4"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": মধ্যমা = $\\frac{5+7}{2} = 6$",
            "university": "JU",
            "year": "17-18",
            "topic": "T-02: গড়, মধ্যমা, প্রচুরক",
            "isMixed": true
          }
        ]
      },
      {
        "typeId": "T-02",
        "title": "সম্ভাবনা — মুদ্রা, ছক্কা ও স্বাধীন ঘটনা",
        "description": "মুদ্রা ও ছক্কার ফলাফল, কমপক্ষে একটি ঘটার সম্ভাবনা এবং স্বাধীন ঘটনা।",
        "solvingStrategy": "১) \"কমপক্ষে একটি\" দেখলেই $1 - P(\\text{ব্যর্থ})$ প্রয়োগ করুন। ২) মুদ্রায় $\\frac{2^n-1}{2^n}$ নিন।",
        "startIndex": 5,
        "count": 3,
        "representativeQuestions": [
          {
            "id": "math-q-2657",
            "question": "$3, 4$ ও $5$ এই তিনটি সংখ্যার গড় ব্যবধান কোনটি? [JU'19-20]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$4$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$1$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\frac{2}{3}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\frac{4}{9}$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n$: $\\bar{x} = 4$$\n $\\therefore \\text{গড় ব্যবধান} = \\frac{|3-4| + |4-4| + |5-4|}{3} = \\frac{2}{3}$",
            "university": "JU",
            "year": "19-20",
            "topic": "T-03: গড় ব্যবধান ও গড় ব্যবধানাঙ্ক নির্ণয়"
          },
          {
            "id": "math-q-2658",
            "question": "$2, 3, 3, 4$ তথ্য সারির গড় ব্যবধান কোনটি? [JU'19-20]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$2$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$0.5$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$0.6$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$1$"
              }
            ],
            "answer": "a",
            "explanation": "\\text{Sol}^n$: $\\bar{x} = \\frac{2+3+3+4}{4} = 3$$\n $\\therefore \\text{গড় ব্যবধান} = \\frac{|3-2| + |3-3| + |3-3| + |3-4|}{4} = \\frac{2}{4} = 0.5$",
            "university": "JU",
            "year": "19-20",
            "topic": "T-03: গড় ব্যবধান ও গড় ব্যবধানাঙ্ক নির্ণয়"
          },
          {
            "id": "math-q-2659",
            "question": "$6, 5, 3, 2$ সংখ্যাগুলোর পরিমিত ব্যবধান কত? [CU '22-23]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$\\sqrt{2.5}$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$2.5$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\sqrt{5}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$4$"
              }
            ],
            "answer": "a",
            "explanation": "",
            "university": "CU",
            "year": "22-23",
            "topic": "T-04: ভেদাঙ্ক, পরিমিত ব্যবধান ও বিভেদাঙ্ক"
          }
        ],
        "mixedQuestions": [
          {
            "id": "math-q-2660",
            "question": "$10, 8, 11, 9, 12, 29, 27$ সংখ্যাগুলোর ভেদাঙ্ক কত? [Agri '20-21]",
            "options": [
              {
                "id": "option-a",
                "label": "a",
                "content": "$10$"
              },
              {
                "id": "option-b",
                "label": "b",
                "content": "$2$"
              },
              {
                "id": "option-c",
                "label": "c",
                "content": "$\\sqrt{2}$"
              },
              {
                "id": "option-d",
                "label": "d",
                "content": "$\\sqrt{10}$ \\quad (⊗)"
              }
            ],
            "answer": "a",
            "explanation": "Sol\": $\\sum x^2 = 2080$; $\\sum x = 106$\r\n$\\therefore \\sigma^2 = \\frac{\\sum x^2}{n} - \\left(\\frac{\\sum x}{n}\\right)^2 = \\frac{2080}{7} - \\left(\\frac{106}{7}\\right)^2 = 67.84$",
            "university": "Agri",
            "year": "20-21",
            "topic": "T-04: ভেদাঙ্ক, পরিমিত ব্যবধান ও বিভেদাঙ্ক",
            "isMixed": true
          }
        ]
      }
    ],
    "aiSuggestions": [
      {
        "title": "প্রথম $n$ স্বাভাবিক সংখ্যার ভেদাঙ্ক $\\frac{n^2-1}{12}$ এর প্রমাণ",
        "description": "বর্গের সমষ্টি $\\sum n^2$ ও গড়ের বর্গ থেকে সূত্রটির সুন্দর বীজগণিতীয় প্রতিপাদন।",
        "promptQuery": "প্রথম $n$ সংখ্যক স্বাভাবিক সংখ্যার ভেদাঙ্ক $\\sigma^2 = \\frac{n^2-1}{12}$ সূত্রটি ধাপে ধাপে প্রমাণ করো।"
      },
      {
        "title": "স্বাধীন ঘটনা বনাম বর্জনশীল ঘটনার দার্শনিক ও গাণিতিক পার্থক্য",
        "description": "কেন অশূন্য সম্ভাবনার দুটি ঘটনা কখনোই একসাথে স্বাধীন ও বর্জনশীল হতে পারে না?",
        "promptQuery": "স্বাধীন ঘটনা (Independent) এবং বর্জনশীল ঘটনার (Mutually Exclusive) মধ্যকার পার্থক্য ভেনচিত্রের সাহায্যে বুঝিয়ে দাও।"
      },
      {
        "title": "দুটি ছক্কা নিক্ষেপের সম্ভাব্যতা পিরামিড",
        "description": "সমষ্টি ২ থেকে ১২ পর্যন্ত ফলাফলের সিমেট্রি ও দ্রুত গণনা কৌশল।",
        "promptQuery": "দুটি ছক্কা একসাথে নিক্ষেপ করলে সমষ্টি ২ থেকে ১২ হওয়ার সম্ভাবনার ছক ও শর্টকাট পিরামিড ট্রিক ব্যাখ্যা করো।"
      },
      {
        "title": "শর্তাধীন সম্ভাবনা ও বেইজের উপপাদ্য (Bayes' Theorem)",
        "description": "মেডিকেল ডায়াগনস্টিক টেস্ট ও ফলস পজিটিভ অনুমানে বেইজের উপপাদ্যের ম্যাজিক।",
        "promptQuery": "শর্তাধীন সম্ভাবনা এবং বেইজের উপপাদ্যের মূল ধারণা বাস্তব উদাহরণসহ সহজ বাংলায় বুঝিয়ে দাও।"
      },
      {
        "title": "সম্ভাবনা অধ্যায়ের শীর্ষ ৩টি ভর্তি পরীক্ষা ফাঁদ",
        "description": "পুনঃস্থাপন সহ বনাম পুনঃস্থাপন ছাড়া (With vs Without Replacement) বল তোলার ভুল।",
        "promptQuery": "সম্ভাবনা অধ্যায়ে ভর্তি পরীক্ষায় সবচেয়ে বেশি ভুল হওয়া ৩টি প্রশ্ন ও কনসেপচুয়াল ফাঁদ বিশ্লেষণ করো।"
      }
    ],
    "questionCount": 88
  }
]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MATH_CONCEPT_DATA;
}
if (typeof window !== 'undefined') {
  window.MATH_CONCEPT_DATA = MATH_CONCEPT_DATA;
}
