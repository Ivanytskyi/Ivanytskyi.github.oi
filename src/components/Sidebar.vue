<template>
  <div class="sidebar-wrap w-100">
    <div class="sidebar-avatar mt-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        fill="currentColor"
        class="bi bi-person-circle"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </svg>
    </div>
    <div class="sidebar-links">
      <ul class="sidebar-links-wrap p-0">
        <li>
          <router-link to="#">
            ПРИХОД
          </router-link>
        </li>
        <li>
          <router-link to="#">
            ГРУППЫ
          </router-link>
        </li>
        <li>
          <router-link to="/products">
            ПРОДУКТЫ
          </router-link>
        </li>
        <li>
          <router-link to="#">
            ПОЛЬЗОВАТЕЛИ
          </router-link>
        </li>
        <li>
          <router-link to="#">
            НАСТРОЙКИ
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.sidebar-links-wrap {
  list-style-type: none;
}

.sidebar-links-wrap li {
  margin-top: 20px;
}
</style>