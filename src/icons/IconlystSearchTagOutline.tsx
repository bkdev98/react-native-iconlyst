import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchTagOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M13.06 21.787a3.83 3.83 0 0 1-2.7-1.13l-2.074-2.07a1509 1509 0 0 1-4.144-4.147 5.42 5.42 0 0 1-1.589-3.37c-.064-.709-.056-2.646-.044-4.408v-.73A3.786 3.786 0 0 1 5.6 2.266c.251-.04 1.3-.053 4.558-.05h.6a5.53 5.53 0 0 1 4.04 1.677l.644.645a.75.75 0 0 1-1.062 1.059l-.644-.645a4.03 4.03 0 0 0-2.978-1.235h-.6c-1.3 0-4.008 0-4.327.03a2.29 2.29 0 0 0-1.82 2.192v.734c-.01 1.248-.026 3.57.036 4.26a3.9 3.9 0 0 0 1.161 2.451 732 732 0 0 0 4.138 4.142l2.074 2.07a2.27 2.27 0 0 0 3.25.024c.715-.71 1.434-1.422 2.147-2.136a.75.75 0 0 1 1.061 1.06q-1.074 1.074-2.153 2.143a3.78 3.78 0 0 1-2.665 1.1"
    />
    <Path
      fill={props.color}
      d="M8.578 10.64h-.006a2.36 2.36 0 1 1 .034-4.722h.008a2.3 2.3 0 0 1 1.635.69 2.36 2.36 0 0 1-1.671 4.032m.028-3.222a.86.86 0 0 0-.82 1.191.8.8 0 0 0 .185.272.86.86 0 0 0 .6.259.87.87 0 0 0 .864-.845.88.88 0 0 0-.258-.63.82.82 0 0 0-.575-.247zM17.563 14.894a3.863 3.863 0 1 1 3.863-3.864 3.87 3.87 0 0 1-3.863 3.864m0-6.227a2.363 2.363 0 1 0 0 4.726 2.363 2.363 0 0 0 0-4.726"
    />
    <Path
      fill={props.color}
      d="M21.249 15.622a.75.75 0 0 1-.53-.22l-1.567-1.562a.75.75 0 0 1 .238-1.233.75.75 0 0 1 .823.17l1.566 1.564a.75.75 0 0 1-.53 1.28"
    />
  </Svg>
);
export default IconlystSearchTagOutline;
