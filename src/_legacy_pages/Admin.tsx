import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Mail, Phone, Building2, MessageSquare, Trash2, Download } from "lucide-react";
import { toast } from "sonner";

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  date: string;
  time: string;
  message?: string;
  createdAt: string;
}

const Admin = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    const saved = localStorage.getItem("gpt-workshop-bookings");
    if (saved) {
      setBookings(JSON.parse(saved));
    }
  };

  const deleteBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    localStorage.setItem("gpt-workshop-bookings", JSON.stringify(updated));
    setBookings(updated);
    toast.success("Booking deleted");
  };

  const exportBookings = () => {
    const dataStr = JSON.stringify(bookings, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `bookings-${new Date().toISOString()}.json`;
    link.click();
    toast.success("Bookings exported");
  };

  const clearAllBookings = () => {
    if (confirm("Are you sure you want to delete all bookings?")) {
      localStorage.removeItem("gpt-workshop-bookings");
      setBookings([]);
      toast.success("All bookings cleared");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display text-2xl font-bold tracking-tight">
            <span className="text-gradient">DAMONTE</span> <span className="text-muted-foreground text-lg">/ Admin</span>
          </div>
          <a href="/">
            <Button variant="outline" size="sm">
              Back to Site
            </Button>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                Booking <span className="text-gradient">Management</span>
              </h1>
              <p className="text-muted-foreground">
                Total Bookings: <span className="font-semibold text-foreground">{bookings.length}</span>
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={exportBookings} disabled={bookings.length === 0}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="destructive" onClick={clearAllBookings} disabled={bookings.length === 0}>
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>
          </div>

          {/* Bookings List */}
          {bookings.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-display text-xl font-bold mb-2">No Bookings Yet</h3>
                <p className="text-muted-foreground">
                  Bookings will appear here once customers submit the booking form.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {bookings.map((booking) => (
                <Card key={booking.id} className="hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{booking.name}</CardTitle>
                        <CardDescription>
                          Submitted {new Date(booking.createdAt).toLocaleString()}
                        </CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteBooking(booking.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                          <Mail className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">Email:</span>
                          <a href={`mailto:${booking.email}`} className="text-foreground hover:text-primary underline">
                            {booking.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Phone className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">Phone:</span>
                          <a href={`tel:${booking.phone}`} className="text-foreground hover:text-primary">
                            {booking.phone}
                          </a>
                        </div>
                        {booking.company && (
                          <div className="flex items-center gap-3 text-sm">
                            <Building2 className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">Company:</span>
                            <span className="text-foreground">{booking.company}</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">Date:</span>
                          <span className="text-foreground font-medium">{booking.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">Time:</span>
                          <span className="text-foreground font-medium">{booking.time}</span>
                        </div>
                      </div>
                    </div>
                    {booking.message && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="flex items-start gap-3 text-sm">
                          <MessageSquare className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <span className="text-muted-foreground">Message:</span>
                            <p className="text-foreground mt-1">{booking.message}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
