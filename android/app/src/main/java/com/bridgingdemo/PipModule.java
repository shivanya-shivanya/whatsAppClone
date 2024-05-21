package com.bridgingdemo;

import android.app.PictureInPictureParams;
import android.os.Build;
import android.util.Rational;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PipModule extends ReactContextBaseJavaModule {
private Rational  aspectRatio;

    public PipModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
        this.aspectRatio = new Rational(3,4);
    }

    @ReactMethod
    public void EnterPipModule(){
//        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O){
//            PictureInPictureParams params = new PictureInPictureParams.Builder()
//                    .setAspectRatio(this.aspectRatio)
//                    .build();
//            getCurrentActivity().enterPictureInPictureMode(params);
//        }
        Toast.makeText(getReactApplicationContext(),"hello world",Toast.LENGTH_LONG).show();
    }

    @NonNull
    @Override
    public String getName() {
        return "PipModule";
    }
}
