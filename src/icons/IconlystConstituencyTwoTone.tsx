import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConstituencyTwoTone = ({
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
      strokeWidth={1.5}
      d="M17.914 3.022c.005-.03.047-.03.053 0a3.86 3.86 0 0 0 3.011 3.01c.03.007.03.049 0 .055a3.86 3.86 0 0 0-3.01 3.01c-.007.03-.049.03-.055 0a3.86 3.86 0 0 0-3.01-3.01c-.03-.006-.03-.048 0-.054a3.86 3.86 0 0 0 3.01-3.011Z"
    />
    <Path
      fill={props.color}
      d="M11.602 6.81a.75.75 0 0 0 0-1.5zm7.088 5.588a.75.75 0 0 0-1.5 0zM4.514 8.323v8.15h1.5v-8.15zm3.013 11.163h8.15v-1.5h-8.15zm0-12.676h4.075v-1.5H7.527zm11.163 9.663v-4.075h-1.5v4.075zm-13.426-8.9A1.514 1.514 0 0 1 3.75 6.06h-1.5a3.014 3.014 0 0 0 3.014 3.013zM6.777 6.06c0 .836-.677 1.513-1.513 1.513v1.5A3.014 3.014 0 0 0 8.277 6.06zM5.264 4.546c.836 0 1.513.678 1.513 1.514h1.5a3.014 3.014 0 0 0-3.013-3.014zm0-1.5A3.014 3.014 0 0 0 2.25 6.06h1.5c0-.836.678-1.514 1.514-1.514zm0 17.204a1.514 1.514 0 0 1-1.514-1.514h-1.5a3.014 3.014 0 0 0 3.014 3.014zm1.513-1.514c0 .836-.677 1.514-1.513 1.514v1.5a3.014 3.014 0 0 0 3.013-3.014zm-1.513-1.513c.836 0 1.513.677 1.513 1.513h1.5a3.014 3.014 0 0 0-3.013-3.013zm0-1.5a3.014 3.014 0 0 0-3.014 3.013h1.5c0-.836.678-1.513 1.514-1.513zM17.94 20.25a1.514 1.514 0 0 1-1.513-1.514h-1.5a3.014 3.014 0 0 0 3.013 3.014zm1.514-1.514c0 .836-.678 1.514-1.514 1.514v1.5a3.014 3.014 0 0 0 3.014-3.014zm-1.514-1.513c.836 0 1.514.677 1.514 1.513h1.5a3.014 3.014 0 0 0-3.014-3.013zm0-1.5a3.014 3.014 0 0 0-3.013 3.013h1.5c0-.836.677-1.513 1.513-1.513z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystConstituencyTwoTone;
