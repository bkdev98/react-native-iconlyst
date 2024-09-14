import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlightTicketOutline = ({
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
      d="M17.65 20.049c-.167 0-.25 0-.332-.007a2.74 2.74 0 0 1-1.7-.744 5 5 0 0 0-.419-.357 1.25 1.25 0 0 0-1.4 0q-.2.148-.379.322c-.14.123-.2.17-.252.214a2.73 2.73 0 0 1-1.5.568 4 4 0 0 1-.326.007H7.274a7.8 7.8 0 0 1-2.016-.133 3.77 3.77 0 0 1-2.624-2.623 7.8 7.8 0 0 1-.134-2.018 4 4 0 0 1 .02-.547l.016-.122a1.05 1.05 0 0 1 .318-.683l.084-.092c.08-.091.2-.19 1.08-.933a1.17 1.17 0 0 0 .441-.867 1.14 1.14 0 0 0-.429-.93 13 13 0 0 1-1.069-.88l-.065-.071a1.12 1.12 0 0 1-.355-.734l-.016-.1a4 4 0 0 1-.02-.552c-.047-.692-.001-1.387.135-2.066a3.77 3.77 0 0 1 2.61-2.61 7.8 7.8 0 0 1 2.044-.137h4.056c.167 0 .25 0 .331.007a2.74 2.74 0 0 1 1.701.744q.201.191.422.36a1.25 1.25 0 0 0 1.4 0q.199-.15.378-.322c.14-.123.2-.171.252-.214a2.73 2.73 0 0 1 1.5-.568 4 4 0 0 1 .33-.007q.588-.022 1.174.045a3.74 3.74 0 0 1 3.128 3.129q.065.58.044 1.166v.449q.009.286-.02.57l-.016.1a1.12 1.12 0 0 1-.356.738l-.069.076q-.482.438-1.007.827a1.166 1.166 0 0 0-.383 1.445c.075.156.184.293.32.4q.56.412 1.073.885l.066.072c.208.19.334.454.355.735l.015.1q.03.284.022.57v.449q.022.585-.045 1.166A3.735 3.735 0 0 1 18.825 20q-.585.068-1.175.048M4.01 14.877 4 14.95c-.005.056 0 .153 0 .325a7.6 7.6 0 0 0 .08 1.62 2.27 2.27 0 0 0 1.57 1.575c.536.083 1.079.11 1.62.079h4.302a1.25 1.25 0 0 0 .685-.26 3 3 0 0 0 .134-.114 6 6 0 0 1 .582-.483 2.74 2.74 0 0 1 3.063 0q.285.206.541.448c.1.086.133.117.17.145.195.152.432.243.68.26h.228q.471.015.941-.027a2.24 2.24 0 0 0 1.88-1.877q.041-.467.026-.936v-.794l-.06-.121c-.066-.06-.362-.293-.9-.725a2.65 2.65 0 0 1 0-4.138c.564-.45.84-.666.922-.742l.04-.108c.005-.057 0-.158 0-.338v-.45q.016-.468-.027-.935A2.245 2.245 0 0 0 18.6 5.477a8 8 0 0 0-.943-.027h-.223a1.26 1.26 0 0 0-.685.259c-.037.029-.073.06-.134.115a6 6 0 0 1-.578.48 2.74 2.74 0 0 1-3.066 0 5 5 0 0 1-.542-.45c-.1-.085-.133-.116-.169-.144a1.25 1.25 0 0 0-.683-.26H7.292a7.7 7.7 0 0 0-1.644.082A2.26 2.26 0 0 0 4.085 7.1a7.5 7.5 0 0 0-.08 1.64c0 .189 0 .286.004.349l.06.117c.065.06.36.292.9.722a2.634 2.634 0 0 1 .737 3.182 2.7 2.7 0 0 1-.689.907c-.59.495-.892.747-.976.828z"
    />
    <Path
      fill={props.color}
      d="M15.939 12.747H9.197a.75.75 0 0 1-.617-.325l-.638-.926a.75.75 0 0 1 1.237-.85l.413.6h6.346a.75.75 0 1 1 0 1.5M11.25 15.476a.749.749 0 0 1-.609-1.187l.734-1.023a.75.75 0 1 1 1.22.875l-.736 1.023a.75.75 0 0 1-.61.312"
    />
    <Path
      fill={props.color}
      d="M13.693 12.748a.75.75 0 0 1-.56-.25l-2.44-2.73a.75.75 0 1 1 1.119-1l2.437 2.73a.748.748 0 0 1-.56 1.25z"
    />
  </Svg>
);
export default IconlystFlightTicketOutline;