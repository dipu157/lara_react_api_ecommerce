@extends('admin.admin_master')
@section('admin')

<div class="page-wrapper">
    <div class="page-content">

            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                <div class="col">
                    <div class="card radius-10 bg-gradient-deepblue">
                     <div class="card-body">
                        <div class="d-flex align-items-center">
                            <h5 class="mb-0 text-white">9526</h5>
                            <div class="ms-auto">
                                <i class='bx bx-cart fs-3 text-white'></i>
                            </div>
                        </div>
                        <div class="progress my-3 bg-light-transparent" style="height:3px;">
                            <div class="progress-bar bg-white" role="progressbar" style="width: 55%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="d-flex align-items-center text-white">
                            <p class="mb-0">Total Orders</p>
                            <p class="mb-0 ms-auto">+4.2%<span><i class='bx bx-up-arrow-alt'></i></span></p>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                    <div class="card radius-10 bg-gradient-orange">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <h5 class="mb-0 text-white">$8323</h5>
                            <div class="ms-auto">
                                <i class='bx bx-dollar fs-3 text-white'></i>
                            </div>
                        </div>
                        <div class="progress my-3 bg-light-transparent" style="height:3px;">
                            <div class="progress-bar bg-white" role="progressbar" style="width: 55%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="d-flex align-items-center text-white">
                            <p class="mb-0">Total Revenue</p>
                            <p class="mb-0 ms-auto">+1.2%<span><i class='bx bx-up-arrow-alt'></i></span></p>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                    <div class="card radius-10 bg-gradient-ohhappiness">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <h5 class="mb-0 text-white">6200</h5>
                            <div class="ms-auto">
                                <i class='bx bx-group fs-3 text-white'></i>
                            </div>
                        </div>
                        <div class="progress my-3 bg-light-transparent" style="height:3px;">
                            <div class="progress-bar bg-white" role="progressbar" style="width: 55%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="d-flex align-items-center text-white">
                            <p class="mb-0">Visitors</p>
                            <p class="mb-0 ms-auto">+5.2%<span><i class='bx bx-up-arrow-alt'></i></span></p>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col">
                    <div class="card radius-10 bg-gradient-ibiza">
                     <div class="card-body">
                        <div class="d-flex align-items-center">
                            <h5 class="mb-0 text-white">5630</h5>
                            <div class="ms-auto">
                                <i class='bx bx-envelope fs-3 text-white'></i>
                            </div>
                        </div>
                        <div class="progress my-3 bg-light-transparent" style="height:3px;">
                            <div class="progress-bar bg-white" role="progressbar" style="width: 55%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="d-flex align-items-center text-white">
                            <p class="mb-0">Messages</p>
                            <p class="mb-0 ms-auto">+2.2%<span><i class='bx bx-up-arrow-alt'></i></span></p>
                        </div>
                    </div>
                 </div>
                </div>
            </div><!--end row-->

             <div class="row">
                <div class="col-12 col-lg-6 col-xl-4 d-flex">
                  <div class="card radius-10 overflow-hidden w-100">
                     <div class="card-body">
                       <p>Total Earning</p>
                       <h4 class="mb-0">$287,493</h4>
                       <small>1.4% <i class="zmdi zmdi-long-arrow-up"></i> Since Last Month</small>
                       <hr>
                       <p>Total Sales</p>
                       <h4 class="mb-0">$87,493</h4>
                       <small>5.43% <i class="zmdi zmdi-long-arrow-up"></i> Since Last Month</small>
                       <div class="mt-5">
                       <div class="chart-container-4">
                         <canvas id="chart5"></canvas>
                        </div>
                      </div>
                     </div>
                  </div>
                </div>
          
                <div class="col-12 col-lg-6 col-xl-8 d-flex">
                   <div class="card radius-10 w-100">
                       <div class="card-header border-bottom bg-transparent">
                        <div class="d-flex align-items-center">
                            <div>
                                <h6 class="mb-0">Customer Review</h6>
                            </div>
                            <div class="font-22 ms-auto"><i class="bx bx-dots-horizontal-rounded"></i>
                            </div>
                        </div>
                    </div>
                     <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-transparent">
                          <div class="d-flex align-items-center">
                            <img src="{{ asset('backend/') }}/assets/images/avatars/avatar-1.png" alt="user avatar" class="rounded-circle" width="55" height="55">
                          <div class="ms-3">
                            <h6 class="mb-0">iPhone X <small class="ms-4">08.34 AM</small></h6>
                            <p class="mb-0 small-font">Sara Jhon : This is svery Nice phone in low budget.</p>
                          </div>
                          <div class="ms-auto star">
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-light-4'></i>
                            <i class='bx bxs-star text-light-4'></i>
                          </div>
                        </div>
                        </li>
                        <li class="list-group-item bg-transparent">
                          <div class="d-flex align-items-center">
                            <img src="{{ asset('backend/') }}/assets/images/avatars/avatar-2.png" alt="user avatar" class="rounded-circle" width="55" height="55">
                          <div class="ms-3">
                            <h6 class="mb-0">Air Pod <small class="ml-4">05.26 PM</small></h6>
                            <p class="mb-0 small-font">Danish Josh : The brand apple is original !</p>
                          </div>
                          <div class="ms-auto star">
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-light-4'></i>
                            <i class='bx bxs-star text-light-4'></i>
                          </div>
                        </div>
                        </li>
                        <li class="list-group-item bg-transparent">
                          <div class="d-flex align-items-center">
                            <img src="{{ asset('backend/') }}/assets/images/avatars/avatar-7.png" alt="user avatar" class="rounded-circle" width="55" height="55">
                          <div class="ms-3">
                            <h6 class="mb-0">Mackbook <small class="ml-4">08.34 AM</small></h6>
                            <p class="mb-0 small-font">Michle : The brand apple is original !</p>
                          </div>
                          <div class="ms-auto star">
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-warning'></i>
                            <i class='bx bxs-star text-light-4'></i>
                            <i class='bx bxs-star text-light-4'></i>
                          </div>
                        </div>
                        </li>
                      </ul>
                   </div>
                </div>
              </div><!--End Row-->


              <div class="card radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div>
                            <h5 class="mb-0">Orders Summary</h5>
                        </div>
                        <div class="font-22 ms-auto"><i class="bx bx-dots-horizontal-rounded"></i>
                        </div>
                    </div>
                    <hr>
                    <div class="table-responsive">
                        <table class="table align-middle mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th>Order id</th>
                                    <th>Product</th>
                                    <th>Customer</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#897656</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="recent-product-img">
                                                <img src="{{ asset('backend/') }}/assets/images/icons/chair.png" alt="">
                                            </div>
                                            <div class="ms-2">
                                                <h6 class="mb-1 font-14">Light Blue Chair</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Brooklyn Zeo</td>
                                    <td>12 Jul 2020</td>
                                    <td>$64.00</td>
                                    <td>
                                        <div class="badge rounded-pill bg-light-info text-info w-100">In Progress</div>
                                    </td>
                                    <td>
                                        <div class="d-flex order-actions">	<a href="javascript:;" class=""><i class="bx bx-cog"></i></a>
                                            <a href="javascript:;" class="ms-4"><i class="bx bx-down-arrow-alt"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#987549</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="recent-product-img">
                                                <img src="{{ asset('backend/') }}/assets/images/icons/shoes.png" alt="">
                                            </div>
                                            <div class="ms-2">
                                                <h6 class="mb-1 font-14">Green Sport Shoes</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Martin Hughes</td>
                                    <td>14 Jul 2020</td>
                                    <td>$45.00</td>
                                    <td>
                                        <div class="badge rounded-pill bg-light-success text-success w-100">Completed</div>
                                    </td>
                                    <td>
                                        <div class="d-flex order-actions">	<a href="javascript:;" class=""><i class="bx bx-cog"></i></a>
                                            <a href="javascript:;" class="ms-4"><i class="bx bx-down-arrow-alt"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

    </div>
</div>

@endsection