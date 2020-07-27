@extends('welcome')

@section('content')
	<template v-if="menu==0">
	   <landing-page></landing-page>
	</template>
	<template v-if="menu==1">
	   <contact-page></contact-page>
	</template>
	<template v-if="menu==2">
	    <about-page></about-page>
	</template>
@endsection