<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class addUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:add-user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creating a new user';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        

        $name = $this->ask('What is your name?');
        $email = $this->ask('What is your email?');
        $password = $this->secret('What is your password?');

        User::create([
            'name' => $name,
            'email' => $email,
            'password' => bcrypt($password),
        ]);

        $this->info('User created successfully');






    }
}
