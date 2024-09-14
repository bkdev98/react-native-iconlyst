import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFallingStarLight = ({
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
      d="M16.266 16.236 13.75 14.31a.95.95 0 0 0-.872-.149l-3.05.98a.94.94 0 0 1-1.179-1.214l1.097-2.985a.93.93 0 0 0-.118-.87l-1.851-2.56a.953.953 0 0 1 .812-1.5l3.19.08a.97.97 0 0 0 .799-.389l1.905-2.562a.953.953 0 0 1 1.681.286l.873 3.035c.086.299.317.535.612.63l3.029.975a.939.939 0 0 1 .23 1.675l-2.652 1.8a.95.95 0 0 0-.421.777l-.036 3.169a.962.962 0 0 1-1.534.748"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.704 21.25 3.069-3.068M6.073 17.951l-1.446 1.447M2.9 14.28l3.27-3.27"
    />
  </Svg>
);
export default IconlystFallingStarLight;
