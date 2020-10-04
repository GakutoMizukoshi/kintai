<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;

class LogoutApiTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        // テストユーザー作成 factory参照
        $this->user = factory(User::class)->create();
   }

   /**
     * @test
     */
    public function test_認証済みのユーザーをログアウト()
    {
        // ユーザを認証済にしてして、logout実行
        $response = $this->actingAs($this->user)
                         ->json('POST', route('logout'));

        $response->assertStatus(200);

        // 認証されていないことを宣言
        $this->assertGuest();
    }
}
