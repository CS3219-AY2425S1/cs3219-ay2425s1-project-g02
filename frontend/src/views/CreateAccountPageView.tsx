import React, { useState } from "react";
import "@/css/styles.css";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CreateAccountPage: React.FC = () => {
	return (
		<main className="create-account-page">
			<div className="page-background">
				<div className="center-container">
                <Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Create an account</CardTitle>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="email">Email</Label>
							<Input id="email" placeholder="name@example.com" />
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="password">Password</Label>
							<Input id="password" type="password" placeholder="Password"/>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-end">
				<Button>Create Account</Button>
			</CardFooter>
		</Card>
				</div>
			</div>
		</main>
	);
};

export default CreateAccountPage;
