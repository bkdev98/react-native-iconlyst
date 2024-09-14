import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoldTypeBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.058 17.18a2.5 2.5 0 0 1-1.85.82H8.292v-5h4.766c1.358 0 2.517.992 2.638 2.255a2.48 2.48 0 0 1-.638 1.925M8.292 6h3.512c1.358 0 2.518.991 2.638 2.255a2.48 2.48 0 0 1-.638 1.925 2.5 2.5 0 0 1-1.85.82H8.292zm6.956 5.558c.011-.012.025-.02.036-.032a4.51 4.51 0 0 0 1.15-3.46C16.215 5.786 14.183 4 11.803 4H7.292a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5.916a4.5 4.5 0 0 0 3.33-1.474 4.52 4.52 0 0 0 1.15-3.461c-.147-1.523-1.112-2.811-2.44-3.507"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoldTypeBold;
