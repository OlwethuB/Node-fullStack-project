<template>
  <div class="about">
    <h2 class="section-title">About Us</h2>
    <div class="about-content">
      <img
        src="https://i.postimg.cc/SNJ81wdG/70c2e736f7cefcaa36feaf0a91e7fe80.jpg"
        alt="About Us"
      />
      <p>
        Discover the history and passion behind our jewelry store. We are
        committed to offering the finest quality pieces and exceptional customer
        service.
      </p>
      <div class="owners">
        <div class="owner">
          <img src="https://i.postimg.cc/0Q0dxDKd/download.jpg" alt="Owner 1" />
          <h3>Liyabona Mxhalisa</h3>
          <p>Co-Founder & CEO</p>
        </div>
        <div class="owner">
          <img src="https://i.postimg.cc/0Q0dxDKd/download.jpg" alt="Owner 2" />
          <h3>Olwethu Bhiya</h3>
          <p>Co-Founder & Creative Director</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Your component options
}
</script>

<style scoped>
.about {
  padding: 4rem 0;
  text-align: center;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
}

.about-content img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.about-content p {
  font-size: 1.2rem;
  max-width: 600px;
  color: #555;
}

.owners {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.owner {
  text-align: center;
}

.owner img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.owner h3 {
  margin-top: 1rem;
  font-size: 1.5rem;
}

.owner p {
  font-size: 1.1rem;
  color: #888;
}
</style>
