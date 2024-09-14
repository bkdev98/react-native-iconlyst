import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst5GCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4.625a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75c0 5.384-4.365 9.75-9.75 9.75s-9.75-4.366-9.75-9.75m4.817-2.728a.75.75 0 0 1 .745-.665h2.272a.75.75 0 0 1 0 1.5H8.732l-.093.817h.606c1.139 0 2.063.925 2.063 2.064a2.374 2.374 0 0 1-2.374 2.374 2.32 2.32 0 0 1-1.95-1.062.75.75 0 0 1 1.254-.824c.158.24.408.386.696.386a.874.874 0 0 0 .874-.874.564.564 0 0 0-.563-.564H7.799a.75.75 0 0 1-.745-.834zm4.829 2.549c.07-1.722 1.5-3.283 3.339-3.192.47.024.918.144 1.321.344a.75.75 0 1 1-.667 1.344 1.8 1.8 0 0 0-.73-.19c-.891-.044-1.723.748-1.765 1.756-.048 1.157.69 1.96 1.67 1.96.369 0 .56-.07.64-.126a.2.2 0 0 0 .063-.074.54.54 0 0 0 .038-.23v-.679h-.74a.75.75 0 1 1 0-1.5h1.49a.75.75 0 0 1 .75.75v1.43c0 .637-.242 1.18-.736 1.528-.447.316-1.002.402-1.504.402-1.99 0-3.246-1.678-3.17-3.523"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst5GCircleOutline;
