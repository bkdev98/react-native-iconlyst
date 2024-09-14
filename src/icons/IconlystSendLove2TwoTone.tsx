import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendLove2TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.196 16.95h1.413c1.009 0 1.823-.726 1.823-1.734 0-.839-.567-1.509-1.38-1.713-1.163-.292-2.324-.52-3.538-.492-1.924.047-3.27 1.119-4.795 2.14"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.196 16.982c.715-.104 1.442 0 2.164-.016 1.673-.04 2.984-1.455 4.258-2.414a1.63 1.63 0 0 1 2.138.153c.639.64.639 1.681 0 2.322-1.376 1.38-2.591 2.663-4.456 3.388-2.587 1.006-4.988.517-7.608 0-1.014-.201-1.949-.213-2.975-.213"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.143 6.481c.435-1.355-.07-2.909-1.49-3.366a2.4 2.4 0 0 0-1.137-.08c-.38.063-.74.326-1.048.558-.31-.23-.669-.491-1.049-.556a2.45 2.45 0 0 0-1.136.078c-1.42.461-1.928 2.01-1.494 3.366.67 2.148 3.68 3.554 3.68 3.554s2.962-1.38 3.674-3.554"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSendLove2TwoTone;
