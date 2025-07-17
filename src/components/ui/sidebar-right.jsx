import { activities, contacts, notifications } from "@/lib/data.json";
import { cn } from "@/lib/utils";
import { BroadcastIcon, BugBeetleIcon, UserIcon } from "../icons";
import { Sidebar } from "./sidebar";

const notificationConfig = {
  bug: {
    Icon: BugBeetleIcon,
    bgColor: "bg-primary-blue",
  },
  user: {
    Icon: UserIcon,
    bgColor: "bg-primary-purple",
  },
  broadcast: {
    Icon: BroadcastIcon,
    bgColor: "bg-primary-purple",
  },
};

export function SidebarRight({ isSidebarRightOpen, toggleSidebar }) {
  return (
    <Sidebar
      side="right"
      isCollapsible={isSidebarRightOpen}
      sidebarWidthDesktop="280px"
      toggleSidebar={toggleSidebar}
    >
      <div className="flex flex-col gap-6 overflow-y-auto">
        {/* Notifications */}
        <div className="flex flex-col gap-2 px-5 pt-5">
          <div className="px-1 py-2 font-semibold text-sm">Notifications</div>

          <div className="flex flex-col gap-2">
            {notifications.map((notification) => {
              const { Icon, bgColor } = notificationConfig[notification.type];

              return (
                <div
                  key={notification.id}
                  className="flex cursor-default gap-2 rounded-lg p-1 transition-colors hover:bg-foreground/5"
                >
                  <div
                    className={cn(
                      "flex size-6 shrink-0 items-center justify-center rounded-lg",
                      bgColor,
                    )}
                  >
                    <Icon className="size-4 shrink-0" />
                  </div>

                  <div className="overflow-hidden whitespace-nowrap text-sm">
                    <p className="truncate">{notification.message}</p>
                    <p className="text-foreground/40 text-xs">
                      {notification.timestamp}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activities */}
        <div className="flex flex-col gap-2 px-5">
          <div className="px-1 py-2 font-semibold text-sm">Activities</div>

          <div className="flex flex-col gap-2">
            {activities.map((activity, idx) => (
              <div key={activity.id} className="relative flex gap-2 p-1">
                {idx < activities.length - 1 && (
                  <div className="absolute top-9 left-4 h-3.5 w-px bg-foreground/10" />
                )}

                <img
                  src={activity.user.avatar}
                  alt={activity.user.name}
                  className="relative z-10 size-6 shrink-0 rounded-full object-cover"
                />

                <div className="overflow-hidden whitespace-nowrap text-sm">
                  <p className="truncate">{activity.action}</p>
                  <p className="text-foreground/40 text-xs">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div className="flex flex-col gap-2 px-5 pb-5">
          <div className="px-1 py-2 font-semibold text-sm">Contacts</div>

          <div className="flex flex-col gap-2">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex cursor-default items-center gap-2 rounded-lg p-1 text-sm transition-colors hover:bg-foreground/5"
              >
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="size-6 shrink-0 rounded-full object-cover"
                />

                <span className="whitespace-nowrap">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
