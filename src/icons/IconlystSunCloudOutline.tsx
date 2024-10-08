import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunCloudOutline = ({
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
      d="M10.68 2.432a.75.75 0 0 1 .88.592l.263 1.346a.75.75 0 0 1-1.472.289l-.263-1.347a.75.75 0 0 1 .591-.88m7.314 1.476a.75.75 0 0 1 .204 1.041l-.765 1.139a.75.75 0 1 1-1.245-.837l.765-1.139a.75.75 0 0 1 1.041-.204M4.464 6.561a.75.75 0 0 1 1.04-.204l1.139.765a.75.75 0 0 1-.837 1.245l-1.139-.765a.75.75 0 0 1-.204-1.041m17.659 3.564a.75.75 0 0 1-.592.88l-1.346.264a.75.75 0 1 1-.289-1.472l1.346-.264a.75.75 0 0 1 .88.592M5.805 13.323a.75.75 0 0 1-.592.88l-1.346.264a.75.75 0 1 1-.288-1.472l1.346-.264a.75.75 0 0 1 .88.592m2.913 4.385a.75.75 0 0 1 .204 1.041l-.766 1.139a.75.75 0 0 1-1.244-.837l.765-1.139a.75.75 0 0 1 1.04-.204M12.555 8.555a3.445 3.445 0 0 0-1.933 6.299.75.75 0 0 1-.843 1.24 4.945 4.945 0 1 1 7.463-5.675.75.75 0 1 1-1.421.48 3.45 3.45 0 0 0-3.266-2.344M15.78 14.744c-.33.437-.46.963-.46 1.262a.75.75 0 0 1-.743.75c-.47.004-.853.163-1.114.411-.254.243-.44.617-.44 1.158 0 .632.37 1.177.907 1.426.242.095.478.127.643.127h5.485c.16 0 .395-.034.636-.129.538-.25.91-.794.91-1.424 0-.54-.186-.915-.44-1.158-.26-.248-.644-.407-1.115-.41a.75.75 0 0 1-.743-.75c0-.3-.13-.826-.46-1.263-.307-.406-.781-.731-1.533-.731s-1.225.325-1.532.731m-1.195-.905c.557-.737 1.455-1.326 2.728-1.326s2.172.589 2.73 1.326c.355.47.576 1.002.683 1.487a3 3 0 0 1 1.474.756c.577.55.904 1.33.904 2.243a3.07 3.07 0 0 1-1.832 2.809 3.3 3.3 0 0 1-1.214.244h-5.485a3.3 3.3 0 0 1-1.246-.253 3.07 3.07 0 0 1-1.804-2.8c0-.913.328-1.692.905-2.243.41-.391.92-.643 1.472-.756a3.9 3.9 0 0 1 .684-1.487"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunCloudOutline;
