<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\UserVoucher;
use App\Http\Requests\StoreUserVoucherRequest;
use App\Http\Requests\UpdateUserVoucherRequest;

class UserVoucherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserVoucherRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(UserVoucher $userVoucher)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserVoucher $userVoucher)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserVoucherRequest $request, UserVoucher $userVoucher)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserVoucher $userVoucher)
    {
        //
    }
}
