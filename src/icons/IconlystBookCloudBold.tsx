import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookCloudBold = ({
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
      d="M9.437 16.78a.3.3 0 0 1-.3-.3V2.55a.3.3 0 0 1 .3-.3h8.829c1.075 0 1.949.875 1.949 1.95v2.034c0 .22-.387.316-.525.144-.532-.665-1.35-1.167-2.475-1.167-1.742 0-2.75 1.205-3.094 2.353-1.2.35-2.005 1.41-2.005 2.767a2.87 2.87 0 0 0 2.867 2.87h4.46q.252 0 .518-.049c.13-.023.254.072.254.204v2.692l.007 3.762a1.95 1.95 0 0 1-1.95 1.94H7.072a3.24 3.24 0 0 1-3.237-3.24V5.59a3.344 3.344 0 0 1 3.341-3.34h.162a.3.3 0 0 1 .3.3v13.93a.3.3 0 0 1-.3.3H7.07a1.734 1.734 0 1 0 0 3.47h11.202a.45.45 0 0 0 .449-.442l-.005-2.728a.3.3 0 0 0-.3-.3z"
    />
    <Path
      fill={props.color}
      d="M13.697 10.434c0-1.02.717-1.613 1.604-1.622 0-.635.5-1.914 1.914-1.914s1.914 1.28 1.914 1.914c.887.01 1.604.601 1.604 1.622 0 .652-.39 1.22-.951 1.476a1.8 1.8 0 0 1-.654.13h-3.83a1.607 1.607 0 0 1-1.602-1.605"
    />
  </Svg>
);
export default IconlystBookCloudBold;
