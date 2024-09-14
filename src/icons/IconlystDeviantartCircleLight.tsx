import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeviantartCircleLight = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.222 9.18a.24.24 0 0 1-.196.102h-3.18a.24.24 0 0 0-.239.24v1.767c0 .132.108.239.24.239h1.68c.076 0 .122.086.079.15L8.69 14.495a.5.5 0 0 0-.083.27v1.883a.24.24 0 0 0 .24.239h1.496q.003 0 .004-.003l1.43-2.067a.24.24 0 0 1 .197-.103h3.179a.24.24 0 0 0 .239-.24v-1.767a.24.24 0 0 0-.24-.239h-1.68a.096.096 0 0 1-.078-.149l1.915-2.82a.5.5 0 0 0 .083-.268V7.348a.24.24 0 0 0-.24-.239h-1.496q-.003 0-.004.003z"
    />
  </Svg>
);
export default IconlystDeviantartCircleLight;
