import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookOutline = ({
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
      d="M18.011 3.361a.75.75 0 0 1 .75.75v5.212a.75.75 0 0 1-1.165.625l-.546-.363a.79.79 0 0 0-.866 0l-.547.363a.75.75 0 0 1-1.164-.625v-4.43a.75.75 0 1 1 1.5 0v3.155c.42-.123.868-.123 1.288 0V4.11a.75.75 0 0 1 .75-.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.712 20.858c-1.171-.68-3.126-1.592-5.341-1.75a3.12 3.12 0 0 1-2.338-1.318 2.98 2.98 0 0 1-.533-1.71V5.74c0-1.831 1.598-3.218 3.396-3.022 2.355.26 4.37 1.216 5.569 1.912a1.57 1.57 0 0 0 1.571 0 15.7 15.7 0 0 1 3.478-1.496 12.5 12.5 0 0 1 2.091-.416C20.401 2.522 22 3.909 22 5.739v10.342c0 1.635-1.287 2.912-2.87 3.027-2.216.158-4.171 1.07-5.342 1.75a3.06 3.06 0 0 1-3.076 0M13 6.248q.41-.102.788-.32c1.105-.642 2.913-1.492 4.98-1.718A1.55 1.55 0 0 1 20.5 5.74v10.34c0 .802-.631 1.47-1.479 1.532-2.536.182-4.718 1.213-5.985 1.947l-.036.02zm-1.5 0a3 3 0 0 1-.788-.321c-1.105-.641-2.913-1.49-4.98-1.717A1.56 1.56 0 0 0 4.19 5a1.5 1.5 0 0 0-.19.74v10.34c0 .802.631 1.47 1.479 1.532 2.536.182 4.718 1.213 5.985 1.947l.036.02z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookOutline;
