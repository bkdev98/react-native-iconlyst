import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketsOutline = ({
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
      fillRule="evenodd"
      d="M6.36 12.484a.75.75 0 0 1 .75-.75h4.706a.75.75 0 0 1 0 1.5H7.109a.75.75 0 0 1-.75-.75M9.191 8.223a.75.75 0 0 1 .75-.75h1.875a.75.75 0 0 1 0 1.5H9.94a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.689 2.41h7.12c.921 0 1.656 0 2.25.047.61.048 1.135.15 1.619.387a4.25 4.25 0 0 1 1.947 1.946c.237.485.338 1.01.386 1.62.047.593.047 1.328.047 2.249v3.235c0 .92 0 1.655-.047 2.25-.048.609-.149 1.133-.386 1.618a4.25 4.25 0 0 1-1.947 1.947c-.484.237-1.01.338-1.619.386-.594.047-1.329.047-2.25.047H8.69c-.92 0-1.655 0-2.25-.047-.609-.048-1.134-.149-1.618-.386a4.25 4.25 0 0 1-1.947-1.947c-.238-.485-.338-1.01-.387-1.619-.047-.594-.047-1.329-.047-2.25V8.66c0-.92 0-1.656.047-2.25.049-.61.15-1.134.387-1.619A4.25 4.25 0 0 1 4.82 2.844c.484-.238 1.009-.339 1.618-.387.595-.047 1.33-.047 2.25-.047M6.558 3.952c-.52.042-.833.119-1.077.239a2.75 2.75 0 0 0-1.26 1.26c-.12.243-.197.556-.238 1.076-.042.528-.043 1.204-.043 2.163v3.172c0 .96.001 1.635.043 2.163.04.52.118.833.238 1.077a2.75 2.75 0 0 0 1.26 1.26c.244.12.557.197 1.077.238.528.042 1.203.042 2.162.042h7.058c.96 0 1.635 0 2.163-.042.52-.041.833-.119 1.077-.238a2.75 2.75 0 0 0 1.26-1.26c.12-.244.197-.557.238-1.077.042-.528.042-1.204.042-2.163V8.69c0-.959 0-1.635-.042-2.163-.041-.52-.119-.833-.238-1.077a2.75 2.75 0 0 0-1.26-1.26c-.244-.119-.557-.196-1.077-.238-.528-.041-1.204-.042-2.163-.042H8.72c-.959 0-1.634 0-2.163.042"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.335 16.538a.75.75 0 0 1 .49.941c-.243.768-.5 1.38-.935 1.876a4.25 4.25 0 0 1-2.387 1.371c-.53.103-1.063.064-1.664-.05-.586-.109-1.295-.3-2.184-.541l-.03-.008-.022-.006-7.18-2.177a.75.75 0 1 1 .436-1.435l7.169 2.173c.92.248 1.569.423 2.088.52.512.097.835.103 1.101.052a2.75 2.75 0 0 0 1.545-.887c.222-.254.405-.62.632-1.34a.75.75 0 0 1 .941-.49M15.84 7.914a.75.75 0 0 1 .75.75v3.183a.75.75 0 1 1-1.5 0V8.664a.75.75 0 0 1 .75-.75M15.84 2.41a.75.75 0 0 1 .75.75v2.714a.75.75 0 1 1-1.5 0V3.16a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.84 13.883a.75.75 0 0 1 .75.75v2.714a.75.75 0 1 1-1.5 0v-2.714a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTicketsOutline;
