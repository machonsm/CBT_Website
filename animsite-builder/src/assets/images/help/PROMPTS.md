# Ilustracje kart „W czym pomagam”

Aktualizacja 11 września 2026: cztery okładki mają główne kolory palety strony. Edycje wykonano wbudowanym narzędziem `image_gen`, a następnie zapisano w projekcie przez bezstratną konwersję PNG do WebP (`cwebp -lossless`). Każda okładka ma jednolite tło; w CSS krawędzie obrazka łagodnie łączą się z powierzchnią karty.

Aktualne pliki: `anxiety-palette-v4.webp`, `stress-palette-v4.webp`, `mood-palette-v4.webp`, `overthinking-paper-v5.webp`, `heart-clean.webp`. Poprzednie wersje zachowano do porównania.

## Wersja 5: jasne tło ostatniej karty

Plik: `overthinking-paper-v5.webp`. Edycja `overthinking-palette-v4.webp` wbudowanym narzędziem `image_gen`, zapisana przez bezstratną konwersję PNG do WebP. Tło karty to biel z palety `#f3f4ef`, tekst, spodnie i trampki są granatowe `#211ea3`. Jasne pasma w splątanych myślach zmieniono na granat, aby zachować ich widoczność. Różowa animacja odkrywania karty pozostaje.

```text
Use case: precise-object-edit.
Asset type: square illustration for the fourth "W czym pomagam" card on the existing psychotherapy website.
Edit target: the supplied distressed man sitting beneath tangled recurring thoughts.
Make these colour changes:
1. Replace the entire navy background with a uniform solid warm paper-white #f3f4ef, including gaps within the thought cloud and between the man's limbs and stool legs. This is the exact background colour of the website card.
2. Change both trouser legs and both sneaker uppers to deep navy #211ea3. Keep fine paper-white seams where needed and paper-white sneaker soles, toe caps and laces so the shoes still read as canvas sneakers.
3. Recolour only the paper-white strands in the thought cloud to deep navy #211ea3 so those strands remain readable on the new paper-white background. Keep the pink and blue strands and orange returning arrows in their existing places.
Preserve everything else exactly: same male character, worried frowning face, blue hair, pink skin, orange sweater, blue stool, hunched posture with one hand against his temple and the other on his knee, composition, scale, density and silhouette of the thought knot, generous safe margins, same flat hand-drawn editorial style. Full figure and shoes visible. No smile, no meditation, no new objects or words, no watermark, no checkerboard, no ground shadow, no texture, no gradient.
Use only existing palette colours: navy #211ea3, blue #0085de, orange #f1562c, pink #ffcddf, paper-white #f3f4ef.
```

## Wersja 4: główne kolory palety

| Karta | Tło | Dopasowanie ilustracji |
| --- | --- | --- |
| Lęk i niepokój | Pomarańcz `#f1562c` | Różowe niebo i jasna ścieżka za błękitnymi drzwiami. |
| Stres i przeciążenie | Róż `#ffcddf` | Jasna skóra z granatowym konturem; zachowane granatowe trampki. |
| Obniżony nastrój | Błękit `#0085de` | Jasne buty odcinające się od tła. |
| Natłok myśli | Granat `#211ea3` | Jasne spodnie i buty, błękitne włosy, jasne pętle myśli. |

### anxiety-palette-v4.webp

Plik źródłowy edycji: `anxiety.webp`. Metoda: wbudowane `image_gen`.

```text
Use case: precise-object-edit.
Asset type: square cover illustration for the existing psychotherapy website.
Preserve the supplied scene, character identity and gender, facial expression, pose, proportions, composition and hand-drawn flat editorial style. Keep every figure, shoe, furniture leg and decorative element fully visible with generous clean margins. Do not add objects. No text, logo, watermark, photorealism, 3D, drop shadow, texture, gradient or checkerboard.
Use ONLY the website palette for the final image: deep ultramarine #211ea3, vivid blue #0085de, orange #f1562c, light pink #ffcddf and warm paper #f3f4ef. Flat uniform colours with clear edges and sparse navy facial lines.
Edit target: the supplied worried woman standing next to an open blue door.
BACKGROUND: replace all transparent areas with a completely SOLID flat orange #f1562c background, edge to edge, including holes and gaps.
Because this orange would merge with the orange scene inside the doorway, recolour ONLY the scenery inside the door: use a pink #ffcddf sky, a paper #f3f4ef sun, blue #0085de hills and a paper path with navy line details. Make the rectangular doorway opening completely readable against the orange card.
Keep the woman unchanged: pink skin and pink blouse, navy hair and trousers, blue shoes, worried expression and hands against chest. Keep the door blue with navy fittings and the thought scribble navy. Nothing orange inside the doorway should disappear into the outer orange background. Do not change the illustration's meaning.
```

### stress-palette-v4.webp

Plik źródłowy edycji: `stress-sneakers-v3.webp`. Metoda: wbudowane `image_gen`.

```text
Use case: precise-object-edit.
Asset type: square cover illustration for the existing psychotherapy website.
Preserve the supplied scene, character identity and gender, facial expression, pose, proportions, composition and hand-drawn flat editorial style. Keep every figure, shoe, furniture leg and decorative element fully visible with generous clean margins. Do not add objects. No text, logo, watermark, photorealism, 3D, drop shadow, texture, gradient or checkerboard.
Use ONLY the website palette for the final image: deep ultramarine #211ea3, vivid blue #0085de, orange #f1562c, light pink #ffcddf and warm paper #f3f4ef. Flat uniform colours with clear edges and sparse navy facial lines.
Edit target: the supplied short-haired bearded man, stressed at a navy desk, floating paperwork and a clock.
BACKGROUND: replace the lavender-grey background with a completely SOLID flat light pink #ffcddf background, edge to edge and in all gaps.
To contrast with the pink background, change ONLY his exposed skin (face, ears, neck, both hands/forearms and ankles) to warm paper #f3f4ef with fine navy contours and navy facial lines. Preserve the weary expression, hand on forehead, blue sweater, orange trousers, navy desk and chair, floating cream pages and clock.
Keep his recognizable navy low-top canvas SNEAKERS, with paper rubber toe caps, soles and lace lines. Preserve the same man, body proportions and posture.
```

### mood-palette-v4.webp

Plik źródłowy edycji: `mood.webp`. Metoda: wbudowane `image_gen`.

```text
Use case: precise-object-edit.
Asset type: square cover illustration for the existing psychotherapy website.
Preserve the supplied scene, character identity and gender, facial expression, pose, proportions, composition and hand-drawn flat editorial style. Keep every figure, shoe, furniture leg and decorative element fully visible with generous clean margins. Do not add objects. No text, logo, watermark, photorealism, 3D, drop shadow, texture, gradient or checkerboard.
Use ONLY the website palette for the final image: deep ultramarine #211ea3, vivid blue #0085de, orange #f1562c, light pink #ffcddf and warm paper #f3f4ef. Flat uniform colours with clear edges and sparse navy facial lines.
Edit target: the supplied downcast woman sitting on a cream stool beside a drooping orange flower.
BACKGROUND: replace all transparent areas with a completely SOLID flat vivid blue #0085de background, edge to edge.
Change BOTH blue shoes to warm paper #f3f4ef shoes with thin navy edge/seam details so they are unmistakably separate from the blue card. Preserve the shape and position of her feet.
Keep her navy hair and trousers, pink skin and blouse, cream stool, orange flower, navy stem and leaves, tired downward gaze, and slouched seated posture unchanged. Keep the complete flower and both shoes visible.
```

### overthinking-palette-v4.webp

Plik źródłowy edycji: `overthinking-male-v2.webp`. Metoda: wbudowane `image_gen`.

```text
Use case: precise-object-edit.
Asset type: square cover illustration for the existing psychotherapy website.
Preserve the supplied scene, character identity and gender, facial expression, pose, proportions, composition and hand-drawn flat editorial style. Keep every figure, shoe, furniture leg and decorative element fully visible with generous clean margins. Do not add objects. No text, logo, watermark, photorealism, 3D, drop shadow, texture, gradient or checkerboard.
Use ONLY the website palette for the final image: deep ultramarine #211ea3, vivid blue #0085de, orange #f1562c, light pink #ffcddf and warm paper #f3f4ef. Flat uniform colours with clear edges and sparse navy facial lines.
Edit target: the supplied distressed adult man sitting beneath a tangled cloud of recurring thoughts.
BACKGROUND: replace the paper background with a completely SOLID flat deep ultramarine #211ea3 background, edge to edge, including all openings within the thought loops and between legs/furniture.
For contrast against that navy background, recolour his navy trousers to paper #f3f4ef with navy seam lines, his hair to vivid blue #0085de, and his shoes to paper #f3f4ef with navy sole/seam details. Keep his orange sweater and pink skin, navy facial and hand details, vivid blue stool and the same worried male face and hunched pose.
In the thought cloud, replace all navy loops with pink #ffcddf and paper #f3f4ef loops; keep the blue loops and orange returning arrows. The cloud must remain a tangled, burdensome knot of recurring thoughts. Preserve its shape, density and scale. No smiling, meditation or peaceful pose.
```

## Wcześniejsze wersje

## Wersja 3: trampki i kontrast skóry w drugiej karcie

Plik: `stress-sneakers-v3.webp`. Edycja wykonana wbudowanym narzędziem image_gen. Tło karty `#d5d8e7` odpowiada odcieniowi przy krawędzi wygenerowanego obrazka; różową skórę odróżniają chłodne tło i delikatny granatowy kontur.

```text
Use case: precise-object-edit.
Edit target: the supplied illustration of the stressed short-haired bearded man at a navy desk.
Make only these changes:
1. Replace the entire pink background with a solid, uniform, very light cool lavender-gray #dedfeb, including all gaps between the sheets, desk and chair. His face, hands and ankles must remain clearly pink #ffcddf, visibly distinct from the cool background. Add a fine navy contour only where needed along the exposed forearm, hand and face edges to keep their silhouettes readable at small card size; match the existing thin facial line style.
2. Replace BOTH navy slipper-like shoes with recognizable low-top canvas SNEAKERS: navy uppers, cream rubber toe caps and soles, two or three cream lace lines. Preserve foot positions, believable ankle connections, and the orange trousers. No logos.
Keep absolutely everything else: same adult male with short navy hair and beard, weary worried expression, hand against forehead, other arm on desk, blue sweater, orange trousers, navy desk and chair, floating cream pages, navy clock and orange curved line. Same framing, scale, full figure, two arms and legs, flat editorial illustration style, no cropping.
Use the existing palette for all foreground elements: #211ea3 navy, #0085de blue, #f1562c orange, #ffcddf pink, #f3f4ef cream.
Background MUST be an opaque SOLID #dedfeb color field with no checkerboard, no texture, no gradient, no ground shadow. Square image, no text, no UI, no watermark.
```

## Wersja 2: postacie męskie i ruminacje

Edycje wykonano wbudowanym narzędziem image_gen. W kartach drugiej i czwartej postacie są mężczyznami. Pierwsza karta ma kremowe tło, a trzecia rozjaśniony błękit, aby elementy ilustracji nie zlewały się z powierzchnią kart.

### stress-male-v2

Docelowy plik: `stress-male-v2.webp`. Edycja odpowiedniej ilustracji z wersji 1.

```text
Use case: precise-object-edit.
Edit target: the supplied stress/overload illustration with a person seated at a navy desk.
Change the character into an adult MAN, with short navy hair, a gently angular masculine face and a small navy beard. Retain the weary stressed expression, forehead resting against one hand, other arm resting on the desk. Preserve the same blue sweater, orange trousers, navy desk and chair, the floating clock and loose sheets, the composition, scale and illustration style. Keep anatomy natural, exactly two arms, no smile.
Palette stays deep ultramarine #211ea3, blue #0085de, orange #f1562c, pink #ffcddf and paper #f3f4ef. No black.
Preserve the same simple flat hand-drawn editorial style with large organic shapes and minimal facial lines. Full artwork visible with safe margins. Square image. Keep the background genuinely transparent with alpha, no shadow or new background shapes. Do not add any text, labels, UI or watermark.
```

### overthinking-male-v2

Docelowy plik: `overthinking-male-v2.webp`. Edycja odpowiedniej ilustracji z wersji 1.

```text
Use case: precise-object-edit.
Edit target: the supplied orange-shirt character beneath loops of thoughts.
Revise the scene to clearly communicate RUMINATION and DISTRESSING REPETITIVE THOUGHTS. The character must be an adult MAN with short navy hair and simple masculine features. Replace the happy meditating cross-legged pose: he sits on a small sky-blue stool, feet on the ground, leaning forward with rounded tense shoulders, one elbow on his thigh and one hand pressing against his temple, the other hand resting on his knee. His gaze is downcast, eyebrows drawn together, mouth a small downward curve. Compassionate and dignified tired worry. NO SMILE, no peaceful closed-eye meditation, no yoga pose or lotus posture.
Above his head replace the smooth ornamental loops with one clearly tangled, knotted thought cloud of uneven navy and blue lines with one orange thread looping back into the knot, showing thoughts returning again and again. The cloud should be slightly off balance and burdensome, not a balanced halo. Keep its shape simple enough to read at 250px.
Preserve the exact flat editorial style, rounded organic cut-paper forms and sparse facial lines of the supplied illustration. Orange loose shirt, navy trousers, pink skin. Palette ONLY #211ea3 navy, #0085de blue, #f1562c orange, #ffcddf pink, #f3f4ef paper. Full man and stool visible, compact centered square composition filling 85% of canvas with safe margins. Genuinely transparent alpha background, no scenery, no ground shadow, no text, no labels, no UI or watermark. Anatomically clear two arms and two legs, natural hands.
```

### Dopasowanie tła: stress-male-v2

```text
Use case: precise-object-edit. Replace ONLY the gray checkerboard background in this image with a completely solid, flat, uniform #ffcddf color field. This is a finished illustration for a website card whose background is exactly #ffcddf. Fill all checkerboard areas, also inside holes in thought loops, between furniture legs and under the arms, with that same exact flat color. Preserve ALL foreground characters, worried facial expressions, body poses, thought-cloud/clock/papers, furniture, linework, palette, proportions and framing unchanged. Do not redraw anything. The result must have an OPAQUE SOLID #ffcddf background, absolutely NO checkerboard, NO grid, NO transparency simulation, NO texture, NO gradient, NO ground shadow. Keep the complete square image with nothing cropped.
```

### Dopasowanie tła: overthinking-male-v2

```text
Use case: precise-object-edit. Replace ONLY the gray checkerboard background in this image with a completely solid, flat, uniform #f3f4ef color field. This is a finished illustration for a website card whose background is exactly #f3f4ef. Fill all checkerboard areas, also inside holes in thought loops, between furniture legs and under the arms, with that same exact flat color. Preserve ALL foreground characters, worried facial expressions, body poses, thought-cloud/clock/papers, furniture, linework, palette, proportions and framing unchanged. Do not redraw anything. The result must have an OPAQUE SOLID #f3f4ef background, absolutely NO checkerboard, NO grid, NO transparency simulation, NO texture, NO gradient, NO ground shadow. Keep the complete square image with nothing cropped.
```

## Wspólna część promptu czterech okładek (wersja 1)

```text
Use case: illustration-story.
Asset type: standalone illustration for the cover of an interactive psychotherapy website card.
Style: bold flat editorial cut-paper illustration, playful organic hand-drawn silhouettes, contemporary Polish independent design feel. Rounded slightly irregular shapes, spare navy facial lines like a single curved eye and simple nose. Compassionate adult characters with believable arms/hands, calm expressive posture. Match a website with a long orange smiling heart, a pink brain and bright blue hands; same simple graphic language. Not corporate stock illustration, not realistic, no gradients or shadows or texture.
Palette ONLY: deep ultramarine navy #211ea3, vivid sky blue #0085de, warm vivid orange #f1562c, pink #ffcddf, off-white #f3f4ef. Never black. Large areas of solid color.
Composition: square 1024 x 1024, one clear scene with one adult character, entire figure visible, balanced centered compact composition filling 85% of canvas with breathing room on every edge. Readable at 250 pixels wide. Background truly transparent with alpha, no backdrop rectangle, no circular frame, no ground shadow. No text, letters, labels, typography, UI, logos or watermark.
```

## anxiety

Poniższy fragment został dołączony do wspólnej części promptu.

```text
Subject: anxiety and avoidance. An adult with navy bobbed hair, a pink oversized sweater, navy trousers and blue shoes pauses before a simple sky-blue open doorway. One hand rests gently over their chest, the other holds their own elbow. Slightly inward posture, concerned but dignified. A small tangled navy thought line floats above the shoulder. A warm orange small irregular shape beyond the doorway suggests everyday life. Keep doorway and person similarly prominent, with lots of transparent negative space.
```

## stress

Poniższy fragment został dołączony do wspólnej części promptu.

```text
Subject: stress and overload. An adult with navy hair, a sky-blue top and orange trousers sits at a small navy desk, resting their forehead lightly in one hand, other arm naturally on desk. Three large off-white loose sheets and a simple navy clock without numbers hover above the head like mounting demands, joined by one orange swooping curved line. Keep it minimal: expressive balanced shapes, only a few objects, no tiny details. Pink skin and calm tired expression.
```

## mood

Poniższy fragment został dołączony do wspólnej części promptu.

```text
Subject: low mood and loss of energy. An adult with navy hair in an oversized pink sweater and navy trousers sits curled gently on a low off-white stool, elbows resting on knees and hands loosely together, gaze softly downward. A small orange flower on a navy curved stem beside the stool has one gently drooping petal, echoing the person's posture. Two spare navy facial lines. Warm, humane image of tiredness, not caricature or despair. Main pink silhouette should contrast strongly on sky-blue card background.
```

## overthinking

Poniższy fragment został dołączony do wspólnej części promptu.

```text
Subject: overthinking and repeated thoughts. An adult with navy hair, an orange loose top and navy trousers sits cross-legged, one hand lightly touching their temple. Above them, three large interweaving curved loops of sky blue, navy and pink form a single loose tangled thought cloud, with a small orange dot inside it. Loops broad graphic shapes, no arrows or words. Thought cloud is prominent but separate from head; person and cloud form a single balanced composition. Kind contemplative expression and simple clean hand anatomy.
```

## Oczyszczenie serca z załącznika

```text
Use case: background-extraction.
Asset type: clean high-resolution heart symbol for an existing psychotherapy website.
Input images: the smooth high-quality tall orange smiling heart uploaded by the user is the EDIT TARGET. The lower-resolution pixelated orange heart subsequently viewed is ONLY a comparison to avoid.
Extract and preserve the user's smooth high-quality heart precisely: same very tall pointed heart silhouette, rounded long lobes, deep V top valley, orange fill, two dark curved closed eyes, long simple angular nose, slight curved smile. Keep original geometry, proportions, expression and orange color. Remove any black background outside the heart; produce actual transparent alpha around the complete heart. Keep facial lines dark. Center full heart on a square transparent canvas with 4% safe margins. Clean sharp smooth edges, 1024x1024. Do not reinterpret or redesign, no extra object, no border, no text or texture.
```
