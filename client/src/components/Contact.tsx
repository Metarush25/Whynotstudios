import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Instagram, Twitter, Youtube, Smile } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Wait... is that it?",
      description: "Just kidding. Message sent! We'll talk soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-background border-t-8 border-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="mb-12">
              <h3 className="text-6xl font-heading text-primary leading-[0.9] lowercase">
                shoot us a <span className="text-primary/80 italic">signal.</span>
              </h3>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary flex items-center justify-center text-background shrink-0">
                  <Smile className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-heading font-bold text-primary mb-1 italic tracking-tighter">Visit the Lab</h4>
                  <p className="text-primary/60 font-medium">99 Chaos Alley, Unit 7<br />Brooklyn, NY 11201</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center text-background shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-heading font-bold text-primary mb-1 italic tracking-tighter">Digitally Speaking</h4>
                  <p className="text-primary/60 font-medium underline decoration-secondary decoration-2 underline-offset-4">hello@whynot.studio</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-primary/10">
              <p className="text-primary/40 text-xs uppercase font-black tracking-widest mb-6 italic">Follow the madness</p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 flex items-center justify-center border-2 border-primary text-primary hover:bg-secondary hover:border-secondary hover:text-background transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-10 shadow-2xl shadow-primary/10 border-r-8 border-b-8 border-secondary">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase tracking-widest text-xs font-black text-primary/40">Your Moniker</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g. Stanley Kubrick" {...field} className="bg-primary/5 border-none h-14 rounded-none focus-visible:ring-secondary text-primary font-bold" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase tracking-widest text-xs font-black text-primary/40">Digital Address</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g. stan@odyssey.com" {...field} className="bg-primary/5 border-none h-14 rounded-none focus-visible:ring-secondary text-primary font-bold" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase tracking-widest text-xs font-black text-primary/40">The Manifest</FormLabel>
                      <FormControl>
                        <Textarea placeholder="What's the dream?" {...field} className="bg-primary/5 border-none min-h-[160px] rounded-none focus-visible:ring-secondary text-primary font-bold resize-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-16 rounded-none bg-primary text-background font-black tracking-widest uppercase hover:bg-secondary transition-all text-lg">
                  Get In Touch
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
