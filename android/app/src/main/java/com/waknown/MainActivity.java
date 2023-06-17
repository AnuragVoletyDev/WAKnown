package com.waknown;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import java.util.logging.Logger;


public class MainActivity extends ReactActivity {

    private static String incomingPhoneNumber;

    /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "WAKnown";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected Bundle getLaunchOptions() {
            Bundle initialProps = new Bundle();
            // Set the value from our static variable for the app
            initialProps.putString("incomingPhoneNumber", MainActivity.incomingPhoneNumber);
            // Since incomingPhoneNumber is static we have to reset it
            MainActivity.incomingPhoneNumber = null;
            return initialProps;
        }
    };
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    final Intent intent = this.getIntent();
    final String action = intent.getAction();
    final String type = intent.getType();

    if (Intent.ACTION_SEND.equals(action) && type != null && "text/plain".equals(type)) {
        // Extract the URL from the Intent and set it to our variable
        String incomingString = intent.getStringExtra(Intent.EXTRA_TEXT);
        Toast.makeText(this, incomingString, Toast.LENGTH_LONG).show();
        MainActivity.incomingPhoneNumber = incomingString;
    }

    super.onCreate(savedInstanceState);
  }

    @Override
    protected void onRestart() {
        final Intent intent = this.getIntent();
        final String action = intent.getAction();
        final String type = intent.getType();
        if (Intent.ACTION_SEND.equals(action) && type != null && "text/plain".equals(type)) {
            // Extract the URL from the Intent and set it to our variable
            String incomingString = intent.getStringExtra(Intent.EXTRA_TEXT);
            Toast.makeText(this, "Copied to clipboard: 0" + incomingString, Toast.LENGTH_LONG).show();
            MainActivity.incomingPhoneNumber = incomingString;
            ClipboardManager clipboard = (ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
            ClipData clip = ClipData.newPlainText("Incoming phone number", MainActivity.incomingPhoneNumber);
            clipboard.setPrimaryClip(clip);
        }
        super.onRestart();
    }
}
