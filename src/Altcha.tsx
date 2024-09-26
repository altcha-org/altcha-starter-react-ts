import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react'

// Importing altcha package will introduce a new element <altcha-widget>
import 'altcha'

interface AltchaProps {
  onStateChange?: (ev: Event | CustomEvent) => void;
}

const Altcha = forwardRef<{ value: string | null }, AltchaProps>(({ onStateChange }, ref) => {
  const widgetRef = useRef<HTMLElement>(null)
  const [value, setValue] = useState<string | null>(null)

  useImperativeHandle(ref, () => {
    return {
      get value() {
        return value;
      }
    };
  }, [value])

  useEffect(() => {
    const handleStateChange = (ev: Event | CustomEvent) => {
      if ('detail' in ev) {
        setValue(ev.detail.payload || null)
        console.log(ev.detail.state)
        if(ev.detail.state==="verified"){
          onStateChange?.(ev)
        }
      }
    }

    const handleEventListener = (ev: Event) => {
      console.log(ev)
      if(onStateChange){
        onStateChange(ev)
      }
    }
    
    
    const { current } = widgetRef
    
    if (current && onStateChange) {
      document.addEventListener("click",handleEventListener)
      current.addEventListener('statechange', handleStateChange)
      return () => {
        document.removeEventListener("click",handleEventListener)
        current.removeEventListener('statechange', handleStateChange)
      }
    }
  }, [onStateChange])

  /* Configure your `challengeurl` and remove the `test` attribute, see docs: https://altcha.org/docs/website-integration/#using-altcha-widget  */
  return (
    <altcha-widget
      ref={widgetRef}
      style={{
        '--altcha-max-width': '100%',
      }}
      //debug
      test
    ></altcha-widget>
  )
})

export default Altcha
