<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $table = 'courses';

    protected $fillable = [
        'name',
        'certificate',
        'thumbnail',
        'type',
        'status',
        'price',
        'level',
        'description',
        'mentor_id'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:m:s',
        'updated_at' => 'datetime:Y-m-d H:m:s'
    ];

    public function mentor() {
        return $this->belongsTo(Mentor::class);
    }

    public function chapters() {
        return $this->hasMany(Chapter::class)->orderBy('id', 'ASC');
    }

    public function images() {
        return $this->hasMany(ImageCourse::class)->orderBy('id', 'DESC');
    }

    public function reviews() {
        return $this->hasMany(Review::class);
    }

    public function myCourses() {
        return $this->hasMany(MyCourse::class);
    }

    public function lessonsChapters()
    {
        return $this->hasManyThrough(Lesson::class, Chapter::class);
    }
}
