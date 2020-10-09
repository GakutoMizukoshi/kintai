<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;

class UserApiTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        // テストユーザー作成
        $this->user = factory(User::class)->create();
    }

    /**
    * @test
    */
    public function test_ログイン中のユーザーを返却する()
    {
        $response = $this->actingAs($this->user)->json('GET', route('user'));

        // テストユーザと同じか判定
        $response
            ->assertStatus(200)
            ->assertJson([
                'name' => $this->user->name,
            ]);
    }

    /**
    * @test
    */
    public function test_ログインされていない場合は空文字を返却する()
    {
       $response = $this->json('GET', route('user'));

       $response->assertStatus(200);
       // 空文字かどうか判定
       $this->assertEquals("", $response->content());
   }
}
