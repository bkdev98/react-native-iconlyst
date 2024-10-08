import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallHashtagOutline = ({
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
      d="M17.206 21.698c-2.36 0-5.431-1.875-9.13-5.572-3.713-3.712-5.59-6.794-5.575-9.158a3.55 3.55 0 0 1 1.143-2.68c.017-.02.069-.072.088-.09 1.36-1.362 2.27-1.922 3.2-1.9 1.07.013 1.826.806 2.78 1.812.236.246.49.513.772.8a2.88 2.88 0 0 1 .56 3.58c-.41 1.045-.762 1.948.98 3.691 1.744 1.743 2.645 1.387 3.692.978a2.88 2.88 0 0 1 3.578.558c.28.28.544.531.789.764 1.008.96 1.8 1.717 1.819 2.791.01.912-.538 1.838-1.9 3.2l-.093.09a3.56 3.56 0 0 1-2.682 1.142zM4.798 5.253s-.046.05-.106.108A2.09 2.09 0 0 0 4 6.977c-.008 1.34.876 3.83 5.136 8.088s6.7 5.16 8.085 5.133a2.07 2.07 0 0 0 1.618-.69q.078-.084.167-.158c.924-.93 1.4-1.624 1.4-2.063s-.571-.979-1.354-1.724c-.252-.24-.526-.5-.814-.79-.714-.713-1.108-.558-1.971-.22-1.208.472-2.861 1.121-5.3-1.316-2.44-2.437-1.791-4.09-1.318-5.3.337-.863.492-1.257-.223-1.972-.292-.292-.555-.569-.8-.823-.74-.779-1.274-1.342-1.713-1.347a4.4 4.4 0 0 0-2.12 1.461zM20.77 7.965h-5.606a.75.75 0 0 1 0-1.5h5.606a.75.75 0 0 1 0 1.5M21.25 5.242h-5.6a.75.75 0 1 1 0-1.5h5.6a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M16.365 9.367a.77.77 0 0 1-.612-.315.75.75 0 0 1-.13-.56l.923-5.53a.75.75 0 0 1 1.48.248l-.922 5.53a.75.75 0 0 1-.74.627M19.131 9.37a.755.755 0 0 1-.74-.873l.92-5.53a.751.751 0 0 1 1.48.246l-.92 5.53a.75.75 0 0 1-.74.627"
    />
  </Svg>
);
export default IconlystPhoneCallHashtagOutline;
