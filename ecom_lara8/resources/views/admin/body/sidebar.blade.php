<div class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
        <div>
            <img src="{{ asset('backend/') }}/assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
        </div>
        <div>
            <h4 class="logo-text">Easy Shop</h4>
        </div>
        <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
        </div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">
        <li>
            <a href="{{ url('/dashboard') }}">
                <div class="parent-icon"><i class='bx bx-home-circle'></i>
                </div>
                <div class="menu-title">Dashboard</div>
            </a>
        </li>
        <li>
            <a href=" {{route('all.category')}} " class="has-arrow">
                <div class="parent-icon"><i class="bx bx-category"></i>
                </div>
                <div class="menu-title">Category</div>
            </a>
            <ul>
                <li> <a href="{{route('all.category')}}"><i class="bx bx-right-arrow-alt"></i>All Category</a>
                </li>
                <li> <a href="{{route('add.category')}}"><i class="bx bx-right-arrow-alt"></i>Add Category</a>
                </li>
            </ul>
        </li>
        <li class="menu-label">UI Elements</li>
        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="parent-icon"><i class='bx bx-cart'></i>
                </div>
                <div class="menu-title">eCommerce</div>
            </a>
            <ul>
                <li> <a href="ecommerce-products.html"><i class="bx bx-right-arrow-alt"></i>Products</a>
                </li>
            </ul>
        </li>
        <li class="menu-label">Forms & Tables</li>
        <li>
            <a class="has-arrow" href="javascript:;">
                <div class="parent-icon"><i class='bx bx-message-square-edit'></i>
                </div>
                <div class="menu-title">Forms</div>
            </a>
            <ul>
                <li> <a href="form-elements.html"><i class="bx bx-right-arrow-alt"></i>Form Elements</a>
                </li>
            </ul>
        </li>
    </ul>
    <!--end navigation-->
</div>