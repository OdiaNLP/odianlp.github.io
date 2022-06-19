# Build an OCR from scratch

Your goal is to build an Optical Character Recognition system using a small Convolutional Neural Network. In the demo session, you saw a simple example of digit recognition, and in this mini-project extend it to a full character set. 

## Problem 

Use a publicly available database. There is one for Malayalam available at https://gitlab.com/space-kerala/lekha-OCR-database/-/tree/master/train_images. You can remove the numbers and punctuation symbols from the data. If you find one for Oriya, you may prefer that.  


Your task is to come up with an architecture that recognizes the character in a given input. Here are the design choices that you have:

* Data preprocessing and preparation (What do you need to do to the data before a CNN can operate on them?)
* Architecture of the network. (What should be size of each layer of the network? What additional tricks are needed to make this work?)
* Training process, and its hyperparameters. (What optimizer, learning rate work well). 

You can implement all the components using the PyTorch ecosystem i.e., `torch`, `torchvision`, and Scientific Python (`numpy`, `scipy`, `sklearn`). 


This will help you acclimatize to the all steps of the process of deep learning. 
