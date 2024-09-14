import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPalmOutline = ({
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
      d="m6.303 7.276-.002 7.03a5.943 5.943 0 0 0 10.144 4.203c1.27-1.27 1.636-2.819 1.726-4.603.03-.567.03-2.122.026-3.29a.59.59 0 0 0-.592-.585c-.7 0-1.267.566-1.268 1.266v.722l-.002.615a.75.75 0 1 1-1.5-.002l.002-1.336a2.77 2.77 0 0 1 2.768-2.765 2.09 2.09 0 0 1 2.092 2.08c.004 1.147.004 2.752-.027 3.371-.099 1.94-.51 3.934-2.164 5.588A7.443 7.443 0 0 1 4.8 14.305l.002-7.03A2.443 2.443 0 0 1 7.23 4.852a2.44 2.44 0 0 1 2.423 2.422v3.684a.75.75 0 1 1-1.5 0V7.276a.94.94 0 0 0-.924-.924.943.943 0 0 0-.926.924"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.837 5.96a.94.94 0 0 0-.922-.87.94.94 0 0 0-.92.848v4.352a.75.75 0 1 1-1.5 0V5.911q0-.023.002-.045a2.44 2.44 0 0 1 2.417-2.276 2.44 2.44 0 0 1 2.423 2.351v5.856a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.495 4.62a.94.94 0 0 0-.922-.87.94.94 0 0 0-.92.871v2.655a.75.75 0 0 1-1.5 0V4.573a2.44 2.44 0 0 1 2.42-2.323 2.44 2.44 0 0 1 2.422 2.352v1.31a.75.75 0 1 1-1.5 0zM15.584 13.383c-1.388-.002-2.593 1.192-2.59 2.593a.75.75 0 1 1-1.5.003c-.005-2.237 1.878-4.099 4.092-4.096a.75.75 0 1 1-.002 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPalmOutline;
