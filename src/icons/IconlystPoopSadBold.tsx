import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopSadBold = ({
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
      d="M16.2 12.298a.75.75 0 0 1-1.5 0c0-.414.335-.755.75-.755.413 0 .75.331.75.745zm-1.056 4.742a.747.747 0 0 1-1.059-.044c-.354-.384-.679-.548-1.087-.548-.377.006-.719.182-1.034.537a.75.75 0 0 1-1.059.065.75.75 0 0 1-.064-1.059c.593-.671 1.336-1.031 2.146-1.043.845 0 1.562.338 2.201 1.033a.75.75 0 0 1-.044 1.059m-5.318-4.742c0-.414.336-.755.75-.755s.75.331.75.745v.01a.75.75 0 0 1-1.5 0m10.003.239.001-.069c0-1.846-1.245-3.427-2.922-3.823l.005-.039c.218-1.875-.873-3.496-3.08-4.571l-.218-.103c-.4-.192-.855-.408-1.314-.488a.52.52 0 0 0-.456.173.52.52 0 0 0-.1.486c.133.447.297 1.587-1.089 2.524a3.67 3.67 0 0 0-1.358 1.964c-1.806.299-3.17 1.931-3.17 3.877l.001.074c-1.555.506-2.64 2.008-2.64 3.735 0 1.952 1.404 3.454 3.694 3.925 1.671.253 3.967.357 6.124.357 2.563 0 4.93-.147 5.82-.365 1.55-.383 3.361-1.638 3.361-3.917 0-1.741-1.094-3.246-2.659-3.74"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPoopSadBold;
