<template>
  <transition name="sidebar-slide">
    <!-- SIDEBAR NAVIGATION MENU -->
    <aside class="sidebar" v-if="getShowSidebarStatus">
      <!-- SIDEBAR MENU ITEM -->
      <div class="sidebar__menu">
        <!-- <label class="sidebar__menu__headline">Home</label> -->

        <label class="sidebar__menu__headline">Main Menu</label>
        <ul class="sidebar__menu__item">
          <li @click="setSidebarVisibility">
            <router-link to="/dashboard" class="item__link">
              <font-awesome-icon
                icon="tachometer-alt"
                size="sm"
                class="icon"
              />Dashboard
            </router-link>
          </li>
         <li @click="setSidebarVisibility">
            <router-link to="/parts-registration-unit" class="item__link">
              <font-awesome-icon
                icon="cubes"
                size="sm"
                class="icon"
              />Parts
            </router-link>
          </li>
           <li @click="setSidebarVisibility">
            <router-link to="/ecas_list" class="item__link">
              <font-awesome-icon
                icon="newspaper"
                size="sm"
                class="icon"
              />ECAS List
            </router-link>
          </li>
           <li @click="setSidebarVisibility">
            <router-link to="/process" class="item__link">
              <font-awesome-icon
                icon="project-diagram"
                size="sm"
                class="icon"
              />Process
            </router-link>
          </li>
           <li @click="setSidebarVisibility">
            <router-link to="/simultaneous" class="item__link">
              <font-awesome-icon
                icon="sync-alt"
                size="sm"
                class="icon"
              />Simultaneous
            </router-link>
          </li>
           <li @click="setSidebarVisibility">
            <router-link to="/unit_rev" class="item__link">
              <font-awesome-icon
                icon="arrow-circle-up"
                size="sm"
                class="icon"
              />Unit Rev
            </router-link>
          </li>
           <li @click="setSidebarVisibility">
            <router-link to="/vps_application" class="item__link">
              <font-awesome-icon
                icon="toolbox"
                size="sm"
                class="icon"
              />VPS Application
            </router-link>
          </li>
           <li @click="setSidebarVisibility">
            <router-link to="/eco_action_items" class="item__link">
              <font-awesome-icon
                icon="info"
                size="sm"
                class="icon"
              />ECO Action Items
            </router-link>
          </li>
           <li @click="setSidebarSubMenuVisibility">
            <font-awesome-icon
                icon="tools"
                size="sm"
                class="icon"
              />Management
            <font-awesome-icon
              icon="angle-right"
              size="sm"
              class="icon anchor"
              pull="right"
              :class="{ 'anchor--down': getShowSidebarSubMenuStatus }"
            />
            <transition name="sidebar-sub-slide">
              <ul class="sidebar__submenu" v-if="getShowSidebarSubMenuStatus">
                <li @click="setSidebarVisibility">
                  <router-link to="/management_parts" class="item__link">
                    <a>
                      <font-awesome-icon
                        icon="cubes"
                        size="sm"
                        class="icon"
                      />
                      Parts
                    </a>
                  </router-link>
                </li>
                <li @click="setSidebarVisibility">
                  <router-link to="/management_users" class="item__link">
                    <a>
                      <font-awesome-icon
                        icon="users"
                        size="sm"
                        class="icon"
                      />
                      Users
                    </a>
                  </router-link>
                </li>
                <li @click="setSidebarVisibility">
                  <router-link to="/management_email" class="item__link">
                    <a>
                      <font-awesome-icon
                        icon="envelope"
                        size="sm"
                        class="icon"
                      />
                      Email
                    </a>
                  </router-link>
                </li>
              </ul>
            </transition>
          </li>
           <!-- <li @click="setSidebarVisibility">
            <router-link to="/management" class="item__link">
              <font-awesome-icon
                icon="tools"
                size="sm"
                class="icon"
              />Management
            </router-link>
          </li> -->
        </ul>

        <label class="sidebar__menu__headline">Reports</label>

        <label class="sidebar__menu__headline">About</label>
      </div>
    </aside>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TheSidebar",
  methods: {
    ...mapActions(["setSidebarVisibility", "setSidebarSubMenuVisibility"]),
  },
  computed: {
    ...mapGetters(["getShowSidebarStatus", "getShowSidebarSubMenuStatus"]),
  },
};
</script>

<style lang="scss">
@import "../assets/sass/alpha/sidebar.scss";
</style>
