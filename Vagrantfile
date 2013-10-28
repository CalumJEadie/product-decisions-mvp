VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

    # 32 bit Ubuntu 12.04
    config.vm.box = "precise32"
    config.vm.box_url = "http://files.vagrantup.com/precise32.box"

    # Access port 8000 on the guest from port 8000 on the host.
    config.vm.network "forwarded_port", guest: 8000, host: 8000

    config.vm.provision :shell, :path => "vagrant/bootstrap.sh"

    # Reduce the load on the host by capping cpu execution to 10%.
    #config.vm.provider "virtualbox" do |vb|
    #    vb.customize ["modifyvm", :id, "--cpuexecutioncap", "10"]
    #end

    # Install Postgres, based on
    # https://github.com/scottmuc/vagrant-postgresql
    # Postgres cookbook is copied from https://github.com/phlipper/chef-postgresql
    # Have copied directly from https://github.com/scottmuc/vagrant-postgresql
    # to make sure it works.

    # This will run after the shell script
    # See http://docs.vagrantup.com/v2/provisioning/basic_usage.html

    HERE = File.join(File.dirname(__FILE__))

    config.vm.provision :chef_solo do |chef|
        chef.cookbooks_path = File.join(HERE, 'vagrant', 'cookbooks')
        chef.add_recipe("postgresql::server")
        chef.json = {
            :postgresql => {
                :version  => "9.1",
                :listen_addresses => "*",
                :pg_hba => [
                    "host all all 0.0.0.0/0 md5",
                    "host all all ::1/0 md5",
                ],
                :users => [
                    { :username => "vagrant", :password => "password",
                    :superuser => true, :login => true, :createdb => true }
                ],
            }
        }
    end

end
