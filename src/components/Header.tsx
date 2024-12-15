import { Activity, Github, MessageCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-8 h-8" />
          <h1 className="text-2xl font-bold">d1gitalearthquakes</h1>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-gray-400">
            Made by{' '}
            <a
              href="https://leoo.lol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              d1gitalmemories
            </a>
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/d1gitalmemories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://discord.com/users/d1gitalmemories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="Discord"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
