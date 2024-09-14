import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXboxPlaystationBulk = ({
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
      d="M21.48 14.636c-.011-.068-.023-.204-.042-.394-.169-1.732-.682-7.003-3.302-8.407l-.013-.006c-.602-.302-2.44-1.221-4.589.023-1.428.892-1.82.81-3.177-.005-2.13-1.278-3.775-.432-4.478-.07l-.116.058C2.589 7.536 2.5 14.704 2.5 14.776c0 1.363.203 3.022 1.82 3.767.55.211 1.041.291 1.468.291.983 0 1.632-.425 1.902-.651.347-.248.549-.511.744-.767.254-.331.493-.644 1.118-1.008 1.044-.609 3.943-.52 4.89-.003.488.293.721.575.989.901.221.268.471.572.878.877.913.652 2.103.784 3.37.36 1.632-.628 1.821-2.45 1.821-3.767a.5.5 0 0 0-.02-.14"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.302 11.992a.735.735 0 1 1 0-1.47.735.735 0 0 1 0 1.47m-1.404 1.404a.735.735 0 1 1 0-1.47.735.735 0 0 1 0 1.47m-1.404-1.404a.735.735 0 1 1 0-1.47.735.735 0 0 1 0 1.47m1.404-2.874a.735.735 0 1 1 0 1.47.735.735 0 0 1 0-1.47M9.3 12.057h-.65v.65a.75.75 0 0 1-1.5 0v-.65H6.4a.75.75 0 0 1 0-1.5h.75v-.75a.75.75 0 0 1 1.5 0v.75h.65a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystXboxPlaystationBulk;
