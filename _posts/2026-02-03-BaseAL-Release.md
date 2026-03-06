---
layout: post
title: BaseAL Release
date: 2026-02-03 12:00:00
description: An Active Learning Evaluation Framework
tags: 
categories: Projects
---

The first release of [BaseAL](https://github.com/BenMcEwen1/BaseAL) is now available 🎉

BaseAL is an evaluation framework for active learning (AL) methods which allows you to easily compare sampling approaches and explore the embeddings-space during training.

BaseAL will be used in the upcoming BioDCASE *Active Learning for Bioacoustics* data challenge

## Data Exploration
Built into BaseAL is a 3D pointmap visalisations tool for exploring the embedding-space of the model during AL cycles. You can visualise embedding clusters and utility scores, play-back audio and view spectrograms and you can see the embedding-space update in real-time during AL cycles. 

<img src="/assets/img/demo.gif" style="max-width: 100%; height: auto;">

## Evaluation
BaseAL allows you to:
- Run parallel evaluation of sampling methods (acquistion functions).
- Easily run multiple configurations i.e. AL sampling hyperparameters (batch size) etc. 
- View and export metrics across AL cycles. Current metrics include: mAP, F1, accuracy and reliability.
- Repeat runs in parallel to compute mean performance and variability.

## What BaseAL is *not*
1. BaseAL is *not an annotation tool*. This is an evaluation framework which applies oracle labelling to already labelled data. The web app is for data exploration and visuallising tests. You are welcome to adapt the API and interface to suit your needs.
2. BaseAL is *not a comprehensive library of AL methods*. Again, this is an evaluation framework, the methods you decide to implement and test are up to you. If you are interested in a library for AL methods, check out [scikit-activeml](https://github.com/scikit-activeml/scikit-activeml) which include over 60 sampling methods. scikit-activeml methods can easily be integrated into BaseAL.

If you have questions or feedback about this work then get in [contact](mailto:benmcewen@outlook.com).

<!-- From Uiverse.io by Prince4fff - Doesn't render in preview --> 
<div class="paper-card">
   <a class="card1" href="https://github.com/BenMcEwen1/BaseAL">
    <p class="small">Check out the repository here</p>
    <p>BaseAL - Active Learning Evaluation Framework</p>
    <div class="go-corner" href="https://github.com/BenMcEwen1/BaseAL">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
</div>