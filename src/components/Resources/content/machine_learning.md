# Finding the Learning in Machine Learning

*A journey into understanding not just what to learn in machine learning, but how to learn it.*

**By Athul Anoop, CS'27**

# Where to Begin?

This piece is intended to be a window into not just the **where** or **what**, but most importantly the **how** — how you can explore machine learning and, in a broader sense, anything that you're curious about.

The resources and domains mentioned here are merely directional and are not intended to be authoritative sources—mostly because I, too, am in the process of exploring this vast field, and it would be careless to view this article in isolation.

Most resources tend to start off with libraries such as **PyTorch** or **TensorFlow**. While these are incredibly useful tools, starting here can create the illusion of understanding machine learning.

What has really happened is that you have become familiar with the API of a particular library, along with a rough understanding of the general process or template for building and training models.

That is useful, but it does not necessarily equip you with the knowledge required to design your own machine learning architectures, models, or systems.

That brings me to what I believe is the more important question:

> **Do you want to use machine learning to build things, or do you want to build the machine learning systems themselves?**

Depending on how you answer this, there are two broad approaches you could take.

The first is the **application-oriented approach**, which is primarily concerned with using existing machine learning techniques and tools to solve problems.

The second is the **fundamental approach**, which is geared towards understanding the underlying principles of machine learning and its intricacies from the ground up.

This article will focus on the latter.

The application-oriented approach is much more dependent on the application domain, where the nature of the problem, available data, constraints, evaluation criteria, and existing tools can introduce a large number of variables.

Understanding the fundamentals, however, gives you a foundation from which those applications can be approached more deliberately.

I will be attaching links to resources along with a few footnotes towards the end of this article, so make sure to glance over those when you're done reading.

# The Three Musketeers

Before stepping into how you can get started with learning machine learning, it is important to distinguish between three closely related terms that are often used interchangeably:

* Artificial Intelligence (AI)
* Machine Learning (ML)
* Deep Learning (DL)

## Artificial Intelligence

Let's start with **Artificial Intelligence (AI)**.

AI is the broadest of the three, concerned with building systems capable of performing tasks that we associate with aspects of intelligence, such as:

* Reasoning
* Perception
* Planning
* Decision-making
* Language understanding

Machine learning is one of the approaches used to achieve this.

## Machine Learning

**Machine Learning (ML)** is a subfield of AI in which systems learn patterns, relationships, or decision functions from data or experience rather than having every rule explicitly programmed.

There are many approaches to machine learning, ranging from traditional statistical and algorithmic methods to neural networks.

## Deep Learning

**Deep Learning (DL)** is, in turn, a subfield of machine learning that primarily uses neural networks with multiple layers to learn increasingly complex representations from data.

The name **"Deep" learning** comes from the use of multiple layers of neurons, which results in a sense of depth in the neural network.

These layers allow neural networks to capture features at varying levels of detail and learn suitable representations between the inputs and outputs.

Examples of deep learning architectures include:

* Convolutional Neural Networks (CNNs)
* Recurrent Neural Networks (RNNs)
* Transformers

Generative Adversarial Networks (GANs) are another framework built on such architectures and developed for different classes of problems.

A general theme is that a problem can be framed at an abstract level as an AI problem and then narrowed down into a machine learning or deep learning problem by constraining it and approaching it in different ways.

# Know Your Neighbors

Now that we have a clear idea of what machine learning is, we can get around to learning machine learning.

When starting out, it may seem unreachable due to the sheer vastness of the concepts you need to understand.

The good news is that you can start with a few fundamental concepts and progressively build towards a fuller understanding over time.

While we'll be taking a look at machine learning specifically, a first step to learning anything is to know the lay of the land and develop an understanding of the domain and related areas at a surface level.

Machine learning itself is a combination of several different areas of study, including:

* Linear Algebra
* Calculus
* Statistics
* Probability
* Information Theory

As a prerequisite, it would be helpful to have a good understanding of linear algebra and calculus.

Some non-exhaustive fundamental concepts include:

* Matrices
* Vectors
* Eigenvectors and eigenvalues
* Singular Value Decomposition
* Gradients
* Differentiability

These concepts will let you learn machine learning without having to guess or gloss over important ideas.

For example, to understand the utility of certain loss functions or activation functions, it is useful to understand differentiability and how it translates to the mathematical feasibility of performing backpropagation.

Another example is understanding the need for bias and an activation function in a neuron.

The mathematical model of a neuron is often represented in terms of:

* Weights
* Biases
* An activation function

Inputs to the neuron are multiplied by weights, biases are added to the result, and the final value is processed by an activation function before being passed to the next neuron.

The need for weights is clear — they determine the impact or influence of each input feature.

But what about the bias and activation function?

The purpose becomes clearer when you understand the mathematical consequences:

* **Bias shifts the activation threshold.**
* **The activation function introduces non-linearity.**

Without non-linearity, even a deep stack of layers collapses into a linear mapping.

**TL;DR: Mathematics is your best friend, and it will haunt you for eternity. ;)**

# Finding Nemo Learning

There are several different paradigms for machine learning:

* Supervised learning
* Semi-supervised learning
* Unsupervised learning
* Self-supervised learning
* Reinforcement learning

Regardless of which paradigm is used, there are some common ideas that need to be cemented.

We discuss these ideas below, along with pointers to resources you can use to develop a better understanding.

# Data! Data! Data!

## Garbage In, Garbage Out

This single phrase underpins almost the entirety of machine learning.

The quality of the data used to train a model strongly influences the quality of the model and its outputs.

There is no way around this.

As such, studying the data, cleaning it, and identifying the most relevant attributes holds utmost importance.

While we're on the subject of data, it is worth discussing some important practices surrounding it.

Many of these concepts and practices are part of the broader **Machine Learning Development Life Cycle**, or the **ML lifecycle**.

## Sourcing Data

First, we need to source the data.

If you're working on problems that have been studied for a considerable amount of time, then you may be in luck. Platforms like [Kaggle](https://www.kaggle.com/) often provide a wide range of datasets with different characteristics.

On the other hand, if you are looking at a fairly novel problem, you may have to:

* Collect data yourself
* Aggregate information from existing datasets
* Build your own dataset

All this being said, the perfect dataset does not exist, and you will often find yourself in a continuous pursuit of better data.

## Cleaning and Understanding Data

Once you have some data, the problem shifts to quality control.

You need to clean and process the data so that it becomes useful for training.

This is often accompanied by **Exploratory Data Analysis (EDA)** in order to identify:

* Outliers
* Redundancies
* Missing data
* Inconsistent scaling

EDA provides the metadata and analysis necessary to preprocess the data and turn it into something much more valuable: **information**.

The process of acting on the analysis from EDA and extracting useful information from the data is often referred to as **feature engineering**.

It may now be clear that, more than anything, much of the time and effort in developing a machine learning system goes into:

* Acquiring data
* Processing data
* Cleaning data
* Extracting useful information from data

# The Machine

Now that we have some idea of the landscape surrounding machine learning, let's take a closer look at the machine itself.

There are a lot of moving parts involved in training a model, but most of them can be understood by following a simple question:

> **How does the machine actually learn?**

# The Model

At its core, a machine learning model is a function that takes some input and produces an output.

In mathematical terms, we can loosely represent this as:

```text
ŷ = fθ(x)
```

Where:

* `x` is the input
* `ŷ` is the prediction
* `θ` represents the parameters of the model

In a neural network, these parameters primarily consist of weights and biases.

The architecture of the model determines how these parameters are arranged and how information flows through them.

The machine doesn't inherently understand the information we give it.

Images, text, audio, and other forms of real-world information need to be represented in a mathematical form that the model can work with.

This is where concepts such as:

* Feature engineering
* Encoding
* Normalization
* Learned representations
* Embeddings

come into play.

# The Forward Pass

Once the input has been represented appropriately, it can be passed through the model to produce a prediction.

In a simple neuron, this might look something like:

```text
z = Wx + b
a = σ(z)
```

Where:

* `W` represents the weights
* `x` is the input
* `b` is the bias
* `σ` is the activation function
* `a` is the output

A neural network essentially performs these transformations repeatedly across its layers.

This process of taking an input through the model to produce an output is called the **forward pass**.

But producing a prediction isn't learning.

We also need some way of determining how good that prediction was.

# Knowing When It's Wrong

This is where the **loss function** comes in.

A loss function measures the discrepancy between the model's prediction and the desired output:

```text
L(y, ŷ)
```

The choice of loss depends on the problem being solved.

Predicting a continuous value, determining which of several classes an input belongs to, and generating a sequence of tokens are fundamentally different tasks.

Therefore, they require different ways of measuring error.

At this point, we have:

* A prediction
* A way to measure how wrong that prediction was

But there is still one important question:

> **What should the machine change to become less wrong?**

# The Learning

This is where the mathematics we encountered earlier starts to become useful.

The model contains parameters, and changing those parameters changes its predictions.

We therefore want to know how sensitive the loss is to each parameter.

This is expressed through gradients such as:

```text
∂L / ∂θ
```

Gradients tell us the direction and magnitude in which a parameter influences the loss.

**Backpropagation** is the procedure used to efficiently calculate these gradients throughout a neural network.

An optimizer then uses these gradients to update the model's parameters.

The **learning rate** controls the size of those updates.

A simplified gradient descent update looks like:

```text
θ(t+1) = θ(t) − η∇θL
```

Where:

* `θ` represents the parameters
* `η` is the learning rate
* `∇θL` is the gradient of the loss with respect to the parameters

And this is, in essence, where the learning happens.

The model repeatedly adjusts its parameters based on the errors it makes.

# The Loop

Put everything together and the process becomes surprisingly simple:

1. Feed data into the model.
2. Perform a forward pass.
3. Generate a prediction.
4. Calculate the loss.
5. Compute gradients using backpropagation.
6. Update the model parameters.
7. Repeat.

This process is repeated over many batches and epochs until the model has, hopefully, learned a useful mapping between its inputs and outputs.

The complexity of modern machine learning largely comes from:

* Models
* Data
* Objectives
* Optimization procedures

—not from this fundamental learning loop itself.

Of course, minimizing the loss on the data we trained on is not enough.

A model that simply memorizes its training data has not necessarily learned anything useful.

What we ultimately care about is **generalization**:

> How well does the model perform on data it has not seen before?

This is where concepts such as:

* Train sets
* Validation sets
* Test sets
* Accuracy
* Precision
* Recall
* F1-score
* Overfitting
* Underfitting

enter the picture.

Even the choice of metric depends on the problem domain.

There is no universally meaningful definition of a **"good" model**.

# Footnotes and The End?

As we come to the end of this short article, I'd like to leave you with an idea and a few resources that should help you get started.

# Occam's Razor

> **Entities should not be multiplied beyond necessity.**

In the context of machine learning, Occam's Razor implies that the less complex an ML model is, the more likely that a good empirical result is not simply due to the peculiarities of a particular sample.

This idea helps discern between two seemingly intelligent systems.

It is often the case that a simpler model has learned well as opposed to a more complicated model that may simply be memorizing noise.

Occam's Razor holds true for the process of learning machine learning—or any other area of interest—as well.

A simple approach to learning can take you a long way ahead.

# Resources

## Roadmaps

[i.am.ai Roadmap](https://i.am.ai/roadmap)

This website provides useful roadmaps for:

* Machine Learning
* Artificial Intelligence
* Data Science

## Google Machine Learning Courses

[Google Machine Learning](https://developers.google.com/machine-learning)

Google provides foundational courses on machine learning.

I had started out with their foundational courses before venturing into reading research papers and learning advanced concepts.

## Research Papers

[Papers with Code](https://paperswithcode.com/)

If you're interested in understanding machine learning straight from the source, reading research papers can be extremely useful.

However, papers can sometimes be heavy and dense.

Papers with Code is a great place to explore research papers and implementations without immediately feeling overwhelmed.

## YouTube Resources

YouTube continues to be one of the best places to learn almost anything, and machine learning is no different.

### CampusX

[CampusX](https://www.youtube.com/c/CampusX-official)

CampusX has playlists focused on different domains within AI and machine learning.

### Machine Learning Playlist

A large portion of my knowledge and understanding in machine learning came from this playlist:

[Machine Learning Playlist](https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH)

### Deep Learning Explained

[Deep Learning Explained](https://www.youtube.com/@deeplearningexplained)

This is another excellent channel covering interesting deep learning concepts and research papers.

The videos are particularly useful if you enjoy long-form explanations that go into detail from a mathematical perspective.

### Andrej Karpathy

[Neural Networks Playlist by Andrej Karpathy](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ)

This playlist covers:

* Neural networks
* Backpropagation
* Foundational deep learning concepts

with clear explanations.

# Datasets

You can find datasets for a wide range of problems on:

* [Kaggle](https://www.kaggle.com/)
* [Hugging Face](https://huggingface.co/)

# Additional Resources

While researching for this article, I came across a few additional resources that may be useful, although I haven't had the chance to explore them thoroughly.

* [OpenML](https://www.openml.org/)
* [TensorFlow Embedding Projector](https://projector.tensorflow.org/)

The TensorFlow Embedding Projector has interesting visualizations of embeddings that can help you understand how data behaves when represented in different forms.

# Final Thoughts

Machine learning is a vast field, and trying to understand everything at once can feel overwhelming.

Start simple.

Understand the mathematics.

Understand the data.

Understand how a model makes predictions.

Understand how it measures error.

And finally, understand how it learns from those errors.

The goal is not to memorize every library, architecture, or algorithm.

The goal is to develop enough curiosity and understanding that, when you encounter something new, you know **how to explore it**.

After all, finding the learning in machine learning might just be about finding your own way of learning.
