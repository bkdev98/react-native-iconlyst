import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystApacheNetBeansLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.045 17.257-6.01 3.466a2.07 2.07 0 0 1-2.07 0l-6.01-3.466a2.07 2.07 0 0 1-1.037-1.794V8.537c0-.74.395-1.425 1.037-1.794l6.01-3.466a2.07 2.07 0 0 1 2.07 0l6.01 3.466a2.07 2.07 0 0 1 1.036 1.794v6.926a2.07 2.07 0 0 1-1.036 1.794"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.648 14.722-3.113 1.794c-.331.191-.74.191-1.07 0l-3.113-1.794a1.07 1.07 0 0 1-.537-.93v-3.585c0-.384.205-.738.537-.93l3.112-1.794c.332-.19.74-.19 1.071 0l3.113 1.795c.332.191.536.545.536.928v3.587c0 .383-.204.737-.537.929"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.804 7.5 12 12M4.196 7.5 12 12M12 12v9M12 3v4.34M16.044 14.332l3.76 2.168M4.196 16.5l3.76-2.168"
    />
  </Svg>
);
export default IconlystApacheNetBeansLight;
