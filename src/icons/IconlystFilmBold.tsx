import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilmBold = ({
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
      d="M5.63 13.024a.3.3 0 0 0-.3-.3A622 622 0 0 1 2.8 12.71a.3.3 0 0 0-.3.3v2.385c0 .18.156.319.336.306.816-.06 1.671 0 2.492.014.166.003.3-.131.3-.297zM5.329 11.222c.166.002.3-.132.3-.298V8.52a.3.3 0 0 0-.3-.3c-.808-.002-1.981-.01-2.528-.013a.3.3 0 0 0-.301.3v2.407c0 .175.15.313.324.304.828-.043 1.674-.004 2.505.005M18.37 6.42a.3.3 0 0 0 .3.3h2.393a.285.285 0 0 0 .284-.348c-.34-1.43-1.262-2.511-2.587-3.08-.188-.082-.39.063-.39.268zM18.37 10.924a.3.3 0 0 0 .3.3c.815.001 1.985.006 2.53.009a.3.3 0 0 0 .3-.3V8.51a.3.3 0 0 0-.3-.3c-.545.003-1.715.008-2.53.009a.3.3 0 0 0-.3.3zM18.67 12.725a.3.3 0 0 0-.3.3v2.395a.3.3 0 0 0 .3.3c.815.001 1.985.006 2.53.008a.3.3 0 0 0 .3-.3v-2.412a.3.3 0 0 0-.3-.3c-.545.003-1.715.008-2.53.009M11.231 10.007a.7.7 0 0 0-.256-.056.4.4 0 0 0-.194.047c-.125.072-.169.221-.183.334a15.8 15.8 0 0 0 .002 3.347c.01.075.048.241.171.314.107.065.282.058.478-.017a8.3 8.3 0 0 0 2.397-1.505c.116-.109.252-.279.252-.48s-.138-.367-.253-.472c-.684-.625-1.473-1.119-2.414-1.512M18.67 17.22a.3.3 0 0 0-.3.3v2.921c0 .206.202.35.39.269 1.341-.578 2.267-1.685 2.596-3.146a.285.285 0 0 0-.285-.344z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.66 13.576-.01.009a9.8 9.8 0 0 1-2.851 1.787 2.4 2.4 0 0 1-.846.167c-.341 0-.664-.086-.95-.256-.496-.296-.813-.805-.893-1.434a17.3 17.3 0 0 1-.001-3.698c.085-.646.41-1.157.923-1.451.522-.301 1.169-.33 1.776-.077a9.8 9.8 0 0 1 2.849 1.789c.476.435.739.995.74 1.575.003.582-.258 1.147-.736 1.589m1.942 7.59a.3.3 0 0 0 .3-.3V3.136a.3.3 0 0 0-.3-.3H7.398a.3.3 0 0 0-.3.3v17.73a.3.3 0 0 0 .3.3zM5.33 6.72a.3.3 0 0 0 .3-.3V3.56c0-.205-.202-.35-.39-.269-1.325.57-2.247 1.652-2.587 3.081a.285.285 0 0 0 .284.348zM5.63 17.52a.3.3 0 0 0-.3-.3h-2.4a.285.285 0 0 0-.286.344c.328 1.46 1.255 2.567 2.595 3.145.189.08.39-.064.39-.269z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilmBold;
