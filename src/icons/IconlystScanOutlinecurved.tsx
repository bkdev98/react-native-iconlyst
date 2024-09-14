import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanOutlinecurved = ({
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
      d="M.7 13.8a.75.75 0 0 1 .75-.75h21.132a.75.75 0 0 1 0 1.5H1.45a.75.75 0 0 1-.75-.75M9.506 3.829a.75.75 0 0 1-.619.861c-1.643.27-2.777.795-3.567 1.584-.79.79-1.315 1.924-1.584 3.567a.75.75 0 1 1-1.48-.242c.3-1.837.92-3.303 2.004-4.386C5.342 4.13 6.808 3.511 8.645 3.21a.75.75 0 0 1 .861.619"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.768 13.054a.75.75 0 0 1 .767.733 16.4 16.4 0 0 0 .201 2.312c.27 1.643.794 2.775 1.584 3.563s1.924 1.314 3.57 1.588a.75.75 0 1 1-.247 1.48c-1.835-.306-3.3-.925-4.383-2.007-1.073-1.07-1.691-2.516-1.995-4.327l-.01-.048c-.128-.763-.2-1.61-.22-2.527a.75.75 0 0 1 .733-.767M21.261 13.054a.75.75 0 0 1 .733.767 18 18 0 0 1-.217 2.52c-.302 1.837-.922 3.3-2.005 4.382s-2.548 1.701-4.383 2.007a.75.75 0 1 1-.247-1.48c1.645-.274 2.78-.8 3.57-1.588.782-.781 1.305-1.898 1.577-3.517l.006-.044q.17-1.019.2-2.314a.75.75 0 0 1 .766-.733M14.526 3.829a.75.75 0 0 1 .861-.62c1.837.302 3.303.921 4.386 2.004s1.703 2.55 2.003 4.386a.75.75 0 1 1-1.48.242c-.27-1.643-.794-2.777-1.584-3.567S16.788 4.96 15.145 4.69a.75.75 0 0 1-.619-.861"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanOutlinecurved;
