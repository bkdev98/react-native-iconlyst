import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapLocationBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="m7.373 2.485-3.85 1.701a2.67 2.67 0 0 0-1.583 2.44v12.663a1.79 1.79 0 0 0 2.522 1.64l2.998-1.333a.11.11 0 0 0 .065-.1V2.586a.11.11 0 0 0-.152-.101M20.866 9.838c.265.132.574-.074.574-.37V4.501c0-.61-.31-1.17-.82-1.51-.51-.33-1.14-.38-1.7-.13l-3.007 1.334-.041.064-.022.032v5.16c.64-.2 1.32-.31 2.03-.31 1.075 0 2.088.25 2.986.697" />
    </G>
    <Path
      fill={props.color}
      d="M14.35 4.375v5.767a6.75 6.75 0 0 0-3.25 5.78c0 1.358.475 2.74 1.202 3.98.194.333-.123.725-.485.593-.671-.243-1.355-.493-1.877-.683l-.003-.001-.847-.309c-.04-.01-.07-.05-.07-.1V2.532c0-.08.07-.13.15-.11.655.244 3.43 1.248 4.63 1.683l.483.174zM17.778 14.58h.049a1.067 1.067 0 1 1 0 2.136c-.591 0-1.093-.478-1.093-1.069 0-.59.453-1.068 1.043-1.068"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.416 15.739a4.39 4.39 0 0 1 4.386-4.387c2.42 0 4.388 1.969 4.388 4.387 0 2.846-3.258 5.79-4.388 5.79s-4.386-2.944-4.386-5.79m1.602 0c0 1.853 2.05 3.758 2.784 4.148.734-.39 2.786-2.295 2.786-4.148a2.79 2.79 0 0 0-2.786-2.785 2.79 2.79 0 0 0-2.784 2.785"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMapLocationBulk;
