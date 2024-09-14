import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopSmellLight = ({
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
      d="M13.516 12.343c1.488-.968 1.845-2.179 1.916-2.804.222-1.985-1.231-3.3-2.794-4.059-.43-.21-.94-.472-1.412-.551.019.074.846 1.442-1.46 3.362-.66.552-1.137 1.467-1.047 2.332.068.64.434 1.243.942 1.678"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.721 10.033c-1.711.104-3.081 1.597-3.081 3.42 0 .133.018.256.036.388 0 .019.01.047.01.066C4.162 14.2 3 15.589 3 17.27c0 1.89 1.478 3.062 3.27 3.43 3.703.557 10.244.369 11.749 0 1.54-.387 2.981-1.54 2.981-3.43 0-1.69-1.162-3.08-2.693-3.363.017-.151.036-.302.036-.454 0-1.804-1.324-3.278-3.01-3.41"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.68 13.837c.32 2.702 4.036 3.788 6.869 3.08M17.001 15.913c.473-.334 1.183-1.003 1.31-2.076M19.54 6.043a1.9 1.9 0 0 0-.045 1.816c.278.542.28 1.185.002 1.729M5.724 2.949a1.9 1.9 0 0 0-.045 1.814 1.9 1.9 0 0 1 .002 1.73"
    />
  </Svg>
);
export default IconlystPoopSmellLight;
