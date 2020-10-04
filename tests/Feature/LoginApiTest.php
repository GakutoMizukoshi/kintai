<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\User;

class LoginApiTest extends TestCase
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
    public function test_登録済みのユーザーを認証して返却()
    {
        // ログイン
        $response = $this->json('POST', route('login'), [
            'email' => $this->user->email,
            'password' => 'password',
        ]);

        // ステータスとJSONの宣言
        $response
            ->assertStatus(200)
            ->assertJson(['name' => $this->user->name]);

        // 認証を宣言
        $this->assertAuthenticatedAs($this->user);
    }
}
