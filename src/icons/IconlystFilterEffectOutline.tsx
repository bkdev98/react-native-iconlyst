import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterEffectOutline = ({
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
      d="M10.336 20.528a1.36 1.36 0 0 1-1.245-.793l-1.918-4.11-4.048-1.855a1.375 1.375 0 0 1 0-2.491l4.111-1.917 1.856-4.048a1.36 1.36 0 0 1 1.245-.794 1.36 1.36 0 0 1 1.245.794L13.5 9.423l4.048 1.854a1.376 1.376 0 0 1 0 2.493l-4.109 1.918-1.856 4.047a1.36 1.36 0 0 1-1.245.793m-6.332-8 3.866 1.8c.294.137.53.374.665.669l1.8 3.858 1.8-3.863c.137-.292.372-.526.663-.663l3.867-1.806-3.865-1.8a1.4 1.4 0 0 1-.662-.66l-1.806-3.868-1.8 3.864a1.37 1.37 0 0 1-.659.663zM19.097 21.448a.75.75 0 0 1-.75-.75v-1.236h-1.236a.75.75 0 0 1 0-1.5h1.237v-1.235a.75.75 0 1 1 1.5 0v1.235h1.236a.75.75 0 0 1 0 1.5h-1.236V20.7a.75.75 0 0 1-.75.748M17.257 6.669a.75.75 0 0 1-.75-.75v-.56h-.56a.75.75 0 0 1 0-1.5h.56v-.558a.75.75 0 1 1 1.5 0v.558h.558a.75.75 0 1 1 0 1.5h-.558v.559a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystFilterEffectOutline;
