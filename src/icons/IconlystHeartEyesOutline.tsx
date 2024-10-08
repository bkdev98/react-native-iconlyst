import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartEyesOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12c0 5.384-4.365 9.75-9.75 9.75S2.5 17.384 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.62 15.29a.75.75 0 0 1 .75-.75h5.76a.75.75 0 0 1 .75.75c0 .968-.675 1.718-1.332 2.175-.674.47-1.54.786-2.298.786-.757 0-1.624-.316-2.298-.786-.657-.457-1.332-1.207-1.332-2.176m1.94.75q.11.097.249.194c.479.333 1.052.517 1.441.517.39 0 .963-.184 1.441-.517q.14-.097.249-.195zM8.68 7.736c.342-.22.754-.322 1.169-.28h.001c1.187.121 1.718 1.229 1.627 2.139-.075.726-.504 1.366-.826 1.765a6 6 0 0 1-.66.696l-.014.012-.004.004-.002.001v.001l-.489-.57-.216.719h-.002l-.002-.001-.005-.002-.018-.006a4 4 0 0 1-.258-.09 6 6 0 0 1-.63-.28c-.455-.233-1.11-.642-1.468-1.275-.454-.795-.415-2.021.618-2.614l.005-.003c.36-.203.774-.276 1.174-.216m.802 3.769-.216.718c.244.073.51.017.704-.149zm-.184-.871a5 5 0 0 1-.264-.125c-.396-.203-.714-.446-.846-.68l-.002-.002a.57.57 0 0 1-.076-.373.27.27 0 0 1 .135-.196.33.33 0 0 1 .3-.012.75.75 0 0 0 .877-.189.32.32 0 0 1 .276-.109c.09.01.153.05.204.124.058.086.097.22.082.372-.028.277-.223.631-.5.974a5 5 0 0 1-.186.216M15.716 7.736a1.83 1.83 0 0 0-1.17-.28c-1.188.121-1.719 1.229-1.627 2.139.074.726.503 1.366.825 1.765a6 6 0 0 0 .66.696l.014.012.005.004.001.001.001.001.488-.57.217.719h.001l.002-.001.006-.002.018-.006a4 4 0 0 0 .258-.09c.163-.062.387-.155.63-.28.455-.233 1.11-.642 1.468-1.275.454-.795.414-2.021-.619-2.614l-.004-.003a1.83 1.83 0 0 0-1.174-.216m-.803 3.769.217.718a.75.75 0 0 1-.705-.149zm.185-.871q.124-.053.263-.125c.397-.203.715-.446.847-.68l.002-.002a.57.57 0 0 0 .075-.373.27.27 0 0 0-.135-.196.33.33 0 0 0-.3-.012.75.75 0 0 1-.876-.189.33.33 0 0 0-.277-.109.26.26 0 0 0-.203.124.57.57 0 0 0-.083.372c.029.277.224.631.5.974q.097.119.187.216"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartEyesOutline;
