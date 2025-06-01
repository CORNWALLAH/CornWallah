
  const posts = [ , { title: "Young cousin sister full sexy sex mms (19 year old)", thumbnail: "https://www.indiansexstories2.net/videos/contents/videos_screenshots/2000/2480/390x218/3.jpg", link: "https://www.indiansexstories2.net/videos/young-cousin-sister-full-sexy-hindi-sex-mms/" },
  
  
  
  
  
  //add links here after this 



  






// do not edit after this 











];

  const postsGrid = document.getElementById('postsGrid');
  const searchInput = document.getElementById('searchInput');
  const noResults = document.getElementById('noResults');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  let currentPage = 1;
  const postsPerPage = 25;

  function renderPosts(filteredPosts, append = false) {
    if (!append) postsGrid.innerHTML = '';

    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = filteredPosts.slice(0, startIndex + postsPerPage);

    currentPosts.forEach(post => {
      const postCard = document.createElement('a');
      postCard.href = post.link;
   
      postCard.className = 'post-card';
      postCard.innerHTML = `
        <img src="${post.thumbnail}" alt="${post.title}" class="post-thumbnail" loading="lazy" />
        <div class="post-title">${post.title}</div>
      `;
      postsGrid.appendChild(postCard);
    });

    noResults.style.display = filteredPosts.length ? 'none' : 'block';
    loadMoreBtn.style.display = currentPosts.length >= filteredPosts.length ? 'none' : 'block';
  }

  function handleSearch() {
    currentPage = 1;
    const query = searchInput.value.toLowerCase().trim();
    const filtered = posts.filter(p => p.title.toLowerCase().includes(query));
    renderPosts(filtered);
  }

  searchInput.addEventListener('input', handleSearch);

  loadMoreBtn.addEventListener('click', () => {
    currentPage++;
    handleSearch();
  });

  renderPosts(posts);

